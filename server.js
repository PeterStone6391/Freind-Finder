var express = require("express");

var app = express();

// copied from activities
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var mysql = require("mysql");

// must edit this to work with MAMP
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: ""
  //still need to figure out the database stuff with mysql with tutor appointment
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
