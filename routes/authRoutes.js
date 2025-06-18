const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
console.log("Register route file reached");
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;