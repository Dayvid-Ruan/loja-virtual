const express = require("express");
const createProductController = require("../controllers/createProductController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware.verifyAdmin, createProductController.createProduct);

module.exports = router;