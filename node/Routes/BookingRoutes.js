const { Router } = require("express");
const router = Router();

const {
  createBooking,
  getBookings,
  getBookingsForUser,
  getBooking,
  deleteBooking,
  getAllBookings
} = require("../Controllers/BookingController");
const { route } = require("./AuthRoutes");

router.post("/createBooking", createBooking);
router.get("/getBookings", getBookings);
router.get("/getBookingsForUser/:userId", getBookingsForUser);
router.get("/getBooking/:id", getBooking);
router.delete("/deleteBooking/:id", deleteBooking);
router.get("/getAllBookings",getAllBookings)


module.exports = router;
