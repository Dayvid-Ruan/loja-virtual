const loginService = require("../services/loginService");

const userLogin = async (req, res, next) => {
  try {
    const {email, password } = req.body;
    const { name, saldo, role, token } = await loginService.userLogin(email, password);
    return res.status(200).json({ name, email, saldo, role, token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  userLogin,
};