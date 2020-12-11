const config = require('config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
    // create db if it doesn't already exist
    const { host, port, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // connect to db
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

    // init models and add them to the exported db object
    db.Account = require('../accounts/account.model')(sequelize);
    db.RefreshToken = require('../accounts/refresh-token.model')(sequelize);
    db.Post = require('../posts/post.model')(sequelize);
    db.Report = require('../reports/report.model')(sequelize);
    db.Suspension = require('../suspensions/suspension.model')(sequelize);

    // define relationships
    db.Account.hasMany(db.RefreshToken, { onDelete: 'CASCADE' });
    db.Account.belongsToMany(db.Post, { through: 'user_Posts', timestamps: false });
    db.Account.belongsToMany(db.Report, { through: 'user_Reports', timestamps: false });
    db.Account.belongsToMany(db.Suspension, { through: 'user_Suspensions', timestamps: false });
    db.RefreshToken.belongsTo(db.Account);
    db.Post.belongsToMany(db.Report, { through: 'post_Reports', timestamps: false });
    db.Post.belongsToMany(db.Suspension, { through: 'post_Suspensions', timestamps: false });
    db.Post.belongsTo(db.Account, { through: 'user_Posts', timestamps: false });
    db.Report.belongsTo(db.Account, { through: 'user_Reports', timestamps: false });
    db.Report.belongsTo(db.Post, { through: 'post_Reports', timestamps: false });
    db.Suspension.belongsTo(db.Account, { through: 'user_Suspensions', timestamps: false });
    db.Suspension.belongsTo(db.Post, { through: 'post_Suspensions', timestamps: false });
    
    // sync all models with database
    await sequelize.sync();
}