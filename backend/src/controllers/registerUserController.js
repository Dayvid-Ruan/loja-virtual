const registerUSerService = require("../services/registerUserService");

const registerUSer = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const { token, role, saldo  } = await registerUSerService
      .registerUser(name, email, password);
    return res.status(200).json({ name, email, role, saldo, token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUSer,
};