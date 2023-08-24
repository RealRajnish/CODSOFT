const Train = require("../../models/Trains/trainSchema");

// for adding trains
const addTrain = async (req, res) => {
  try {
    const data = new Train(req.body);
    const temp = await data.save();
    res.send(temp);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addTrain };
