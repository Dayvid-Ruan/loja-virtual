const express = require("express");
const createProductController = require("../controllers/createProductController");

const router = express.Router();

router.post("/", createProductController.createProduct);

module.exports = router;