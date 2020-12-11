const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  try {
    const token = req.header.authorization.split(" ")[1];
    const decode = jwt.verify(token, "kjfngvldf");
    res.user = decode;
    next();
  } catch (error) {
    res.json({
      message: "Authenticate failed",
    });
  }
};

module.exports = authenticate;
