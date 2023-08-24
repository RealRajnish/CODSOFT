const {
  getTrainSeatsAvailability,
} = require("../../controllers/Trains/trainSeatAvailabilityController");

const router = require("express").Router();

// for adding railway stations
router.post("/getTrainSeatsAvailability", getTrainSeatsAvailability);

module.exports = router;
