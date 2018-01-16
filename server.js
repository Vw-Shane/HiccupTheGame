var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var Player = require("./models");
var MongoClient = require('mongodb').MongoClient;
var app = express();
app.use(logger("dev"));

const PORT = process.env.PORT || 3000;
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS so that browsers don't block requests.
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
//subject to change
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/ShaneGame";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI,{
	useMongoClient: true
});




var db = mongoose.connection;

db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});

db.once("open", function() {
    console.log("Mongoose connection successful.");
});

app.listen(PORT, function() {
    console.log("server listening on Port " + PORT);
});