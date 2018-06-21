var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
    },
    insertOne: function(tableInput, cols, vals, cb) {
      var queryString = "INSERT INTO" + tableInput + " (" + cols.toString() + ") VALUES (??)";
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    updateOne: function() {

    }
}

module.exports = orm;