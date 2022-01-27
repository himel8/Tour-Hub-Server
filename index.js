const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const serviceRoute = require("./routes/serviceRoute");
const userRoute = require("./routes/userRoute");
const reviewRoute = require("./routes/reviewRoute");
const orderRoute = require("./routes/orderRoute");
const paymentRoute = require("./routes/paymentRoute");
const blogRoute = require("./routes/blogRoute");

require("dotenv").config();

// express app initialization
const app = express();

app.use(cors());
app.use(express.json());

// declear port
const port = process.env.PORT || 5000;

// database connection with mongoose
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tmyoe.mongodb.net/TourHub?retryWrites=true&w=majority`
  )
  .then(() => console.log("database connected successfully"))
  .catch((err) => {
    console.log(err);
  });

// application routes
app.use("/services", serviceRoute);
app.use("/users", userRoute);
app.use("/reviews", reviewRoute);
app.use("/orders", orderRoute);
app.use("/payment", paymentRoute);
app.use("/blogs", blogRoute);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
