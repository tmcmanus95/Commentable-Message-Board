const express = require("express");
const router = express.Router();
const { Post } = require("../models/");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.render("homepage", { posts: posts });
    // res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
