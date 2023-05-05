const router = require('express').Router();

const { validateUserInfo } = require('../middlewares/validators/user-validator');

const {
  getUserInfo,
  updateUserInfo,
} = require('../controllers/users');

router.get('/users/me', getUserInfo);
router.patch('/users/me', validateUserInfo, updateUserInfo);

module.exports = router;
