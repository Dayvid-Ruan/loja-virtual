const { user } = require("../../models");
const { generateErrorObj } = require("../middlewares/error");
const { generateToken } = require("../utils/auth");

const userLogin = async (email, password) => {
  const userInfo = await user.findOne({ where: { email } });

  if (!userInfo) {
    const notFoundError = generateErrorObj("not_found", "Usuário ou senha inválido(a)");
    throw (notFoundError);
  }

  const passwordCheck = password === userInfo.password;

  if (!passwordCheck) {
    const notFoundError = generateErrorObj("not_found", "usuário ou senha inválido(a)");
    throw (notFoundError);
  }

  const { name, role } = userInfo;
  const token = generateToken(userInfo);

  return { name, role, token };
};

module.exports = {
  userLogin,
};