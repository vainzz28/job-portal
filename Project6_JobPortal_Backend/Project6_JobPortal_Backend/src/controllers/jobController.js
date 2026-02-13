const Job = require("../models/Job");

exports.createJob = async (req, res) => {
  try {
    const { title, company, location, salary, jobType, description, skills } = req.body;

    if (!title || !company || !location || !description) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const job = await Job.create({
      title,
      company,
      location,
      salary: salary || 0,
      jobType: jobType || "Full Time",
      description,
      skills: skills || [],
      createdBy: req.user.id
    });

    res.json({ message: "Job created successfully", job });

  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.getJobs = async (req, res) => {
  try {
    const { search, location } = req.query;

    let filter = {};
    if (search) filter.title = { $regex: search, $options: "i" };
    if (location) filter.location = { $regex: location, $options: "i" };

    const jobs = await Job.find(filter)
      .populate("createdBy", "name email role")
      .sort({ createdAt: -1 });

    res.json(jobs);

  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate("createdBy", "name email role");
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.json(job);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });

    if (job.createdBy.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ message: "Not authorized" });
    }

    await Job.deleteOne({ _id: req.params.id });
    res.json({ message: "Job deleted successfully" });

  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};