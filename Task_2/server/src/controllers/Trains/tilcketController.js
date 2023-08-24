const Ticket = require("../../models/Trains/ticketSchema");

// for adding trains
const addTrainTicket = async (req, res) => {
  try {
    const data = new Ticket(req.body);
    const temp = await data.save();
    res.send(temp);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addTrainTicket };
