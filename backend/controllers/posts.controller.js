const express = require("express");
const router = express.Router();
const postService = require("../services/post.service");
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize');

// routes
router.get("/category/:key", postService.getPostsByCategory);
router.post("/search/:key", postService.getPostsBySearch);
router.get("/byId/:id", postService.getPostById);
router.get("/userPosts", getUserPosts);
router.post("/remember", postService.rememberPost);
router.get("/rememberedBy/:accountId", postService.getRememberedPosts);
router.post("/", authorize(), addPostSchema, addPost);
router.get("/creatorPosts/:id", authorize(), getPostsByAccountId)
router.delete("/removePost/:id", authorize(), removePost);
router.put("/updatePost/:id", authorize(), updatePostSchema, updatePost);

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

function addPostSchema(req, res, next) {
  const schema = Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
      category: Joi.string().required(),
      price: Joi.number().required(),
      deliveryTime: Joi.number().required(),
      images: Joi.string().required(),
      accountId: Joi.number().required()
  });
  validateRequest(req, next, schema);
}

async function addPost(req, res, next) {
  try {
    await postService.addPost(req.body);
    res.status(200).json({ message: 'Skelbimas pridėtas', success: true});
  } catch (error) {
    res.status(400).json({ message: error, success: false});
  }
}

function getPostsByAccountId(req, res, next) {
  let accountId = req.params.id;
  postService.getPostsByAccountId(accountId)
    .then(posts => res.status(200).json({ posts: posts, success: true}))
    .catch(next);
}

function updatePostSchema(req, res, next) {
  const schema = Joi.object({
      title: Joi.string().empty(''),
      description: Joi.string().empty(''),
      category: Joi.string().empty(''),
      price: Joi.number().empty(''),
      deliveryTime: Joi.number().empty(''),
      images: Joi.string().empty('')
  });
  validateRequest(req, next, schema);
}

async function updatePost(req, res, next) {
  try {
    let postId = req.params.id;
    let accountId = req.user.id;
    await postService.updatePost(postId, accountId, req.body);
    res.status(200).json({ message: "Skelbimas atnaujintas", success: true });
  } catch (error) {
    res.status(400).json({ message: error, success: false });
  }
}

function removePost(req, res, next) {
  let accountId = req.user.id;
  let postId = req.params.id;
  postService.removePost(accountId, postId)
    .then(message => res.json({ message: message }))
    .catch(next);
}
