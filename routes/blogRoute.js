const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const blogSchema = require("../schemas/blogSchema");
const Blog = new mongoose.model("Blog", blogSchema);

router.get("/", async (req, res) => {
  try {
    const blog = await Blog.find({});
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json("there was a server side error");
  }
});
router.post("/", async (req, res) => {
  try {
    const newBlog = await new Blog(req.body).save();
    res.status(200).json(newBlog);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
