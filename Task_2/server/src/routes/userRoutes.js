const { registeruser, signin, hii } = require("../controllers/userController");
const { Authenticate } = require("../middlewares/authenticate");

const router = require("express").Router();

router.post("/register", registeruser);
router.post("/login", signin);
router.get("/hii", Authenticate, hii);

module.exports = router;
