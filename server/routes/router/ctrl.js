const connection=require('../../dbconfig/database')

const UserInspection = async (req, res) => {
    const email=req.query.email;
    const password=req.query.password;
    
    seq='SELECT men_id,mem_pwd from MEMBER WHERE men_id=?'

    connection.query(seq,email,function (error, results) {
      console.log(results[0].men_id)
  });
  

    //console.log();
    
  }
  module.exports=UserInspection