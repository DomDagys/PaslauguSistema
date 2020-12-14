const express = require("express");
const router = express.Router();
const postService = require("./post.service");

// routes
router.get("/category/:key", postService.getPostsByCategory);
router.post("/search/:key", postService.getPostsBySearch);
router.get("/:id", postService.getPostById);

module.exports = router;
