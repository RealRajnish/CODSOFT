const mongoose = require("mongoose");

const stationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  StationCode: {
    type: String,
    unique: true,
    required: true,
  },
  city: {
    type: String,
    default: "",
  },
  state: {
    type: String,
    defalut: "",
  },
  pincode: {
    type: Number,
    default: "",
  },
  Trains: [
    {
      type: Number,
    },
  ],
});

const Station = mongoose.model("Station", stationSchema);

module.exports = Station;
