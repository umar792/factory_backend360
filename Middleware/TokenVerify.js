const UserModel = require("../Models/UserModel");
const jwt = require("jsonwebtoken");

const TokenVerfy = async (req, res, next) => {
  try {
    const token = req.headers["token"];

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Please Login Your Token Is Expire",
      });
    }
    const decoded = await jwt.verify(token, process.env.SECRET_KEY);
    req.user = await UserModel.findById(decoded.id);
    // if(!req.user){
    //   return res.status(400).json({
    //     success
    //   })
    // }
    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = TokenVerfy;
