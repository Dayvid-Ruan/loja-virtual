const getAllUserService = require("../services/getAllUserService");

const getAllUser = async (req, res, next) => {
  try {
    const getUser = await getAllUserService.getAllUser();
    return res.status(200).json(getUser);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUser,
};