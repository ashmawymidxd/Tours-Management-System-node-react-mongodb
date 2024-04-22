const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PackageSchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    location: { type: String, required: true },
    details: { type: String, required: true },
    features: { type: String, required: true },
    cover: { type: String, required: false },
    price:{ type: String, required: true},
    author: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const PackageModel = model("Package", PackageSchema);

module.exports = PackageModel;
