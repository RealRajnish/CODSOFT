const {
  addTrainTicket,
} = require("../../controllers/Trains/tilcketController");

const router = require("express").Router();

// router.get("/getAirports", getAirports);
router.post("/addTrainTicket", addTrainTicket);

module.exports = router;
