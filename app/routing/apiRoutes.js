//this is my orginal but i messed up the directions for jawsdb which crashed my heroku

// var mysql = require("mysql");
// var connection;
// // must edit this to work with MAMP
// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   var mysql = require("mysql");

//   var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "RootRoot",
//     database: "friendfinder_DB"
//   });

// }

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });
// module.exports = function(app) {
//   app.get("/api/all", function(req, res) {
//     var dbQuery = "SELECT * FROM profiles";

//     connection.query(dbQuery, function(err, result) {
//       if (err) throw err;
//       res.json(result);
//     });
//   });
//   app.post("/api/new", function(req, res) {
//     console.log(req.body);
//     var dbQuery = "INSERT INTO profiles (name, photo, scores) VALUES (?,?,?)";
//     connection.query(
//       dbQuery,
//       [req.body.name, req.body.photo, req.body.scores.join()],
//       function(err, result) {
//         if (err) throw err;
//         res.json(result);
//       }
//     );
//   });
// };
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  // Database is JawsDB on Heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "friend_finder"
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
  app.get("/api/friends", function(req, res) {
    connection.query("SELECT * FROM profiles", function(err, result) {
      res.json(result);
    });
  });
};
