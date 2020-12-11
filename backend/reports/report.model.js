const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        category: { type: DataTypes.ENUM(['Scam', 'Inappropriate content', 'Violence', 'Spam', 'Promoting hate']), allowNull: false },
        count: { type: DataTypes.INTEGER, allowNull: false},
        lastReported: { type: DataTypes.DATE, allowNull: false},
        cleared: { type: DataTypes.BOOLEAN, allowNull: false},
        clearDate: { type: DataTypes.DATE, allowNull: false },
        clearedBy: { type: DataTypes.STRING, allowNull: false}
    };

    const options = {
        // disable default timestamp fields (createdAt and updatedAt)
        timestamps: false,        
    };

    return sequelize.define('report', attributes, options);
}