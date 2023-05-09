const mysql=require('../../dbconfig/database')

console.log("HI")
const UserInspection = async (req, res) => {
    const {email}=req.query;
    const {password}=req.query;

    console.log({email});
    
  }
  module.exports=UserInspection