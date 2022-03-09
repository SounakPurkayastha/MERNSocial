const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
    res.send({
      id: user.id,
      username: user.username,
      token: generateToken(user.id),
    });
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
    if (isCorrectPassword) {
      res.send({
        id: user.id,
        username: user.username,
        token: generateToken(user.id),
      });
    } else res.send("incorrect password");
  } catch (err) {
    console.log(err);
  }
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "15m",
  });
};

module.exports = router;
