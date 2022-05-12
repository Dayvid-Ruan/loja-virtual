const express = require("express");
const updateSaldoController = require("../controllers/updateSaldoController");

const router = express.Router();

router.put("/", updateSaldoController.updateSaldo);

module.exports = router;