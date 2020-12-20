const db = require("_helpers/db");
const tableNames = require("../_helpers/dbTables");
const { QueryTypes } = require("sequelize");
const { Op } = require("sequelize");
const { post } = require("./posts.controller");

module.exports = {
  getPostsByCategory,
  getPostsBySearch,
  getPostById,
  getUserPosts,
  rememberPost,
  getRememberedPosts,
};

async function rememberPost(req, res) {
  const { postId, accountId } = req.body;
  console.log("post id account id:", postId, accountId);
  if (postId && accountId) {
    const rpost = new db.RememberedPost({ postId, accountId, data: Date.now() });
    await rpost.save();
    res.json({ success: true });
  } else {
    res.json({ error: "Trūksta duomenų" });
  }
}

async function getRememberedPosts(req, res) {
  const accountId = req.params.accountId;
  if (accountId) {
    const posts = await db.RememberedPost.findAll({
      where: { accountId: accountId },
      include: [
        {
          model: db.Post,
          as: "post",
          required: true,
          include: [
            {
              model: db.Account,
              as: "account",
              required: false
            }
          ]
        }
      ],
    });
    res.json({ success: true, data: posts });
  } else {
    res.json({ error: "Nenurodytas user id." });
  }
}

async function getPostById(req, res) {
  let id = req.params.id;
  if (id) {
    const suspended = await db.Suspension.count({ where: { postId: id } });
    if (suspended > 0) res.json({ error: "Skelbimas suspenduotas." });
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
    res.json({ error: "Nenurodytas id." });
  }
}

async function getPostsByCategory(req, res) {
  let key = req.params.key;
  console.log("KEY", key);
  if (key) {
    const posts = await db.Post.findAll({
      include: [
        {
          model: db.Account,
          as: "account",
          required: false,
        },
        {
          model: db.Suspension,
          required: false,
          attributes: [],
        },
      ],
      where: {
        [Op.and]: [
          db.sequelize.where(db.sequelize.col("suspensions.postId"), "IS", null),
          { category: key },
        ],
      },
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
          [Op.and]: [
            db.sequelize.where(db.sequelize.col("suspensions.postId"), "IS", null),
            {
              [Op.or]: [
                { title: { [Op.substring]: key } },
                { category: { [Op.substring]: key } },
                { description: { [Op.substring]: key } },
              ],
            },
          ],
        },
        include: [
          {
            model: db.Account,
            as: "account",
            required: false,
          },
          {
            model: db.Suspension,
            required: false,
            attributes: [],
          },
        ],
      })
    : await db.Post.findAll();
  res.json({ success: true, data: posts });
}

async function getUserPosts(username) {
  let values = username.split(" ");
  if (values.length == 2) {
    const count = await db.Account.count({
      where: { firstName: { [Op.substring]: values[0] }, lastName: { [Op.substring]: values[1] } },
    });
    if (count == 0) return null;
    const user = await db.Account.findOne({
      where: { firstName: { [Op.substring]: values[0] }, lastName: { [Op.substring]: values[1] } },
    });
    const posts = await db.Post.findAll({ where: { accountId: user.id } });
    return { posts: posts, username: user.firstName + " " + user.lastName };
  } else {
    const count = await db.Account.count({
      where: {
        [Op.or]: [
          { firstName: { [Op.substring]: username } },
          { lastName: { [Op.substring]: username } },
        ],
      },
    });
    if (count == 0) return null;
    const user = await db.Account.findOne({
      where: {
        [Op.or]: [
          { firstName: { [Op.substring]: username } },
          { lastName: { [Op.substring]: username } },
        ],
      },
    });
    const posts = await db.Post.findAll({ where: { accountId: user.id } });
    return { posts: posts, username: user.firstName + " " + user.lastName };
  }
}
