const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const IssuesSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },

    author: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const IssuesModel = model("Issue", IssuesSchema);

module.exports = IssuesModel;
