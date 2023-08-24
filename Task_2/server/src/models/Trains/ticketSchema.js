const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  passengers: [
    {
      name: {
        type: String,
        required: true,
      },
      age: {
        type: String,
        required: true,
      },
      gender: {
        type: String,
        required: true,
      },
    },
  ],
  contact: {
    type: String,
    required: true,
  },
  train: {
    start: {
      type: String,
    },
    end: {
      type: String,
    },
    name: {
      type: String,
    },
    train: {
      type: String,
    },
    date: {
      day: {
        type: Number,
      },
      month: {
        type: Number,
      },
      year: {
        type: Number,
      },
    },
    cabin: {
      type: String,
    },
    departure: {
      type: String,
    },
    arrival: {
      type: String,
    },
  },
  totalFare: {
    type: Number,
  },
});

const Tickets = mongoose.model("TrainTickets", ticketSchema);

module.exports = Tickets;
