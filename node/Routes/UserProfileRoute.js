const { Router } = require("express");
const router = Router();
const {
  profileImageUpload,
  updateProfile,
  updatePassword,
} = require("../Controllers/UserProfileController");

router.post("/profileImageUpload/:id", profileImageUpload);
router.put("/updateProfile", updateProfile);
router.put("/updatePassword", updatePassword);

module.exports = router;
