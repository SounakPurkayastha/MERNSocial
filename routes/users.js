const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");

const router = express.Router();

//READ USER
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user);
  } catch (err) {
    console.log(err);
  }
});

//UPDATE USER
router.put("/:id", async (req, res) => {
  if (req.params.id != req.body.id) {
    return res.send("Unauthorized"); // only the user can update their account
  }
  if (req.body.password) {
    req.body.password = bcrypt.hashSync(req.body.password, 10); // new password needs to be hashed before storing
  }
  try {
    await User.findByIdAndUpdate(req.params.id, { $set: req.body });
    res.send("Succesful");
  } catch (err) {
    res.send(err);
  }
});

//DELETE USER
router.delete("/:id", async (req, res) => {
  if (req.params.id != req.body.id) {
    return res.send("Unauthorized"); // only the user can delete their account
  }
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send("Succesful");
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
