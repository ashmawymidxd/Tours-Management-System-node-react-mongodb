const Package = require("../Databases/Models/Package");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const secret = "asdfe45we45w345wegw345werjktjwertkj";

async function createPackage(req, res) {
  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;
  fs.renameSync(path, newPath);
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const { name, type, location, details, features, price } = req.body;

    const PackageDoc = await Package.create({
      name,
      type,
      location,
      price,
      details,
      features,
      cover: newPath,
      author: info.id,
    });
    res.json(PackageDoc);
  });
}

async function updatePackage(req, res) {
  let newPath = null;
  if (req.file) {
    const { originalname, path } = req.file;
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    newPath = path + "." + ext;
    fs.renameSync(path, newPath);
  }

  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const { id, name, type, location, price, details, features, lcover } =
      req.body;
    const packageDoc = await Package.findByIdAndUpdate(id, {
      name,
      type,
      location,
      price,
      details,
      features,
      lcover,
      cover: newPath ? newPath : lcover,
    });

    if (!packageDoc) {
      return res.status(400).json("Package not found");
    }
    const isAuthor =
      JSON.stringify(packageDoc.author) === JSON.stringify(info.id);
    if (!isAuthor) {
      return res.status(400).json("You are not the author");
    }

    // Update the cover only if newPath is defined
    if (newPath) {
      packageDoc.cover = newPath;
      await packageDoc.save();
    }

    res.json(packageDoc);
  });
}

async function deletePackage(req, res) {
  const { id } = req.params;

  // Use the findByIdAndDelete method and handle the promise
  Package.findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({ error: "Package not found" });
      }
      res.json({ message: "Package deleted successfully", result });
    })
    .catch((err) => {
      console.error("Error deleting package:", err);
      res.status(500).json({ error: "Could not delete package" });
    });
}

async function getPackage(req, res) {
  const { id } = req.params;
  const PackageDoc = await Package.findById(id).populate("author", [
    "username",
    "email",
    "role",
  ]);
  res.json(PackageDoc);
}

async function getUserPackage(req, res) {
  const { id } = req.params;
  const PackageDoc = await Package.findById(id).populate("author", [
    "username",
    "email",
    "role",
  ]);
  res.json(PackageDoc);
}

async function getPackages(req, res) {
  res.json(
    await Package.find()
      .populate("author", ["username", "email", "role"])
      .sort({ createdAt: -1 })
      .limit(20)
  );
}

module.exports = {
  createPackage,
  updatePackage,
  deletePackage,
  getPackage,
  getUserPackage,
  getPackages,
};
