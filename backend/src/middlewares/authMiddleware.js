const { verifyToken } = require("../utils/auth");
const { generateErrorObj } = require("./error");

const verifyUser = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: "Token not found" });
    const { email, id } = verifyToken(authorization);
    req.email = email;
    req.userId = id;
    next();
  } catch (error) {
    next(generateErrorObj("unauthorized", "Expired or invalid token"));
  }
};
const verifyAdmin = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: "Token not found" });
    const { email, id, role } = verifyToken(authorization);
    if (role !== "administrator") { 
      return res.status(401).json({ message: "User is not an administrator!" });
    }
    req.email = email;
    req.userId = id;
    next();
  } catch (error) {
    next(generateErrorObj("unauthorized", "Expired or invalid token"));
  }
};

module.exports = {
  verifyUser,
  verifyAdmin,
};