const db = require('_helpers/db');
const tableNames = require('../_helpers/dbTables');
const { QueryTypes } = require('sequelize');
const { func } = require('joi');

module.exports = {
    reportUser,
    reportPost,
    getUserReports,
    getPostReports
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
        postReport.lastReported = curDate;
        await postReport.save();
    }
}

async function getUserReports() {
        const reports = await db.sequelize.query("SELECT * FROM `"+ tableNames.Accounts +"` INNER JOIN `"+ tableNames.Reports +
        "` ON "+ tableNames.Accounts +".id = "+ tableNames.Reports +".accountId WHERE "+ tableNames.Reports +".cleared = 0", { type: QueryTypes.SELECT});
        if (!reports)
            return null;
        return reports;
}

async function getPostReports() {
    const reports = await db.sequelize.query("SELECT title, "+ tableNames.Accounts +".firstName, "+ tableNames.Accounts +".lastName, "+ tableNames.Reports +".category, "+ tableNames.Reports +".count, "+ 
    tableNames.Reports +".lastReported FROM `"+ tableNames.Posts +"` INNER JOIN `"+ tableNames.Reports +
        "` ON "+ tableNames.Posts +".id = "+ tableNames.Reports +".postId " +
        "INNER JOIN `"+ tableNames.Accounts +"` ON "+ tableNames.Posts +".accountId = "+ tableNames.Accounts +".id " +
        "WHERE "+ tableNames.Reports +".cleared = 0", { type: QueryTypes.SELECT});
        if (!reports)
            return null;
        return reports;
}

async function findUserReport(id, category) {
    const userReport = await db.Report.findOne({ where: { accountId: id, category: category } });
    return userReport;
}

async function findPostReport(id, category){
    const postReport = await db.Report.findOne({ where: { postId: id, category: category } });
    return postReport;
}
