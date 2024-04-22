const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const EnquirySchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    subject: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const EnquiryModel = model("Enquiry", EnquirySchema);

module.exports = EnquiryModel;
