var express = require("express");
var bodyParser = require("body-parser");
// var logger = require("morgan");
var mongoose = require("mongoose");

// Require all models
var db = require("./models");

var PORT = process.env.PORT || 8000;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/html_routes")(app);

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/allTheNews");

app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});
