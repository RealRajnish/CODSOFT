const {
  addStation,
  getRailStations,
} = require("../../controllers/Trains/stationController");

const router = require("express").Router();

// for getting list of stations
router.get("/getRailStations", getRailStations);
// for adding railway stations
router.post("/addStations", addStation);

module.exports = router;
