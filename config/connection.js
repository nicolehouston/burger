require("dotenv").config(); 
var mysql = require("mysql"); 

var local = process.env.LOCALHOST

var connection = mysql.createConnection(process.env.JAWSDB_URL || local);
  
  // Make connection.
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;