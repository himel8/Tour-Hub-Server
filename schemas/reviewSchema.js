const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema(
  {
    name: { type: String },
    id: { type: String },
    title: { type: String },
    desc: { type: String },
    rating: { type: Number },
  },
  { timestamps: true }
);

module.exports = ReviewSchema;
