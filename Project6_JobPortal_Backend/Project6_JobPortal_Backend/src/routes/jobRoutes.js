const router = require("express").Router();
const { createJob, getJobs, getJobById, deleteJob } = require("../controllers/jobController");
const { authMiddleware, recruiterOnly } = require("../middleware/authMiddleware");

router.get("/", getJobs);
router.get("/:id", getJobById);

router.post("/", authMiddleware, recruiterOnly, createJob);
router.delete("/:id", authMiddleware, deleteJob);

module.exports = router;