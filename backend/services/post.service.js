const db = require("_helpers/db");
const { Op } = require("sequelize");
const tableNames = require('../_helpers/dbTables');
const { QueryTypes } = require('sequelize');
const { func } = require("joi");

module.exports = {
  getPostsByCategory,
  getPostsBySearch,
  getPostById,
  getUserPosts,
  rememberPost,
  getRememberedPosts,
  addPost,
  getPostsByAccountId,
  removePost,
  updatePost,
  archivePost,
  getArchivedPosts,
  unarchivePost
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
      where: { id: id, isActive: 1 },
      include: [
        {
          model: db.Account,
          as: "account",
          required: false,
        },
      ],
    });
    if (!post)
      res.json({ error: "Skelbimas nerastas", success: false });
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
          { category: key, isActive: 1 },
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
                { title: { [Op.substring]: key }, isActive: 1 },
                { category: { [Op.substring]: key }, isActive: 1 },
                { description: { [Op.substring]: key }, isActive: 1 },
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

async function addPost(body) {
  let { title, description, category, price, 
    deliveryTime, images, accountId } = body;
  let count = await db.Post.count({where: {title: title}});
  if (count > 0)
    throw "Jau yra skelbimas su tokia antrašte.";
  
  const post = new db.Post({
    title: title,
    description: description,
    isActive: 1,
    category: category,
    views: 0,
    price: price,
    deliveryTime: deliveryTime,
    images: images,
    revisions: 0,
    accountId: accountId
  });

  await post.save();
}

async function getPostsByAccountId(accountId) {
  const posts = await db.Post.findAll({ where: {accountId: accountId} });
  return posts;
}

async function removePost(accountId, postId) {
  let count = await db.Post.count({ where: {accountId: accountId, id: postId}});
  if (count === 0)
    throw "Skelbimas nerastas arba skelbimas yra kito vartotojo.";
  await db.sequelize.query("DELETE FROM "+ tableNames.Reports +" WHERE postId = '"+ postId +"'", {type: QueryTypes.DELETE});
  await db.sequelize.query("DELETE FROM "+ tableNames.Suspensions +" WHERE postId = '"+ postId +"'", {type: QueryTypes.DELETE});
  const post = await db.Post.findOne({ where: { id: postId } });
  await post.destroy();
}

async function updatePost(postId, accountId, body) {
  const post = await db.Post.findOne({ where: { id: postId, accountId: accountId } });
  Object.assign(post, body);
  await post.save();
}

async function archivePost(postId) {
  const post = await db.Post.findOne({ where: { id: postId } });
  if (!post)
    throw "Skelbimas nerastas";
  post.isActive = 0;
  await post.save();
}

async function getArchivedPosts(accountId) {
  const posts = await db.Post.findAll({ where: { accountId: accountId, isActive: 0 }});
  return posts;
}

async function unarchivePost(postId) {
  const post = await db.Post.findOne({ where: { id: postId } });
  if (!post)
    throw "Skelbimas nerastas";
  post.isActive = 1;
  await post.save();
}