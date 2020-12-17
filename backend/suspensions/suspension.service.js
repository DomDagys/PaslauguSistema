const db = require('_helpers/db');
const tableNames = require('../_helpers/dbTables');
const { QueryTypes } = require('sequelize');
const { Op } = require("sequelize");
const reportEnum = require('../_helpers/reportEnums');
const dateConverter = require('../_helpers/dateConverter');

module.exports = {
    suspendPost,
    suspendUser,
    getSuspendedPosts,
    removePostSuspension,
    removePost,
    suspendUser,
    getSuspendedUsers,
    removeUserSuspension,
    isUserSuspended,
    isPostSuspended
}

async function suspendPost(postId, adminName, fromDate) {
    let curDate = Date.now();
    if (fromDate !== null){
        curDate = fromDate;
    }
    let clearDate = dateConverter.convertDate(new Date(curDate));
    let category = "";
    let count = 0;
    const reports = await db.Report.findAll({where:{postId:postId, cleared: 0}});
    const reportCount = await db.Report.count({where:{postId:postId, cleared: 0}});
    if (reportCount === 0)
        category = reportEnum.AdminSuspension;
    else {
        const results = reports.map(report => report.dataValues);
        results.forEach(report => {
        category+=report.category + ", ";
        count+=report.count;
    });
    }

    await db.sequelize.query("UPDATE "+ tableNames.Reports +" SET count = '0', cleared = '1', clearDate = '" +
    clearDate + "', clearedBy = '"+ adminName +"' WHERE postId = '"+ postId +"'", {type: QueryTypes.UPDATE});

    let suspended = await db.Suspension.count({where: {postId: postId}});
    if (suspended > 0)
        return null;

    const suspension = new db.Suspension({
        reason: category,
        suspendedBy: adminName,
        from: curDate,
        reportCount: count,
        accountId: null,
        postId: postId
    });
    await suspension.save();
}

async function getSuspendedPosts() {
    const suspensions = await db.sequelize.query("SELECT "+ tableNames.Suspensions +".id, "+ tableNames.Posts +".id AS 'postId', "+ tableNames.Posts +".title, "+ 
    tableNames.Accounts +".firstName, "+ tableNames.Accounts +".lastName, reason, reportCount, suspendedBy, "+ 
    tableNames.Suspensions +".from FROM `"+ tableNames.Suspensions +"` INNER JOIN "+ tableNames.Posts +" ON "+ tableNames.Posts +".id = postId " +
    "INNER JOIN "+ tableNames.Accounts +" ON "+ tableNames.Accounts +".id = "+ tableNames.Posts +".accountId ", { type: QueryTypes.SELECT});
    if (!suspensions)
        return null;
    return suspensions;
}

async function removePostSuspension(id) {
    const suspension = await db.Suspension.findOne({ where: {id: id}});
    await suspension.destroy();
}

async function removePost(postId) {
    await db.sequelize.query("DELETE FROM "+ tableNames.Reports +" WHERE postId = '"+ postId +"'", {type: QueryTypes.DELETE});
    await db.sequelize.query("DELETE FROM "+ tableNames.Suspensions +" WHERE postId = '"+ postId +"'", {type: QueryTypes.DELETE});
    const post = await db.Post.findOne({ where: { id: postId } });
    await post.destroy();
}

async function suspendUser(accountId, adminName) {
    const user = await db.Account.findOne({where: {id: accountId}});
    if (!user || user.role === "Admin")
        return null;

    let category = "";
    let count = 0;
    const reportCount = await db.Report.count({where: {accountId: accountId, cleared: 0}});
    if (reportCount === 0)
        category = reportEnum.AdminSuspension;
    const reports = await db.Report.findAll({where:{accountId:accountId, cleared: 0}});
    const results = reports.map(report => report.dataValues);
    results.forEach(report => {
        category+=report.category + ", ";
        count+=report.count;
    });

    let curDate = Date.now();
    let clearDate = dateConverter.convertDate(new Date(curDate));
    await db.sequelize.query("UPDATE "+ tableNames.Reports +" SET count = '0', cleared = '1', clearDate = '" +
    clearDate + "', clearedBy = '"+ adminName +"' WHERE accountId = '"+ accountId +"'", {type: QueryTypes.UPDATE});

    let suspended = await db.Suspension.count({where: {accountId: accountId}});
    if (suspended > 0)
        return null;

    const suspension = new db.Suspension({
        reason: category,
        suspendedBy: adminName,
        from: curDate,
        reportCount: count,
        accountId: accountId,
        postId: null
    });
    await suspension.save();

    const userPosts = await db.Post.findAll({where:{accountId:accountId}});
    const posts = userPosts.map(post => post.dataValues);
    posts.forEach(async function(post) { await suspendPost(post.id, adminName, curDate)});
}

async function getSuspendedUsers() {
    const suspensions = await db.sequelize.query("SELECT "+ tableNames.Suspensions +".id, reason, reportCount, suspendedBy, "+ 
    tableNames.Suspensions +".from, accountId, firstName, lastName FROM "+ tableNames.Suspensions +
    " INNER JOIN "+ tableNames.Accounts +" ON "+ tableNames.Accounts +".id = accountId", {type: QueryTypes.SELECT});
    if (!suspensions)
        return null;
    return suspensions;
}

async function removeUserSuspension(suspensionId, accountId){
    const suspension = await db.Suspension.findOne({ where: {id: suspensionId}});
    const results = await db.Post.findAll({where: {accountId: accountId}})
    const posts = results.map(post => post.dataValues.id);

    await db.Suspension.destroy({where: {postId:{[Op.or]: posts}, from: suspension.from}});
    await suspension.destroy();
}

async function isUserSuspended(accountId) {
    const count = await db.Suspension.count({where: {accountId: accountId}})
    if (count == 0)
        return false;
    else 
        return true;
}

async function isPostSuspended(postId) {
    const count = await db.Suspension.count({where: {postId: postId}})
    if (count === 0)
        return false;
    else 
        return true;
}