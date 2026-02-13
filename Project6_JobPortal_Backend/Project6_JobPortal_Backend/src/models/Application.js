const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
  candidateId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  resumeLink: { type: String, required: true },
  status: { type: String, enum: ["Applied", "Shortlisted", "Rejected"], default: "Applied" }
}, { timestamps: true });

module.exports = mongoose.model("Application", applicationSchema);