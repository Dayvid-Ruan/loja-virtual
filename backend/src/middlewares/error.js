const generateErrorObj = (code, message) => ({ code, message });

const errorMiddleware = ({ code, message }, _req, res, next) => {
  try {
    switch (code) {
    case "bad_request":
      return res.status(400).json({ message });
    case "conflict":
      return res.status(409).json({ message });
    case "unauthorized":
      return res.status(401).json({ message });
    case "not_found":
      return res.status(404).json({ message });
    case "sucesso":
      return res.status(200).json({ message });
    default:
      return res.status(500).json({ message });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  generateErrorObj,
  errorMiddleware,
};