const express = require('express');
const router = express.Router();

const UserInspection=require('./ctrl')

router.get('/login',UserInspection);


module.exports = router;