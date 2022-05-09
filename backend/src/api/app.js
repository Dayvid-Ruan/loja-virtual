const express = require("express");
const { errorMiddleware } = require("../middlewares/error");
const loginRouter = require("../routes/loginRouter");

const app = express();

app.use(express.json());

app.use("/login", loginRouter);

app.use(errorMiddleware);

module.exports = app;