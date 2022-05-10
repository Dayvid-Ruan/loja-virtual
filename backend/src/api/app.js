const express = require("express");
const cors = require("cors");
const { errorMiddleware } = require("../middlewares/error");
const loginRouter = require("../routes/loginRouter");
const getProductsRouter = require("../routes/getProductsRouter");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/login", loginRouter);
app.use("/products", getProductsRouter);

app.use(errorMiddleware);

module.exports = app;