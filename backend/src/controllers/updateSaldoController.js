const updateSaldoService = require("../services/updateSaldoService");

const updateSaldo = async (req, res, next) => {
  try {
    const { saldo, id } = req.body;
    const update = await updateSaldoService.updateSaldo(saldo, id);
    console.log(update, "nads");
    return res.status(200).json(update);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  updateSaldo,
};