const connection=require('../../dbconfig/database')

console.log("HI")
const UserInspection = async (req, res) => {
    const email=req.query.email;
    const password=req.query.password;
    
    seq='SELECT men_id,mem_pwd from MEMBER'
    connection.query(seq,[email,password], function (error, results) {
      console.log(email)
      console.log(results)
  });
  

    //console.log();
    
  }
  module.exports=UserInspection