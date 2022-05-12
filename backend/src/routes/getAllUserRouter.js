const express = require("express");
const getAllUserController = require("../controllers/getAllUserController");

const router = express.Router();

router.get("/", getAllUserController.getAllUser);

module.exports = router;