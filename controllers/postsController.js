const express = require("express");
const router = express.Router();
const { Post } = require("../models/Post");

router.get("/dashboard", async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.render("dashboard", { posts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/post/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findByPk(postId);
    res.render("post", { post });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
