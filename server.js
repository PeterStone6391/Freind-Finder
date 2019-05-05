var express = require("express");
var mysql = require("mysql");
// var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./app/public")); // allows use of style.css

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT:" + PORT);
});