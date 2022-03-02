const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const { append } = require("express/lib/response");

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

//follow a user
router.put("/:id/follow", async (req, res) => {
  const follower = req.body.id;
  const toFollow = req.params.id;
  if (follower === toFollow) return res.send("you cannot follow yourself");
  try {
    const followerUser = await User.findById(follower);
    const toFollowUser = await User.findById(toFollow);
    if (!followerUser || !toFollowUser) return res.send("User not found");
    if (followerUser.followings.includes(toFollow))
      return res.send("You already follow this user");
    await followerUser.updateOne({ $push: { followings: toFollow } }); // learnt some new
    await toFollowUser.updateOne({ $push: { followers: follower } }); // stuff here
    return res.send("successfully added");
  } catch (err) {
    res.send(err);
  }
});

//unfollow a user
router.put("/:id/unfollow", async (req, res) => {
  const follower = req.body.id;
  const toUnfollow = req.params.id;
  if (follower === toUnfollow) return res.send("you cannot unfollow yourself");
  try {
    const followerUser = await User.findById(follower);
    const toUnfollowUser = await User.findById(toUnfollow);
    if (!followerUser || !toUnfollowUser) return res.send("User not found");
    if (!followerUser.followings.includes(toUnfollow))
      return res.send("You do not follow this user");
    await followerUser.updateOne({ $pull: { followings: toUnfollow } });
    await toUnfollowUser.updateOne({ $pull: { followers: follower } });
    return res.send("successfully removed");
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
