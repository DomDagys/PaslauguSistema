const config = require("config.json");
const mysql = require("mysql2/promise");
const { Sequelize } = require("sequelize");

module.exports = db = {};

initialize();

async function initialize() {
  // create db if it doesn't already exist
  const { host, port, user, password, database } = config.database;
  const connection = await mysql.createConnection({ host, port, user, password });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

  // connect to db
  const sequelize = new Sequelize(database, user, password, { dialect: "mysql" });

  //for raw queries
  db.sequelize = sequelize;

  // init models and add them to the exported db object
  db.Account = require("../accounts/account.model")(sequelize);
  db.RefreshToken = require("../accounts/refresh-token.model")(sequelize);
  db.Post = require("../posts/post.model")(sequelize);
  db.Report = require("../reports/report.model")(sequelize);
  db.Suspension = require("../suspensions/suspension.model")(sequelize);
  db.RememberedPost = require("../posts/remembered-post.model")(sequelize);

  // define relationships
  db.Account.hasMany(db.RefreshToken, { onDelete: "CASCADE" });
  db.Account.hasMany(db.Post);
  db.Account.hasMany(db.Report);
  db.Account.hasMany(db.Suspension);
  db.RefreshToken.belongsTo(db.Account);
  db.Post.hasMany(db.Report);
  db.Post.hasMany(db.Suspension);
  db.Post.belongsTo(db.Account);
  db.Report.belongsTo(db.Account);
  db.Report.belongsTo(db.Post);
  db.Suspension.belongsTo(db.Account);
  db.Suspension.belongsTo(db.Post);
  db.RememberedPost.belongsTo(db.Post);
  db.RememberedPost.belongsTo(db.Account);

  // sync all models with database
  await sequelize.sync();
}
