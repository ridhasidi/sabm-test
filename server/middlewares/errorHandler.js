function errorHandler(err, req, res, next) {
  let code = 500;
  let msg = "Internal server error";
  if (err.name === "SequelizeValidationError") {
    code = 400;
    msg = err.errors[0].message;
  }
  console.log(err, "error handler <<<<<<<<<<<<<<<<<");
  res.status(code).json({ message: msg });
}

module.exports = errorHandler;
