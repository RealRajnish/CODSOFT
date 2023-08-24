const TrainFaresSchema = require("../../models/Trains/trainFaresSchema");
const Train = require("../../models/Trains/trainSchema");
// for adding trains fares between different stations
const addTrainFare = async (req, res) => {
  try {
    const data = new TrainFaresSchema(req.body);
    const temp = await data.save();

    res.send(temp);
  } catch (error) {
    console.log(error);
  }
};

// for getting trains between stations
const getTrains = async (req, res) => {
  try {
    const { start, end } = req.body;
    const data = await TrainFaresSchema.find({ start, end });
    // console.log(data);
    const codes = data.map((elem) => elem.train);
    console.log(codes);
    const trainName = await Train.aggregate([
      {
        $match: { train: { $in: codes } },
      },
      {
        $project: { _id: 0, name: 1, train: 1 },
      },
    ]);
    console.log(trainName);
    const temp1 = [...data];
    const temp2 = [...trainName];

    console.log(temp1);
    console.log(temp2);

    // const mergedArray = temp1.map((item1) => {
    //   const matchingItem = temp2.find((item2) => item2.train === item1.train);
    //   // console.log();
    //   return { ...item1, ...matchingItem };
    // });
    res.json({ data, trainName });

    // console.log(mergedArray);
    // res.send(mergedArray);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addTrainFare, getTrains };
