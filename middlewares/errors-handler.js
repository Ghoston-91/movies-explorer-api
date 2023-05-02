const { SERVER_ERROR_STATUS, SERVER_ERROR_MESSAGE } = require('../utils/res-status');

module.exports.handleErrors = (err, req, res, next) => {
  const { statusCode = SERVER_ERROR_STATUS, message } = err;

  res.status(statusCode).send({
    message: statusCode === SERVER_ERROR_STATUS
      ? SERVER_ERROR_MESSAGE
      : message,
  });

  next();
};
