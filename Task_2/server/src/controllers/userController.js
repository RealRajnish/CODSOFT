const User = require("../models/userSchema");

// registering the user
const registeruser = async (req, res) => {
  const { username, email, contact, password } = req.body;
  try {
    if (!username || !email || !contact || !password) {
      return res.status(422).json({ error: "please fill all fields properly" });
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(422).json({ error: "email already exists" });
    }
    const usernameExist = await User.findOne({ username });
    if (usernameExist) {
      return res.status(422).json({ error: "username already exists" });
    }

    const user = new User(req.body);
    const registeredUser = await user.save();
    res
      .status(200)
      .json({ success: "user registered successfully ...", code: 1 });
  } catch (e) {
    console.log(e);
  }
};

module.exports = { registeruser };
