const SeatAvailability = require("../../models/Trains/seatAvailabilitySchema");
const Ticket = require("../../models/Trains/ticketSchema");

// for adding trains
const addTrainTicket = async (req, res) => {
  try {
    const { user_id, passengers, contact, train, fares, uniqueProp } = req.body;
    // console.log(train);
    const totalPassengers = passengers.length;
    // console.log(totalPassengers);
    const data1 = await SeatAvailability.find({ uniqueProp });
    // console.log(data1);
    console.log(fares);
    if (train.cabin === "sleeper") {
      // console.log("inside sleeper function");
      if (data1[0].totalSL - data1[0].bookedSL > totalPassengers) {
        console.log("inside if condition");
        const totalFare = totalPassengers * fares.sleeper;
        try {
          const data = new Ticket({
            user_id,
            passengers,
            contact,
            train,
            totalFare,
          });
          const temp = await data.save();

          const temp1 = await SeatAvailability.updateOne(
            { uniqueProp },
            { $inc: { bookedSL: totalPassengers } }
          );
          // console.log(temp1);
          res.json({ code: 1, msg: "Tickets booked successfully" });
        } catch (error) {
          res.json({
            code: 2,
            msg: "sorry ticket could not be booked for the given date",
            error: error,
          });
          console.log(error);
        }
      } else {
        res.json({
          code: 2,
          msg: "sorry ticket could not be booked for the given date",
        });
      }
    } else if (train.cabin === "AC3") {
      // console.log("inside sleeper function");
      if (data1[0].totalAC3 - data1[0].bookedAC3 > totalPassengers) {
        console.log("inside if condition");
        const totalFare = totalPassengers * fares.AC3;
        try {
          const data = new Ticket({
            user_id,
            passengers,
            contact,
            train,
            totalFare,
          });
          const temp = await data.save();

          const temp1 = await SeatAvailability.updateOne(
            { uniqueProp },
            { $inc: { bookedAC3: totalPassengers } }
          );
          // console.log(temp1);
          res.json({ code: 1, msg: "Tickets booked successfully" });
        } catch (error) {
          res.json({
            code: 2,
            msg: "sorry ticket could not be booked for the given date",
            error: error,
          });
          console.log(error);
        }
      } else {
        res.json({
          code: 2,
          msg: "sorry ticket could not be booked for the given date",
        });
      }
    } else if (train.cabin === "AC2") {
      // console.log("inside sleeper function");
      if (data1[0].totalAC2 - data1[0].bookedAC2 > totalPassengers) {
        console.log("inside if condition");
        const totalFare = totalPassengers * fares.AC2;
        try {
          const data = new Ticket({
            user_id,
            passengers,
            contact,
            train,
            totalFare,
          });
          const temp = await data.save();

          const temp1 = await SeatAvailability.updateOne(
            { uniqueProp },
            { $inc: { bookedAC2: totalPassengers } }
          );
          // console.log(temp1);
          res.json({ code: 1, msg: "Tickets booked successfully" });
        } catch (error) {
          res.json({
            code: 2,
            msg: "sorry ticket could not be booked for the given date",
            error: error,
          });
          console.log(error);
        }
      } else {
        res.json({
          code: 2,
          msg: "sorry ticket could not be booked for the given date",
        });
      }
    } else if (train.cabin === "AC1") {
      // console.log("inside sleeper function");
      if (data1[0].totalAC1 - data1[0].bookedAC1 > totalPassengers) {
        console.log("inside if condition");
        const totalFare = totalPassengers * fares.AC1;
        try {
          const data = new Ticket({
            user_id,
            passengers,
            contact,
            train,
            totalFare,
          });
          const temp = await data.save();

          const temp1 = await SeatAvailability.updateOne(
            { uniqueProp },
            { $inc: { bookedAC1: totalPassengers } }
          );
          // console.log(temp1);
          res.json({ code: 1, msg: "Tickets booked successfully" });
        } catch (error) {
          res.json({
            code: 2,
            msg: "sorry ticket could not be booked for the given date",
            error: error,
          });
          console.log(error);
        }
      } else {
        res.json({
          code: 2,
          msg: "sorry ticket could not be booked for the given date",
        });
      }
    }
    // const data = new Ticket({});
    // const temp = await data.save();
    // res.send(data1);
  } catch (error) {
    console.log(error);
  }
};

const getTrainTickets = async (req, res) => {
  const { user_id } = req.body;
  try {
    const data = await Ticket.find({});
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addTrainTicket, getTrainTickets };
