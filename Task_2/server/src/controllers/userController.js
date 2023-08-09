const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");

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

// for login in user
const signin = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.json({ error: "Plz Fill the data", code: 1 });
    }
    const userLogin = await User.findOne({ username });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      if (!isMatch) {
        res.status(400).json({ error: "invalid credentials...", code: 2 });
      } else {
        const token = await userLogin.generateAuthToken();
        console.log(token);

        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 2.628e9),
          // httpOnly: true,
        });
        res.json({ message: "user signin successfully.......", code: 3 });
      }
    } else {
      res.status(400).json({ error: "User Not Found.......", code: 4 });
    }
  } catch (error) {
    console.log(error);
  }
};

// for getting the data using cookies from the browser for authentication purpose client side
const hii = (req, res) => {
  const { username, email, contact } = req.rootUser;
  res.json({ username, email, contact });
  console.log(req.rootUser.username);
};

// Logout page
const logout = (req, res) => {
  console.log("Hello my logout page");
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).json({
    message: "Logout successfully",
  });
};

module.exports = { registeruser, signin, hii, logout };
