const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        category: { type: DataTypes.ENUM(['Apgaudinėjimas', 'Netinkamas turinys', 
        'Smurtas', 'Šlamštas', 'Neapykantos kurstymas']), allowNull: false },
        count: { type: DataTypes.INTEGER, allowNull: false},
        lastReported: { type: DataTypes.DATE, allowNull: false},
        cleared: { type: DataTypes.BOOLEAN, allowNull: false},
        clearDate: { type: DataTypes.DATE, allowNull: true },
        clearedBy: { type: DataTypes.STRING, allowNull: true}
    };

    const options = {
        // disable default timestamp fields (createdAt and updatedAt)
        timestamps: false,        
    };

    return sequelize.define('report', attributes, options);
}