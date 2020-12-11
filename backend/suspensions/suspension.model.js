const { DataTypes, INTEGER } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        reason: { type: DataTypes.STRING, allowNull: false },
        suspendedBy: { type: DataTypes.STRING, allowNull: false },
        from: { type: DataTypes.DATE, allowNull: false },
        to: { type: DataTypes.DATE, allowNull: true },
        isValid: { type: DataTypes.BOOLEAN, allowNull: false},
        reportCount : { type: DataTypes.INTEGER, allowNull: false }
    };

    const options = {
        // disable default timestamp fields (createdAt and updatedAt)
        timestamps: false,        
    };

    return sequelize.define('suspension', attributes, options);
}