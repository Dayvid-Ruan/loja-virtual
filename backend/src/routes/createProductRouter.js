const express = require("express");
const createProductController = require("../controllers/createProductController");
const authMiddlewares = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authMiddlewares.verifyAdmin, createProductController.createProduct);

module.exports = router;