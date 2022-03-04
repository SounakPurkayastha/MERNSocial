const express = require("express");
const Post = require("../models/post");
const User = require("../models/user");

const router = new express.Router();

//CREATE new post
router.post("/", (req, res) => {
  const newPost = new Post(req.body);
  newPost.save();
  res.send("new post created");
});

//READ a post
router.get("/:id", async (req, res) => {
  //be careful about whether or not a function is async
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (err) {
    res.send(err);
  }
});

//UPDATE a post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (req.body.userId != post.userId)
      return res.send("You can only edit your own posts");
    await post.updateOne({ $set: req.body });
    res.send("Update successful");
  } catch (err) {
    res.send(err);
  }
});

//DELETE a post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (req.body.userId !== post.userId.toString())
      return res.send("You can only delete your own posts");
    await post.deleteOne();
    res.send("Delete successful");
  } catch (err) {
    res.send(err);
  }
});

//like a post
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.send("Post not found");
    await post.updateOne({ $push: { likes: req.body.userId } });
    return res.send("Post liked");
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
