const Station = require("../../models/Trains/stationSchema");

// for adding stations
const addStation = async (req, res) => {
  try {
    const data = new Station(req.body);
    const temp = await data.save();
    console.log(temp);
    res.send(temp);
  } catch (error) {
    console.log(error);
  }
};

// for getting station lists
const getRailStations = async (req, res) => {
  try {
    const data = await Station.find(
      {},
      { name: 1, StationCode: 1, city: 1, state: 1 }
    );
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addStation, getRailStations };
