var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1875Njr1875",
  database : 'burgers_db'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
