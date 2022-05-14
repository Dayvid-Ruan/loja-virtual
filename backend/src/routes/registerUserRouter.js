const express = require("express");
const registerUserController = require("../controllers/registerUserController");


const router = express.Router();

router.post("/", registerUserController.registerUSer);

module.exports = router;