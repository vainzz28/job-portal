const Application = require("../models/Application");
const Job = require("../models/Job");

exports.applyJob = async (req, res) => {
  try {
    const { jobId, resumeLink } = req.body;

    if (!jobId || !resumeLink) {
      return res.status(400).json({ message: "jobId and resumeLink required" });
    }

    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });

    const alreadyApplied = await Application.findOne({ jobId, candidateId: req.user.id });
    if (alreadyApplied) {
      return res.status(400).json({ message: "You already applied for this job" });
    }

    const app = await Application.create({
      jobId,
      candidateId: req.user.id,
      resumeLink,
      status: "Applied"
    });

    res.json({ message: "Application submitted successfully", application: app });

  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.myApplications = async (req, res) => {
  try {
    const apps = await Application.find({ candidateId: req.user.id })
      .populate("jobId", "title company location jobType salary")
      .sort({ createdAt: -1 });

    res.json(apps);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.getAllApplications = async (req, res) => {
  try {
    const apps = await Application.find()
      .populate("jobId", "title company location")
      .populate("candidateId", "name email role")
      .sort({ createdAt: -1 });

    res.json(apps);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!["Applied", "Shortlisted", "Rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const app = await Application.findById(req.params.id);
    if (!app) return res.status(404).json({ message: "Application not found" });

    app.status = status;
    await app.save();

    res.json({ message: "Status updated", application: app });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};