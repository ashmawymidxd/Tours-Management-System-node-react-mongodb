const { Router } = require("express");
const router = Router();

const {
  createEnquiry,
  getEnquiries,
  getEnquiry,
  deleteEnquiry,
  getUserEnquirys,  
} = require("../Controllers/EnquiryController");

router.post("/createEnquiry", createEnquiry);
router.get("/getEnquiries", getEnquiries);
router.get("/getEnquiry/:id", getEnquiry);
router.delete("/deleteEnquiry/:id", deleteEnquiry);
router.get("/getUserEnquirys", getUserEnquirys);

module.exports = router;
