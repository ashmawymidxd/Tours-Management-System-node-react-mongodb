const { Router } = require("express");
const router = Router();

const {
  createIssue,
  getIssues,
  getIssue,
  deleteIssue,
  getUserIssues,
} = require("../Controllers/IssuesController");

router.post("/createIssue", createIssue);
router.get("/getIssues", getIssues);
router.get("/getIssue/:id", getIssue);
router.delete("/deleteIssue/:id", deleteIssue);
router.get("/getUserIssues",getUserIssues);

module.exports = router;
