const { Router } = require("express");
const router = Router();
const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/Packages" });
const {
  createPackage,
  updatePackage,
  deletePackage,
  getPackage,
  getUserPackage,
  getPackages,
} = require("../Controllers/PackageController");

router.post("/createPackage", uploadMiddleware.single("file"), createPackage);
router.put("/updatePackage", uploadMiddleware.single("file"), updatePackage);
router.delete("/deletePackage/:id", deletePackage);
router.get("/getPackage/:id", getPackage);
router.get("/getUserPackage/:id", getUserPackage);
router.get("/getPackages", getPackages);

module.exports = router;
