const mongoose = require("mongoose");

const trainFaresSchema = new mongoose.Schema({
  start: {
    type: String,
  },
  end: {
    type: String,
  },
  fares: {
    AC1: {
      type: Number,
      required: true,
    },
    AC2: {
      type: Number,
      required: true,
    },
    AC3: {
      type: Number,
      required: true,
    },
    sleeper: {
      type: Number,
      required: true,
    },
  },
  train: {
    type: String,
    required: true,
    unique: true,
  },
  departure: {
    type: String,
    required: true,
  },
  arrival: {
    type: String,
    required: true,
  },
});

const TrainFaresSchema = mongoose.model("TrainFare", trainFaresSchema);

module.exports = TrainFaresSchema;
