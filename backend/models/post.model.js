const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    isActive: { type: DataTypes.BOOLEAN, allowNull: false },
    category: {
      type: DataTypes.ENUM([
        "Grafinis dizainas",
        "Rašymas ir vertimas",
        "Video ir animacija",
        "Muzika ir audio",
        "Programavimas",
        "Verslas",
        "Gyvenimo būdas",
        "Marketingas",
      ]),
      allowNull: false,
    },
    images: { type: DataTypes.TEXT, allowNull: false },
    views: { type: DataTypes.INTEGER, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    revisions: { type: DataTypes.INTEGER, allowNull: false },
    deliveryTime: { type: DataTypes.INTEGER, allowNull: false },
  };

  const options = {
    // disable default timestamp fields (createdAt and updatedAt)
    timestamps: false,
  };

  return sequelize.define("post", attributes, options);
}
