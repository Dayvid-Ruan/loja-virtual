"use strict";

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert("products",
      [
        {
          name: "Product1",
          price: 7.50
        },
        {
          name: "Product2",
          price: 8.50
        },
        {
          name: "Product3",
          price: 9.50
        },
        {
          name: "Product4",
          price: 5.30
        },
        {
          name: "Product5",
          price: 3.49
        },
        {
          name: "Product6",
          price: 10.45
        }
      ]);
  },

  async down (queryInterface) {
    queryInterface.bulkDelete("products", null, {});
  }
};
