import constants from "../utils/constants";

export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : err.statusCode ? err.statuCode : 500;
  const errorType = Object.keys(constants).find(
    (key) => constants[key] == statusCode
  );

  return res.status(statusCode).json({
    title: errorType,
    message: err.message,
    stackTrace: err.stack, 
  });
};

export const errorMandatory = (res) => {
  res.status(400);
  throw new Error("All fields are mandatory")
}
