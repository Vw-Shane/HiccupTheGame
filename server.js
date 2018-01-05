var express = require("express");
var bodyParser = require("body-parser");

var app = express();

const PORT = process.env.PORT || 

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

require("./routes/htmlRoutes")(app);




app.listen(PORT, function() {
    console.log("server listening on Port " + PORT);
});