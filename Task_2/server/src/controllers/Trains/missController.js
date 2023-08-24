// Assuming this code runs when a new train is added
const Train = require("../../models/Trains/trainSchema");
const SeatAvailability = require("../../models/Trains/seatAvailabilitySchema");

const initializeSeatAvailability = async (req, res) => {
  try {
    const train = await Train.find({ train: req.body.train });
    // const dates =req.body.date
    // console.log(dates)
    // console.log(train);
    for (const date of req.body.date) {
      const seatAvailability = new SeatAvailability({
        trainId: train[0].train,
        date: date,
        totalSL: train[0].totalSL,
        totalAC1: train[0].totalAC1,
        totalAC2: train[0].totalAC2,
        totalAC3: train[0].totalAC3,
        bookedSL: 0,
        bookedAC1: 0,
        bookedAC2: 0,
        bookedAC3: 0,
        uniqueProp: train[0].train + date,
      });
      await seatAvailability.save();
    }
    const data = await SeatAvailability.find({ trainId: train });
    res.send(data);
  } catch (error) {
    console.error("Error initializing seat availability:", error);
  }
};

// // initializing train seats api
// const initializeTrainSeats = async (req, res) => {
//   try {
//     // Call this function when adding a new train
//     const { train, date } = req.body;
//     initializeSeatAvailability(train, date);

//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = { initializeSeatAvailability };
