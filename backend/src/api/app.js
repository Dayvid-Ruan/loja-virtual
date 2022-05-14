const express = require("express");
const cors = require("cors");
const { errorMiddleware } = require("../middlewares/error");
const loginRouter = require("../routes/loginRouter");
const getProductsRouter = require("../routes/getProductsRouter");
const createProductRouter = require("../routes/createProductRouter");
const updateSaldoRouter = require("../routes/updateSaldo");
const getAllUserRouter = require("../routes/getAllUserRouter");
const registerUSerRouter = require("../routes/registerUserRouter");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/login", loginRouter);
app.use("/products", getProductsRouter);
app.use("/product/create", createProductRouter);
app.use("/user", updateSaldoRouter);
app.use("/user", getAllUserRouter);
app.use("/registerUser", registerUSerRouter);

app.use(errorMiddleware);

module.exports = app;