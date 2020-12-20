const express = require('express');
const router = express.Router();
const Joi = require('joi');
const Role = require('_helpers/role');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')
const reportService = require('../services/report.service');


router.post('/user', authorize(), reportUserSchema, reportUser);
router.post('/post', authorize(), reportPostSchema, reportPost);
router.get('/user', authorize(Role.Admin), getUserReports);
router.get('/post', authorize(Role.Admin), getPostReports);
router.put('/clear', authorize(Role.Admin), clearReportSchema, clearReport);

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
        .then(() => res.status(200).json({ message: 'Vartotojas paskūstas.', success: true}))
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
        .then(() => res.status(200).json({ message: 'Skelbimas paskūstas.', success: true}))
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

function  clearReportSchema(req, res, next) {
    const schema = Joi.object({
        id: Joi.number().required(),
        adminName: Joi.string().required()
    });
    validateRequest(req, next, schema);
}

function clearReport(req, res, next){
    let { id, adminName } = req.body;
    reportService.clearReport(id, adminName)
        .then(() => res.json({ message: "Paskundimas išvalytas." }))
        .catch(next);
}