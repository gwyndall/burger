var mysql = require("mysql");
var connection = mysql.createConnection({
    // use mysql;
    // update user set authentication_string=password(''), plugin='mysql_native_password' where user='root';
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rootR00t",
  database: "burger_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
