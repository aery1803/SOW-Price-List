/**
 * Defines the PriceList model for the database.
 * This model represents the price_list table in the database, which stores
 * details about products or services and their pricing information.
 *
 * @param {Object} sequelize - The Sequelize instance used to define the model.
 * @returns {Object} The PriceList model.
 */
module.exports = (sequelize) => {
  const { DataTypes } = require("sequelize");

  // Define the PriceList model
  const PriceList = sequelize.define("PriceList", {
    /**
     * The Article No. field represents the unique identifier for the product or service.
     */
    articleNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    /**
     * The Product/Service field represents the name of the product or service.
     */
    productOrService: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    /**
     * The In Price field represents the cost price of the product or service.
     */
    inPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    /**
     * The Price field represents the selling price of the product or service.
     */
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    /**
     * The Unit field represents the unit of measurement for the product or service.
     */
    unit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    /**
     * The In Stock field represents the quantity of the product available in stock.
     */
    inStock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    /**
     * The Description field provides additional details about the product or service.
     */
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return PriceList;
};
