const router = require("express").Router();
const { applyJob, myApplications, getAllApplications, updateStatus } = require("../controllers/applicationController");
const { authMiddleware, recruiterOnly } = require("../middleware/authMiddleware");

router.post("/apply", authMiddleware, applyJob);
router.get("/my", authMiddleware, myApplications);

router.get("/all", authMiddleware, recruiterOnly, getAllApplications);
router.put("/:id/status", authMiddleware, recruiterOnly, updateStatus);

module.exports = router;