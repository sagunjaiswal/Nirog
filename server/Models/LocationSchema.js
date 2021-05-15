const mongoose = require("mongoose");
const TimeSchema = require("./TimeSchema");

const locationSchema = new mongoose.Schema({
  clinicName: {
    type: String,
    required: true,
  },
  streetName: {
    type: String,
    required: true,
  },
  locality: {
    type: String,
    required: true,
  },
  landmark: {
    type: String,
  },
  postOffice: {
    type: String,
    required: true,
  },
  pinCode: {
    type: Number,
    reuqired: true,
  },
  city: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  time: {
    type: mongoose.Schema.Types.ObjectId,
    ref: TimeSchema,
    required: true,
  },
});

module.exports = new mongoose.model("location", locationSchema);
