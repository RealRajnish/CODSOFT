const { registeruser } = require("../controllers/userController");

const router = require("express").Router();

router.post("/register", registeruser);

module.exports = router;
