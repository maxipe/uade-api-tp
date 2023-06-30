import "dotenv/config.js";
import { RequestHandler, response } from "express";
import jwt from "jsonwebtoken";

const validateJwt: RequestHandler = (req, res = response, next) => {
  try {
    if (req.headers.authorization?.startsWith("Bearer")) {
      const token = req.headers.authorization.split(" ")[1];

      const jwtValidate = jwt.verify(
        token,
        process.env.JWT_SECRET ?? ""
      );

      if (jwtValidate) {
        return next();
      }
    }
    return res.status(401).json({
      message: "Unauthorized",
    });
  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};

export default validateJwt;
