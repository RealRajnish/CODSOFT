const mongoose = require("mongoose");

const trainSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  train: {
    type: String,
    unique: true,
    required: true,
  },
  totalSL: {
    type: Number,
    required: true,
  },
  totalAC1: {
    type: Number,
    required: true,
  },
  totalAC2: {
    type: Number,
    required: true,
  },
  totalAC3: {
    type: Number,
    required: true,
  },
  Route: [
    {
      station: {
        type: String,
        required: true,
      },
      arrival: {
        type: String,
        required: true,
        default: "",
      },
      departure: {
        type: String,
        required: true,
        default: "",
      },
    },
  ],
});

const Train = mongoose.model("Train", trainSchema);

module.exports = Train;
