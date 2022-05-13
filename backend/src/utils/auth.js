const jwt = require("jsonwebtoken");

const API_SECRET = "ABC123456";

const JWT_CONFIG = {
  expiresIn: 3600,
  algorithm: "HS256",
};

const generateToken = (data) => jwt.sign({ data }, API_SECRET, JWT_CONFIG);

const verifyToken = (token) => {
  const decoded = jwt.verify(token, API_SECRET);
  const userInfo = decoded.data;

  return userInfo;
};

module.exports = {
  generateToken,
  verifyToken,
};