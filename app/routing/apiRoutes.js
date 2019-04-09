var mysql = require("mysql");

// must edit this to work with MAMP
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "friend_finder"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
module.exports = function(app) {
  app.get("/api/all", function(req, res) {
    var dbQuery = "SELECT * FROM profiles";

    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });
};
