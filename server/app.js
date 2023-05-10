require('dotenv').config()

const express = require('express');
const bodyParser=require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded( {extended: true}))
app.use(cors())

PORT = 3001

const router=require('./routes/router/router')

app.use('/',router);

app.listen(PORT , () => {
    console.log(`start server ${PORT}`)
});




