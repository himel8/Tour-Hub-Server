const router = require("express").Router();
const mongoose = require("mongoose");
const ReviewSchema = require("../schemas/reviewSchema");
const Review = new mongoose.model("Review", ReviewSchema);

router.get("/", async (req, res) => {
  try {
    const review = await Review.find({});
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json("there was a server side error");
  }
});
router.get("/:id", async (req, res) => {
  try {
    const reviewId = await Review.find({ id: req.params.id });
    res.status(200).json(reviewId[0]);
  } catch (err) {
    res.status(500).json("there was a server side error");
  }
});

router.post("/", async (req, res) => {
  try {
    const newReview = await new Review(req.body).save();
    res.status(200).json(newReview);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
