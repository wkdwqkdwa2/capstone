const mysql= require('mysql');

const conn = mysql.createConnection({
  host     : '114.70.85.165',
  port     : '3306',
  user     : 'qhtjd',
  password : '1234',
  database : 'RIScapdb'
   
});

conn.connect();

module.exports=conn;

//conn.end();