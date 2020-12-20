const express = require("express");
const router = express.Router();
const postService = require("./post.service");

// routes
router.get("/category/:key", postService.getPostsByCategory);
router.post("/search/:key", postService.getPostsBySearch);
router.get("/byId/:id", postService.getPostById);
router.get("/userPosts", getUserPosts);
router.post("/remember", postService.rememberPost);
router.get("/rememberedBy/:accountId", postService.getRememberedPosts);

module.exports = router;

function getUserPosts(req, res, next) {
  try {
    postService
      .getUserPosts(req.query.username)
      .then((posts) => res.json(posts))
      .catch(next);
  } catch (err) {
    res.status(404).json({ message: err });
  }
}
