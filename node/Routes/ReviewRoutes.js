const { Router } = require("express");
const router = Router();

const {
  createReview,
  getReviews,
  getReview,
  deleteReview,
  getAllReviews,
  getPackageReviews,
} = require("../Controllers/ReviewController");

router.post("/createReview", createReview);
router.get("/getReviews", getReviews);
router.get("/getReview/:id", getReview);
router.delete("/deleteReview/:id", deleteReview);
router.get("/getAllReviews", getAllReviews);
router.get("/getPackageReviews/:id", getPackageReviews);



module.exports = router;
