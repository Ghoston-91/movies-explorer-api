const mongoose = require('mongoose');
const { URL_REGEX, ERROR_MESSAGE_URL } = require('../utils/validator-const');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator(value) {
        return URL_REGEX.test(value);
      },
      message: ERROR_MESSAGE_URL,
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator(value) {
        return URL_REGEX.test(value);
      },
      message: ERROR_MESSAGE_URL,
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator(value) {
        return URL_REGEX.test(value);
      },
      message: ERROR_MESSAGE_URL,
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
}, {
  versionKey: false,
});

module.exports = mongoose.model('movie', movieSchema);
