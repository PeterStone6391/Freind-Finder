var mysql = require("mysql");
var connection;
// must edit this to work with MAMP
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    Host: "k9xdebw4k3zynl4u.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    User: "p12pcuynysdm9xad",
    Password: "pex83wcxjjj1i663",
    Database: "rcmle05ac243vogh"
  });
}

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
  app.post("/api/new", function(req, res) {
    console.log(req.body);
    var dbQuery = "INSERT INTO profiles (name, photo, scores) VALUES (?,?,?)";
    connection.query(
      dbQuery,
      [req.body.name, req.body.photo, req.body.scores.join()],
      function(err, result) {
        if (err) throw err;
        res.json(result);
      }
    );
  });
};
