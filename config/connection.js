const mysql = require("mysql");
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgerDB"
  });

connection.connect(function(err){
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
});

module.exports = connection;
