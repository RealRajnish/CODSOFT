const Airport = require("../../models/Flights/airportSchema");

// for adding airports
const addAirport = async (req, res) => {
  try {
    const data = req.body;
    const airport = new Airport(data);
    const temp = await airport.save();
    res.send(temp);
    console.log(temp);
  } catch (error) {
    console.log(error);
  }
};

// retrieve list of all airports
const getAirports = async (req, res) => {
  try {
    const resp = await Airport.find({}, { _id: 0, __v: 0 });
    res.send(resp);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { addAirport, getAirports };
