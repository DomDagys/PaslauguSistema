const db = require('_helpers/db');
const tableNames = require('../_helpers/dbTables');
const { QueryTypes } = require('sequelize');
const { Op } = require("sequelize");
const reportEnum = require('../_helpers/reportEnums');

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

async function suspendPost(postId, adminName) {
    const searchResult = await db.Suspension.count({where: {postId: postId, isValid: 1}});
    if (searchResult !== 0)
        return;

    let curDate = Date.now();
    let category = "";
    let count = 0;
    const reports = await db.Report.findAll({where:{postId:postId, cleared: 0}});
    const reportCount = await db.Report.count({where:{postId:postId, cleared: 0}});
    if (reportCount === 0)
        category = "Suspenduota dėl vartotojo.";
    else {
        const results = reports.map(report => report.dataValues);
        results.forEach(report => {
        category+=report.category + ", ";
        count+=report.count;
    });
    }
    await db.sequelize.query("UPDATE "+ tableNames.Reports +" SET count = '0', cleared = '1', clearDate = '" +
    curDate + "', clearedBy = '"+ adminName +"' WHERE postId = '"+ postId +"'", {type: QueryTypes.UPDATE});

    const suspension = new db.Suspension({
        reason: category,
        suspendedBy: adminName,
        from: curDate,
        to: null,
        isValid: 1,
        reportCount: count,
        accountId: null,
        postId: postId
    });

    await suspension.save();
}

async function getSuspendedPosts() {
    const suspensions = await db.sequelize.query("SELECT "+ tableNames.Suspensions +".id, "+ tableNames.Posts +".title, "+ 
    tableNames.Accounts +".firstName, "+ tableNames.Accounts +".lastName, reason, reportCount, suspendedBy, "+ 
    tableNames.Suspensions +".from, "+ tableNames.Suspensions +
    ".to FROM `"+ tableNames.Suspensions +"` INNER JOIN "+ tableNames.Posts +" ON "+ tableNames.Posts +".id = postId " +
    "INNER JOIN "+ tableNames.Accounts +" ON "+ tableNames.Accounts +".id = "+ tableNames.Posts +".accountId " +
    "WHERE isValid = '1'", { type: QueryTypes.SELECT});
    if (!suspensions)
        return null;
    return suspensions;
}

async function removePostSuspension(id) {
    const suspension = await db.Suspension.findOne({ where: {id: id}});
    let curDate = Date.now();
    suspension.isValid = 0;
    suspension.to = curDate;
    await suspension.save();
}

async function removePost(postId) {
    await db.sequelize.query("DELETE FROM "+ tableNames.Reports +" WHERE postId = '"+ postId +"'", {type: QueryTypes.DELETE});
    await db.sequelize.query("DELETE FROM "+ tableNames.Suspensions +" WHERE postId = '"+ postId +"'", {type: QueryTypes.DELETE});
    const post = await db.Post.findOne({ where: { id: postId } });
    await post.destroy();
}

async function suspendUser(accountId, adminName) {
    const searchResult = await db.Suspension.count({where: {accountId: accountId, isValid: 1}});
    if (searchResult !== 0)
        return;

    let curDate = Date.now();
    let category = "";
    let count = 0;
    const reports = await db.Report.findAll({where:{accountId:accountId, cleared: 0}});
    const results = reports.map(report => report.dataValues);
    results.forEach(report => {
        category+=report.category + ", ";
        count+=report.count;
    });
    await db.sequelize.query("UPDATE "+ tableNames.Reports +" SET count = '0', cleared = '1', clearDate = '" +
    curDate + "', clearedBy = '"+ adminName +"' WHERE accountId = '"+ accountId +"'", {type: QueryTypes.UPDATE});

    const suspension = new db.Suspension({
        reason: category,
        suspendedBy: adminName,
        from: curDate,
        to: null,
        isValid: 1,
        reportCount: count,
        accountId: accountId,
        postId: null
    });

    await suspension.save();

    const userPosts = await db.Post.findAll({where:{accountId:accountId}});
    const posts = userPosts.map(post => post.dataValues);
    posts.forEach(async function(post) { await suspendPost(post.id, adminName)});
}

async function getSuspendedUsers() {
    const suspensions = await db.sequelize.query("SELECT "+ tableNames.Suspensions +".id, reason, reportCount, suspendedBy, "+ 
    tableNames.Suspensions +".from, accountId, firstName, lastName FROM "+ tableNames.Suspensions +
    " INNER JOIN "+ tableNames.Accounts +" ON "+ tableNames.Accounts +".id = accountId WHERE "+ tableNames.Suspensions +".isValid = '1'", {type: QueryTypes.SELECT});
    if (!suspensions)
        return null;
    return suspensions;
}

async function removeUserSuspension(suspensionId, accountId){
    const suspension = await db.Suspension.findOne({ where: {id: suspensionId, isValid: 1}});
    let curDate = Date.now();
    suspension.isValid = 0;
    suspension.to = curDate;
    await suspension.save();

    const results = await db.Post.findAll({where: {accountId: accountId}})
    const posts = results.map(post => post.dataValues.id);

    await db.Suspension.update({isValid: 0, to: curDate}, {where: {postId:{[Op.or]: posts}, isValid: 1, reason: reportEnum.UserSuspension}});
}

async function isUserSuspended(accountId) {
    const count = await db.Suspension.count({where: {accountId: accountId, isValid: 1}})
    if (count == 0)
        return false;
    else 
        return true;
}

async function isPostSuspended(postId) {
    const count = await db.Suspension.count({where: {postId: postId, isValid: 1}})
    if (count === 0)
        return false;
    else 
        return true;
}