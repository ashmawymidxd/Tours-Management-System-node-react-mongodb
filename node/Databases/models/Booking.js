const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const BookingSchema = new Schema(
  {
    package: { type: Schema.Types.ObjectId, ref: "Package" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    comment: { type: String, required: false },
    status: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const BookingModel = model("Booking", BookingSchema);

module.exports = BookingModel;
