const { product } = require("../../models");
const { generateErrorObj} = require("../middlewares/error");

const createProduct = async (name, price) => {
  const [productInfo, create] = await product.findOrCreate({ where: { name },
    defaults: {
      name,
      price,
    }
  });

  if (!create) {
    const notFoundError = generateErrorObj("conflict", "produto já existente");
    throw notFoundError;
  }
  
  return productInfo;
};

module.exports = {
  createProduct,
};