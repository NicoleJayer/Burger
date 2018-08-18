// Import the MySQL connection object
var connection = require ('./connection.js');

var orm = {

    select: function(col, table, cb)
    {

        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [col, table], function(err, result){
                if(err)throw err;

              console.log(result);

              cb(err, result);

        });

      }





}



module.exports = orm;
