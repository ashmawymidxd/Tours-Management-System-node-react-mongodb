const Issue = require("../Databases/Models/Issue");
const User = require("../Databases/Models/User");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const secret = "asdfe45we45w345wegw345werjktjwertkj";

async function createIssue(req, res) {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const { title, description, status } = req.body;

    const IssueDoc = await Issue.create({
      title,
      description,
      status,
      author: info.id,
    });
    res.json(IssueDoc);
  });
}

async function getIssues(req, res) {
  const issues = await Issue.find().populate("author", [
    "username",
    "email",
    "role",
  ]);
  res.json(issues);
}

async function getIssue(req, res) {
  const { id } = req.params;
  const issue = await Issue.findById(id);

  if (!issue) {
    return res.status(400).json("Issue not found");
  }
  res.json(issue);
}

async function deleteIssue(req, res) {
  const { id } = req.params;
  const issue = await Issue.findByIdAndDelete(id);

  if (!issue) {
    return res.status(400).json("Issue not found");
  }
  res.json(issue);
}

async function getUserIssues(req, res) {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const issues = await Issue.find({ author: info.id }).populate("author", [
      "username",
      "email",
      "role",
    ]);
    res.json(issues);
  });
}

/*
async function getUserIssues(req, res) {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    // const { id } = req.body;
    // const User = await User.findById(id);
    // const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
    // if (!isAuthor) {
    //   return res.status(400).json("you are not the author");
    // }
    // await postDoc.delete();
    res.json(info);
  });
}
*/

module.exports = {
  createIssue,
  getIssues,
  getIssue,
  deleteIssue,
  getUserIssues,
};
