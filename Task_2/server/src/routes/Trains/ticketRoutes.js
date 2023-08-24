const {
  addTrainTicket,
  getTrainTickets,
} = require("../../controllers/Trains/tilcketController");

const router = require("express").Router();

// router.get("/getAirports", getAirports);
router.post("/addTrainTicket", addTrainTicket);

router.post("/getTrainTickets", getTrainTickets);

module.exports = router;
