"use strict";

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert("users", [
      {
        name: "User Test",
        email: "user@test.com",
        password: "userTest123",
        saldo: 5.00,
        role: "usuario"
      },
      {
        name: "Admin Test",
        email: "admin@test.com",
        password: "adminTest123",
        role: "administrator"
      },
    ], { timestamps: false });
  },

  async down (queryInterface) {
    queryInterface.bulkDelete("users", null, {});
  }
};
