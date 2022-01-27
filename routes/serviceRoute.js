const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const serviceSchema = require("../schemas/serviceSchema");
const Service = new mongoose.model("Service", serviceSchema);

// get all services
router.get("/", async (req, res) => {
  try {
    const service = await Service.find({});
    res.status(200).json(service);
  } catch (err) {
    res.status(500).json({
      error: "there was a server side error",
    });
  }
});

// get a service by id
router.get("/:id", async (req, res) => {
  try {
    const oneService = await Service.find({ name: req.params.id });
    res.status(200).json(oneService);
  } catch (err) {
    res.status(500).json({
      error: "there was a server side error",
    });
  }
});

// post a service
router.post("/", async (req, res) => {
  try {
    const newService = await new Service(req.body).save();
    res.status(200).json(newService);
  } catch (err) {
    res.status(500).json("there was a server side error");
  }
});

// update a service by id
router.put("/:id", async (req, res) => {
  try {
    const updateService = await Service.updateOne(
      { _id: req.params.id },
      {
        $set: req.body,
      }
    );
    res.status(200).json(updateService);
  } catch (err) {
    res.status(500).json("there was a server side error");
  }
});

// Delete a service by id
router.delete("/:id", async (req, res) => {
  try {
    const deleteService = await Service.deleteOne({ _id: req.params.id });
    res.status(200).json(deleteService);
  } catch (err) {
    res.status(500).json("there was a server side error");
  }
});

module.exports = router;
