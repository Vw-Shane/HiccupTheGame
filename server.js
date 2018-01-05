var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var port = 3000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

require("./routes/htmlRoutes")(app);




app.listen(port, function() {
    console.log("server listening on Port " + port);
});