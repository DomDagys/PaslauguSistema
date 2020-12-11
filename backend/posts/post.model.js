const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        title: {type: DataTypes.STRING, allowNull: false},
        description: {type: DataTypes.TEXT, allowNull: false},
        isActive: {type: DataTypes.BOOLEAN, allowNull: false },
        category: {type: DataTypes.ENUM(['Graphic design', 'Writing and translation', 'Video and animation', 'Music and audio', 
        'IT and programming', 'Business', 'Lifestyle']), allowNull: false},
        views: {type: DataTypes.INTEGER, allowNull: false}
    };

    const options = {
        // disable default timestamp fields (createdAt and updatedAt)
        timestamps: false,      
    };

    return sequelize.define('post', attributes, options);
}