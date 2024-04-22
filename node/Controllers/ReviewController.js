const Review = require("../Databases/Models/Review");
const Booking = require("../Databases/Models/Booking");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const secret = "asdfe45we45w345wegw345werjktjwertkj";

async function createReview(req, res) {
  const { package, comment, stars } = req.body;
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Failed to verify token" });
    }

    try {
      const reviewDoc = await Review.create({
        package,
        user: info.id,
        comment,
        stars,
      });

      // updated the booking statues to reviewed
      const userBookingPackage = await Booking.findOne({
        package,
        user: info.id,
      });
      userBookingPackage.status = "reviewed";
      await userBookingPackage.save();

      return res.json(reviewDoc);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: "Invalid date format" });
    }
  });
}

async function getReviews(req, res) {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Failed to verify token" });
    }

    const reviewDocs = await Review.find()
      .populate("package", [
        "name",
        "price",
        "description",
        "location",
        "type",
        "cover",
      ])
      .populate("user", ["username", "email", "role", "created_at"]);

    return res.json(reviewDocs);
  });
}

async function getReview(req, res) {
  const reviewId = req.params.id;

  try {
    const review = await Review.findById(reviewId)
      .populate("package", ["name", "price", "description"])
      .populate("user", ["username", "email", "role"]);

    res.json(review);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch review" });
  }
}

async function deleteReview(req, res) {
  const reviewId = req.params.id;

  try {
    const reviewDoc = await Review.findById(reviewId);
    await reviewDoc.remove();
    return res.json({ message: "Review deleted" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to delete review" });
  }
}

async function getAllReviews(req, res) {
  try {
    const reviewDocs = await Review.find()
      .populate("package", [
        "name",
        "price",
        "description",
        "location",
        "type",
        "cover",
      ])
      .populate("user", ["username", "email", "role", "created_at"]);

    return res.json(reviewDocs);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to fetch reviews" });
  }
}

async function getPackageReviews(req, res) {
  const packageId = req.params.id;
  try {
    const reviewDocs = await Review.find({ package: packageId })
      .populate("package", [
        "name",
        "price",
        "description",
        "location",
        "type",
        "cover",
      ])
      .populate("user", ["username", "email", "role", "created_at"]);

    return res.json(reviewDocs);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to fetch reviews" });
  }
}

module.exports = {
  createReview,
  getReviews,
  getReview,
  deleteReview,
  getAllReviews,
  getPackageReviews,
};
