const { user } = require("../../models");
const { generateErrorObj } = require("../middlewares/error");

const updateSaldo = async (saldo, id) => {
  const getId = await user.findOne({where: { id }});
  
  if (!getId) {
    const notFoundError = generateErrorObj("not_found", "Usuário não encontrado");
    throw notFoundError;
  }
  const [userInfo] = await user.update({saldo}, {where: { id }});

  if (userInfo === 0) {
    const notFoundError = generateErrorObj("conflict", "valor já correspondente");
    throw notFoundError;
  }

  return userInfo;
};

module.exports = {
  updateSaldo,
};