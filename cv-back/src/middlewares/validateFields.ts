import { validationResult } from "express-validator";
import { RequestHandler } from "express";

const checkFields: RequestHandler = (req, res, next) => {
  const errorsOcurred = validationResult(req);
  if (!errorsOcurred.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errorsOcurred.array(),
    });
  } else {
    next();
  }
};

export default checkFields;
