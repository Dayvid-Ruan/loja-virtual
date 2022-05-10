const express = require("express");
const getProducts = require("../controllers/getProductsController");


const router = express.Router();

router.get("/", getProducts.getAllProducts);

module.exports = router;