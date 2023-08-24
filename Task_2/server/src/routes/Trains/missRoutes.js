const {
  initializeSeatAvailability,
} = require("../../controllers/Trains/missController");

const router = require("express").Router();

// for adding railway stations
router.post("/initializeTrainSeats", initializeSeatAvailability);

module.exports = router;
