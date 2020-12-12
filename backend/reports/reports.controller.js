const express = require('express');
const router = express.Router();
const Joi = require('joi');
const Role = require('_helpers/role');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')
const reportService = require('./report.service');
const { route, report } = require('../accounts/accounts.controller');

router.post('/user'/*, authorize(Role.Admin)*/, reportUserSchema, reportUser);
router.post('/post'/*, authorize(Role.Admin)*/, reportPostSchema, reportPost);
router.get('/user'/*, authorize(Role.Admin)*/, getUserReports);
router.get('/post'/*, authorize(Role.Admin)*/, getPostReports);

module.exports = router;

function reportUserSchema(req, res, next) {
    const schema = Joi.object({
        category: Joi.string().required(),
        accountId: Joi.number().required()
    });
    validateRequest(req, next, schema);
}

function reportUser(req, res, next) {
    reportService.reportUser(req.body)
        .then(() => res.json({ message: 'Vartotojas paskūstas.'}))
        .catch(next);
}

function  reportPostSchema(req, res, next) {
    const schema = Joi.object({
        category: Joi.string().required(),
        postId: Joi.number().required()
    });
    validateRequest(req, next, schema);
}

function reportPost(req, res, next) {
    reportService.reportPost(req.body)
        .then(() => res.json({ message: 'Skelbimas paskūstas.'}))
        .catch(next);
}

function getUserReports(req, res, next) {
    reportService.getUserReports().then(reports => res.json(reports))
        .catch(next);
}

function getPostReports(req, res, next) {
    reportService.getPostReports().then(reports => res.json(reports))
        .catch(next);
}