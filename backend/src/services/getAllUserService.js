const { user } = require("../../models");

const getAllUser = async () => {
  const getUser = await user.findAll();
  return getUser;
};

module.exports = {
  getAllUser,
};