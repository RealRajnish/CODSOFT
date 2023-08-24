const {
  getAirports,
  addAirport,
} = require("../../controllers/Flights/airportController");

const router = require("express").Router();

router.get("/getAirports", getAirports);
router.post("/addAirports", addAirport);

module.exports = router;
