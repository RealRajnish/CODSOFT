const { getAirports, addAirport } = require("../controllers/airportController");

const router = require("express").Router();

router.get("/getAirports", getAirports);
router.post("/addAirports", addAirport);

module.exports = router;
