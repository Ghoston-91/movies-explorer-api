const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const BadRequestError = require('../middlewares/errors/bad-request-error');
const UnauthorizedError = require('../middlewares/errors/unauthorized-error');
const { ERROR_MESSAGE_EMAIL, ERROR_MESSAGE_EMAIL_OR_PASS } = require('../utils/validator-const');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: ERROR_MESSAGE_EMAIL,
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
}, {
  versionKey: false,
});

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new UnauthorizedError(ERROR_MESSAGE_EMAIL_OR_PASS));
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new BadRequestError(ERROR_MESSAGE_EMAIL_OR_PASS));
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
