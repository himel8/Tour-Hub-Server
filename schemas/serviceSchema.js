const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: String,
  price: Number,
  img: String,
});

module.exports = serviceSchema;

// name: "TOURS IN MOSCOW",
// desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ipsa ducimus labore perferendis reiciendis quasi.",
// price: 1500,
// img: "https://i.ibb.co/Kr1gJdD/Moscow.jpg",
