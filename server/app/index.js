require('dotenv').config()


const express = require('express');
const app = express();

const cors = require('cors');
app.use(express.json())
app.use(express.urlencoded( {extended: true}))
app.use(cors())

PORT = 3001




app.listen(PORT , () => {
    console.log(`start server ${PORT}`)
});

app.post("/login",(req,res) => {
    console.log(req.body.id)
     //db에 있는 칼럼 조회 후 res로 사용 가능한 id/pw이 같은 행에 정상적으로 있으면 true 값을 전달    
    id = req.body.id
    password=req.body.password
    
    res.send('good')
    console.log('hi')
})


