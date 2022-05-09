"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL(4, 2)
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("products");
  }
};