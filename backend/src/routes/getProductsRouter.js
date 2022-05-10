const express = require("express");
const getProducts = require("../controllers/getProductsController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware.verifyUser, getProducts.getAllProducts);

module.exports = router;