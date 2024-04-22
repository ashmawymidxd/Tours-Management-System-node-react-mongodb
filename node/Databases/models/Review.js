const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ReviewSchema = new Schema(
  {
    package: { type: Schema.Types.ObjectId, ref: "Package" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    comment: { type: String, required: false },
    stars: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
);

const ReviewModel = model("Review", ReviewSchema);

module.exports = ReviewModel;
