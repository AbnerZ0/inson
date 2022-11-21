const { stack } = require("../routes/venta.router");

function logError(err, req, res, next) {
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  res.status(800).json({
    message: err.message,
    stack: err.stack
  });
}

function boomErrorHandler(err, req, res, next){
  if (err.isBoom) {
    const {output} = err;
    res.status(output.statusCode).json(
      output.payload);

  }
  next(err);
}
module.exports = {logError, errorHandler, boomErrorHandler};
