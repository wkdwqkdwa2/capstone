const express = require('express');
const router = express.Router();

const controller = require('./ctrl')

router.get('/login',controller.UserInspection);
router.post('/signup',controller.SignUp);

module.exports = router;