const express = require('express');
const router = express.Router();

const UserInspection=require('./ctrl')
const SignUp=require('./ctrl')
router.get('/login',UserInspection);
router.post('/signup',SignUp);


module.exports = router;