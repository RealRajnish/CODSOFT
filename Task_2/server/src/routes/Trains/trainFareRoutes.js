const {
  addTrainFare,
  getTrains,
} = require("../../controllers/Trains/trainFaresController");

const router = require("express").Router();

router.post("/addTrainFares", addTrainFare);
router.post("/getTrainsBtwStations", getTrains);

module.exports = router;
