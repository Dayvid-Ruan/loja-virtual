const { user } = require("../../models");
const { generateErrorObj } = require("../middlewares/error");
const { generateToken } = require("../utils/auth");

const registerUser = async (name, email, password) => {
  const [userInfo, create] = await user.findOrCreate({ 
    where: { email },
    defaults: {
      name,
      email,
      password,
      role: "usuario",
      saldo: 50.00,
    }
  });
  if(!create) {
    const notFoundError = generateErrorObj("conflict", "Usuário existente");
    throw notFoundError;
  }

  const { role, saldo  } = userInfo;
  const token = generateToken(userInfo);

  return { token, role, saldo };
};

module.exports = {
  registerUser,
};