const SeatAvailability = require("../../models/Trains/seatAvailabilitySchema");

const getTrainSeatsAvailability = async (req, res) => {
  try {
    const { uniqueProp } = req.body;
    const data = await SeatAvailability.find({ uniqueProp });
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { getTrainSeatsAvailability };
