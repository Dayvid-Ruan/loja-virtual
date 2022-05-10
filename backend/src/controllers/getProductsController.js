const getProductsService = require("../services/getProductsService");

const getAllProducts = async (req, res, next) => {
  try {
    const listAll = await getProductsService.getAllProducts();
    return res.status(200).json(listAll);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
};