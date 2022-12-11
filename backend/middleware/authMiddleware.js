import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  console.log('Auth middle ware ethi kuttaa')
  let token;
  if (req.headers && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split("Bearer ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      console.log('usereee kittpoyee');
      // console.log(req.user,'jsdadasdalsas')
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
