const mysql= require('mysql');

const connection = mysql.createConnection({
  host     : '114.70.85.165',
  port     : '3306',
  user     : 'qhtjd',
  password : '1234',
  database : 'RIScapdb'
   
});

connection.connect();

module.exports=connection;

//connection.end();