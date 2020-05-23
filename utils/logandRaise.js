const winston = require("winston");
const LogAndRaise = (res, statusCode, errMsg) => {
  winston.error(`Status code:${statusCode} ErrMsg:${errMsg}`);
  res.status(statusCode).json({ message: errMsg });
};
module.exports = LogAndRaise;
