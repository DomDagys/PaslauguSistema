const db = require("_helpers/db");
const tableNames = require("../_helpers/dbTables");
const { QueryTypes } = require("sequelize");
const { Op } = require("sequelize");

module.exports = {
  getPostsByCategory,
  getPostsBySearch,
  getPostById,
  getUserReports,
  getPostReports,
};

async function getPostById(req, res) {
  let id = req.params.id;
  if (id) {
    const post = await db.Post.findOne({
      where: { id: id },
      include: [
        {
          model: db.Account,
          as: "account",
          required: false,
        },
      ],
    });
    res.json({ success: true, data: post });
  } else {
    res.json({ error: "Nenurodyts ID" });
  }
}

async function getPostsByCategory(req, res) {
  let key = req.params.key;
  console.log("KEY", key);
  if (key) {
    const posts = await db.Post.findAll({
      where: { category: key },
      include: [
        {
          model: db.Account,
          as: "account",
          required: false,
        },
      ],
    });
    res.json({ success: true, data: posts });
  } else {
    res.json({ error: "Nenurodyta kategorija" });
  }
}

async function getPostsBySearch(req, res) {
  let key = req.params.key || "";
  let { accountId } = req.body;

  const posts = key
    ? await db.Post.findAll({
        where: {
          [Op.or]: [
            { title: { [Op.substring]: key } },
            { category: { [Op.substring]: key } },
            { description: { [Op.substring]: key } },
          ],
        },
        include: [
          {
            model: db.Account,
            as: "account",
            required: false,
          },
        ],
      })
    : await db.Post.findAll();
  res.json({ success: true, data: posts });
}

async function reportPost(body) {
  let { category, postId } = body;
  let curDate = Date.now();
  const postReport = await db.Report.findOne({ where: { postId: postId, category: category } });

  if (!postReport) {
    const report = new db.Report({
      category: category,
      count: 1,
      lastReported: curDate,
      cleared: 0,
      clearDate: null,
      clearedBy: null,
      accountId: null,
      postId: postId,
    });
    await report.save();
  } else {
    postReport.count += 1;
    postReport.cleared = 0;
    postReport.lastReported = curDate;
    await postReport.save();
  }
}

async function getUserReports() {
  const reports = await db.sequelize.query(
    "SELECT " +
      tableNames.Reports +
      ".accountId, " +
      tableNames.Reports +
      ".id, " +
      tableNames.Accounts +
      ".firstName, " +
      tableNames.Accounts +
      ".lastName, " +
      tableNames.Reports +
      ".category, " +
      tableNames.Reports +
      ".count, " +
      tableNames.Reports +
      ".lastReported FROM `" +
      tableNames.Accounts +
      "` INNER JOIN `" +
      tableNames.Reports +
      "` ON " +
      tableNames.Accounts +
      ".id = " +
      tableNames.Reports +
      ".accountId WHERE " +
      tableNames.Reports +
      ".cleared = 0",
    { type: QueryTypes.SELECT }
  );
  if (!reports) return null;
  return reports;
}

async function getPostReports() {
  const reports = await db.sequelize.query(
    "SELECT " +
      tableNames.Reports +
      ".postId, " +
      tableNames.Reports +
      ".id, title, " +
      tableNames.Accounts +
      ".firstName, " +
      tableNames.Accounts +
      ".lastName, " +
      tableNames.Reports +
      ".category, " +
      tableNames.Reports +
      ".count, " +
      tableNames.Reports +
      ".lastReported FROM `" +
      tableNames.Posts +
      "` INNER JOIN `" +
      tableNames.Reports +
      "` ON " +
      tableNames.Posts +
      ".id = " +
      tableNames.Reports +
      ".postId " +
      "INNER JOIN `" +
      tableNames.Accounts +
      "` ON " +
      tableNames.Posts +
      ".accountId = " +
      tableNames.Accounts +
      ".id " +
      "WHERE " +
      tableNames.Reports +
      ".cleared = 0",
    { type: QueryTypes.SELECT }
  );
  if (!reports) return null;
  return reports;
}
