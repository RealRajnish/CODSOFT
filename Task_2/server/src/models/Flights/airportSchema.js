const mongoose = require("mongoose");

const airportSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  IATA: {
    type: String,
    unique: true,
    required: true,
  },
});

const Airport = mongoose.model("Airport", airportSchema);

module.exports = Airport;
