const mongoose = require("mongoose");

const seatAvailabilitySchema = new mongoose.Schema({
  trainId: {
    type: String, // Use String type to store the ObjectId as a string
    required: true,
  },
  date: {
    type: Date,
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

  bookedSL: {
    type: Number,
    required: true,
  },
  bookedAC1: {
    type: Number,
    required: true,
  },
  bookedAC2: {
    type: Number,
    required: true,
  },
  bookedAC3: {
    type: Number,
    required: true,
  },
});

const SeatAvailability = mongoose.model(
  "TrainSeatAvailability",
  seatAvailabilitySchema
);

module.exports = SeatAvailability;
