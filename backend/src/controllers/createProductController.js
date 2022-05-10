const createProductService = require("../services/createProductService");

const createProduct = async (req, res, next) => {
  try {
    const { name, price } = req.body;
    const create = await createProductService.createProduct(name, price);
    return res.status(200).json(create);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createProduct,
};