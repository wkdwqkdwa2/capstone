const conn = require('../../dbconfig/database')

const UserInspection = async (req, res) => {
  const id = req.query.email;
  const pwd = req.query.password;
  
  sql = 'SELECT men_id,mem_pwd from MEMBER WHERE men_id=?'

  conn.query(sql, id, function (error, results) {
    try {
      if (error === null && results[0] === undefined){
        console.log("id/pwd틀렸을 때 try문에서 확인")
        const ck='fail'
        res.json(ck)
        }
      
        const user_info = results[0]
      const user_id = user_info.men_id
      const user_pwd = user_info.mem_pwd

      console.log(error)
      console.log(user_id)

      if(pwd===user_pwd){
          console.log("로그인 성공")
          const ck='success'
          res.json(ck)
        }else if(pwd!==user_pwd){
        console.log("비밀번호만 다름")
        const ck='pwdfail'
        res.json(ck)
      }
    } catch (e) {
      
      return e
    }
  });

}
module.exports = UserInspection