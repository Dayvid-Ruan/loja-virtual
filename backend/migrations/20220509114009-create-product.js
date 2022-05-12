"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: true,
        type: Sequelize.STRING(100)
      },
      price: {
        type: Sequelize.DECIMAL(4, 2)
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("products");
  }
};