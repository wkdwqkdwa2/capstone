const conn = require('../../dbconfig/database')

const UserInspection = async (req, res) => {
  const id = req.query.email;
  const pwd = req.query.password;

  sql = 'SELECT men_id,mem_pwd from MEMBER WHERE men_id=? OR  mem_pwd=?'
  conn.query(sql, [id, pwd], function (error, results) {
    try {
      console.log(results)
      if (error===null && results[0]===undefined) {
        console.log("로그인 실패")
        const ck = 'fail'
        res.json(ck)
      }
      const user_info = results[0]
      const user_id = user_info.men_id
      const user_pwd = user_info.mem_pwd

      if (id === user_id && pwd === user_pwd) {
        console.log("로그인 성공")
        const ck = 'success'
        res.json(ck)
      } else if (id !== user_id && pwd === user_pwd) {
        console.log("아이디만 틀림")
        const ck = 'idfail'
        res.json(ck)
      } else if (id === user_id && pwd !== user_pwd) {
        console.log("비번만 틀림")
        const ck = 'pwdfail'
        res.json(ck)
      }
    } catch (e) {
      console.log("catch")
      return e
    }
  });

  
  
}
const SignUp = async (req, res) => {
  const id = req.body.email;
  const pwd = req.body.password;
  const name=req.body.name;

  sql = 'SELECT men_id,mem_pwd from MEMBER WHERE men_id=? OR  mem_pwd=?'
  conn.query(sql, [id, pwd], function (error, results) {
    res.json(name)

  })

  console.log(req.body)

}


module.exports = {
  UserInspection: UserInspection,
  SignUp: SignUp,
};
//module.exports = SignUp
//module.exports = UserInspection
