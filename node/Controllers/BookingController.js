const Booking = require("../Databases/Models/Booking");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const secret = "asdfe45we45w345wegw345werjktjwertkj";

async function createBooking(req, res) {
  const { package, startDate, endDate, comment, status } = req.body;
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Failed to verify token" });
    }

    try {
      const parsedStartDate = new Date(startDate);
      const parsedEndDate = new Date(endDate);

      if (isNaN(parsedStartDate.getTime()) || isNaN(parsedEndDate.getTime())) {
        throw new Error("Invalid date format");
      }

      const bookingDoc = await Booking.create({
        package,
        user: info.id,
        comment,
        startDate: parsedStartDate,
        endDate: parsedEndDate,
        status,
      });

      return res.json(bookingDoc);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: "Invalid date format" });
    }
  });
}

async function getBookings(req, res) {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Failed to verify token" });
    }

    const bookingDocs = await Booking.find()
      .populate("package", [
        "name",
        "price",
        "description",
        "location",
        "type",
        "cover",
      ])
      .populate("user", ["username", "email", "role", "created_at"]);

    return res.json(bookingDocs);
  });
}

async function getBookingsForUser(req, res) {
  const userId = req.params.userId;

  try {
    const bookings = await Booking.find({ user: userId })
      .populate("package", ["name", "price", "description"])
      .populate("user", ["username", "email", "role"]);

    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch bookings" });
  }
}

async function getBooking(req, res) {
  const bookingId = req.params.id;

  try {
    const booking = await Booking.findById(bookingId)
      .populate("package", [
        "name",
        "price",
        "details",
        "location",
        "createdAt",
        "features",
      ])
      .populate("user", ["username", "email", "role"]);

    res.json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch booking" });
  }
}

async function deleteBooking(req, res) {
  const { id } = req.params;

  // Use the findByIdAndDelete method and handle the promise
  Booking.findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({ error: "Pooking not found" });
      }
      res.json({ message: "Pooking deleted successfully", result });
    })
    .catch((err) => {
      console.error("Error deleting Pooking:", err);
      res.status(500).json({ error: "Could not delete Pooking" });
    });
}


async function getAllBookings(req, res) {
  try {
    const bookings = await Booking.find()
      .populate("package", ["name", "price", "description"])
      .populate("user", ["username", "email", "role"]);

    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch bookings" });
  }
}

module.exports = {
  createBooking,
  getBookings,
  getBookingsForUser,
  getBooking,
  deleteBooking,
  getAllBookings
};
