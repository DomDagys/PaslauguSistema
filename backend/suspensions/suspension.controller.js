const express = require("express");
const router = express.Router();
const Joi = require("joi");
const Role = require("_helpers/role");
const validateRequest = require("_middleware/validate-request");
const authorize = require("_middleware/authorize");
const suspensionService = require("./suspension.service");

router.post("/post", authorize(Role.Admin), suspendPostSchema, suspendPost);
router.post("/user", authorize(Role.Admin), suspendUserSchema, suspendUser);
router.get("/post", authorize(Role.Admin), getSuspendedPosts);
router.get("/user", authorize(Role.Admin), getSuspendedUsers);
router.put("/post", authorize(Role.Admin), removePostSuspensionSchema, removePostSuspension);
router.put("/user", authorize(Role.Admin), removeUserSuspensionSchema, removeUserSuspension);
router.delete("/post:id", authorize(Role.Admin), removePost);

module.exports = router;

function suspendPostSchema(req, res, next) {
  const schema = Joi.object({
    postId: Joi.number().required(),
    adminName: Joi.string().required(),
  });
  validateRequest(req, next, schema);
}

function suspendPost(req, res, next) {
  let { postId, adminName } = req.body;
  suspensionService
    .suspendPost(postId, adminName, null)
    .then(() => res.json({ success: true, message: "Skelbimas suspenduotas. " }))
    .catch(next);
}

function getSuspendedPosts(req, res, next) {
  suspensionService
    .getSuspendedPosts()
    .then((suspensions) => res.json(suspensions))
    .catch(next);
}

function removePostSuspensionSchema(req, res, next) {
  const schema = Joi.object({
    id: Joi.number().required(),
  });
  validateRequest(req, next, schema);
}

function removePostSuspension(req, res, next) {
  let { id } = req.body;
  suspensionService
    .removePostSuspension(id)
    .then(() => res.json({ message: "Suspendavimas panaikintas." }))
    .catch(next);
}

function removePost(req, res, next) {
  let postId = req.params.id;
  suspensionService
    .removePost(postId)
    .then(() => res.json({ message: "Suspenduotas skelbimas pasalintas." }))
    .catch(next);
}

function suspendUserSchema(req, res, next) {
  const schema = Joi.object({
    accountId: Joi.number().required(),
    adminName: Joi.string().required(),
  });
  validateRequest(req, next, schema);
}

function suspendUser(req, res, next) {
  let { accountId, adminName } = req.body;
  suspensionService
    .suspendUser(accountId, adminName)
    .then((dat) => res.json({ success: true, message: "Vartotojas suspenduotas." }))
    .catch(next);
}

function getSuspendedUsers(req, res, next) {
  suspensionService
    .getSuspendedUsers()
    .then((users) => res.json(users))
    .catch(next);
}

function removeUserSuspensionSchema(req, res, next) {
  const schema = Joi.object({
    suspensionId: Joi.number().required(),
    accountId: Joi.number().required(),
  });
  validateRequest(req, next, schema);
}

function removeUserSuspension(req, res, next) {
  let { suspensionId, accountId } = req.body;
  suspensionService
    .removeUserSuspension(suspensionId, accountId)
    .then(() => res.json({ message: "Vartotojo suspendavimas panaikintas." }))
    .catch(next);
}
