// Import the MySQL connection object
var connection = require('./connection.js');

var orm = {

    all: function(tableInput, cb){
      connection.query('SELECT * FROM '+tableInput+';', function(err,
      result){
        if(err) throw err;
        cb(result)
      })
    }

    // insertOne:
    //
    //
    // updateOne:




}



module.exports = orm;
