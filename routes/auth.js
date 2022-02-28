const express = require("express");
const bcrypt = require("bcrypt");

const User = require("../models/user");

const router = express.Router();

//CREATE USER
router.post("/register", async (req, res) => {
  const user = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10), //not sure how this works
  };
  try {
    await User(user).save();
    res.send("successful");
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await User.findOne({ email: email });
    if (!user) return res.send("User not found");
    console.log(user);
    const isCorrectPassword = bcrypt.compareSync(password, user.password);
    if (isCorrectPassword) res.send("logged in");
    else res.send("incorrect password");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
