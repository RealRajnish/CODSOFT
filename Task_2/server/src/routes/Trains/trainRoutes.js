const { addTrain } = require("../../controllers/Trains/trainController");

const router = require("express").Router();

// router.get("/getAirports", getAirports);
router.post("/addTrains", addTrain);

module.exports = router;
