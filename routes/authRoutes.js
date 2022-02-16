const express = require('express');
const router = express.Router()

const { register, login, logout } = require('../controllers/authController');

// router.route('/login').post(login);
// router.route('/register').post(register)
// router.route('/logout').post(logout)

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router