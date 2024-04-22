const { Router } = require("express");
const router = Router();

// import grocControllers
const {
  register,
  login,
  profile,
  logout,
  updateProfile,
  updatePassword,
  getAllUsers,
} = require("../Controllers/AuthController");

router.post("/register", register);
router.post("/login", login);
router.get("/profile", profile);
router.post("/logout", logout);
router.put("/updateProfile", updateProfile);
router.put("/updatePassword", updatePassword);
router.get("/getAllUsers", getAllUsers);

module.exports = router;



