const SALT_ROUND = 10;
const SECRET_KEY = 'secret-key';

const MONGO_BASE = 'mongodb://127.0.0.1:27017/bitfilmsdb';

const CORS_OPTIONS = {
  origin: [
    'http://localhost:3001',
    'http://movies.ghoston91.nomoredomains.monster',
    'https://movies.ghoston91.nomoredomains.monster',
  ],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'origin', 'Authorization'],
  credentials: true,
};

module.exports = {
  SALT_ROUND,
  SECRET_KEY,
  MONGO_BASE,
  CORS_OPTIONS,
};
