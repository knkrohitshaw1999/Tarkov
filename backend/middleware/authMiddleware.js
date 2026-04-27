const jwt = require("jsonwebtoken");
const User = require("../models/User");

//Middleware to protect Routes
const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decode.user.id).select("-password");
      next();
    } catch (error) {
      console.log("Token Verification Failed", error);
      res.status(401).json({ message: "Not Authorized, token failed" });
    }
  } else {
    res.status(401).json({ message: "Not Authorized, No token Provided" });
  }
};

//Checking if the user is an admin
const admin = (req, res, next) => {
  if(req.user && req.user.role === "admin"){
    next()
  } else{
    res.status(403).json({message: "Not Authorized As An Admin!"})
  }
};
module.exports = { protect, admin };
