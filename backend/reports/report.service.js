const db = require('_helpers/db');
const tableNames = require('../_helpers/dbTables');
const { QueryTypes } = require('sequelize');
const { Op } = require("sequelize");

module.exports = {
    reportUser,
    reportPost,
    getUserReports,
    getPostReports,
    clearReport,
}

async function reportUser(body) {
    let { category, accountId } = body;
    let curDate = Date.now();
    const userReport = await db.Report.findOne({ where: { accountId: accountId, category: category } });

    if (!userReport){
        const report = new db.Report({
            category: category,
            count: 1,
            lastReported:curDate,
            cleared: 0,
            clearDate: null,
            clearedBy: null,
            accountId: accountId,
            postId: null
        });
        await report.save();
    }
    else {
        userReport.count += 1;
        userReport.cleared = 0;
        userReport.lastReported = curDate;
        await userReport.save();
    }
}

async function reportPost(body){
    let { category, postId } = body;
    let curDate = Date.now();
    const postReport = await db.Report.findOne({ where: { postId: postId, category: category } });
    
    if (!postReport){
        const report = new db.Report({
            category: category,
            count: 1,
            lastReported:curDate,
            cleared: 0,
            clearDate: null,
            clearedBy: null,
            accountId: null,
            postId: postId
        });
        await report.save();
    }
    else {
        postReport.count += 1;
        postReport.cleared = 0;
        postReport.lastReported = curDate;
        await postReport.save();
    }
}

async function getUserReports() {
        const reports = await db.sequelize.query("SELECT "+ tableNames.Reports +".accountId, "+ tableNames.Reports +".id, "+ tableNames.Accounts +".firstName, "+ 
        tableNames.Accounts +".lastName, "+ tableNames.Reports +".category, "+ tableNames.Reports +".count, "+ 
        tableNames.Reports +".lastReported FROM `"+ tableNames.Accounts +"` INNER JOIN `"+ tableNames.Reports +
        "` ON "+ tableNames.Accounts +".id = "+ tableNames.Reports +".accountId WHERE "+ tableNames.Reports +".cleared = 0", { type: QueryTypes.SELECT});
        if (!reports)
            return null;
        return reports;
}

async function getPostReports() {
    const reports = await db.sequelize.query("SELECT "+ tableNames.Reports +".postId, "+ tableNames.Reports +".id, title, "+ tableNames.Accounts +".firstName, "+ 
    tableNames.Accounts +".lastName, "+ tableNames.Reports +".category, "+ tableNames.Reports +".count, "+ 
    tableNames.Reports +".lastReported FROM `"+ tableNames.Posts +"` INNER JOIN `"+ tableNames.Reports +
        "` ON "+ tableNames.Posts +".id = "+ tableNames.Reports +".postId " +
        "INNER JOIN `"+ tableNames.Accounts +"` ON "+ tableNames.Posts +".accountId = "+ tableNames.Accounts +".id " +
        "WHERE "+ tableNames.Reports +".cleared = 0", { type: QueryTypes.SELECT});
        if (!reports)
            return null;
        return reports;
}

async function clearReport(id, adminName) {
    const report = await db.Report.findOne({ where: {id: id} });
    if (!report)
        return null;
    
    let curDate = Date.now();
    report.count = 0;
    report.cleared = 1;
    report.clearDate = curDate;
    report.clearedBy = adminName;
    await report.save();
}