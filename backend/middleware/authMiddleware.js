import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (req.headers && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split("Bearer ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.log(error, "JWT Token Error");
      res.status(401);
      throw new Error("User not Authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("No Token Found");
  }
});

export default protect;
