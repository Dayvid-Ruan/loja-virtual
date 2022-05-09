const express = require("express");
const loginControllers = require("../controllers/loginController");

const router = express.Router();

router.post("/", loginControllers.userLogin);

module.exports = router;