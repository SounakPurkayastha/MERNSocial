const express = require("express");

const User = require("../models/user");

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
