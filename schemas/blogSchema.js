const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema(
  {
    name: { type: String },
    title: { type: String },
    desc: { type: String },
    img: { type: String },
  },
  { timestamps: true }
);

module.exports = serviceSchema;
