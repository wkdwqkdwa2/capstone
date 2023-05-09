var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '114.70.85.165',
  port     : '3306',
  user     : 'qhtjd',
  password : '1234',
  database : 'RIScapdb'
  
});

connection.connect();
 
connection.query('SELECT * from MEMBER', function (error, results, fields) {
    console.log(results)
});
 
connection.end();