const { product } = require("../../models");

const getAllProducts = async () => {
  const listAll = await product.findAll();
  return listAll;
};

module.exports = {
  getAllProducts,
};