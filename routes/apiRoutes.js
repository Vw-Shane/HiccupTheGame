var path = require("path");
var playerController = require("../controller/player.js");

module.exports = function(app) {
app.post("/addname", playerController.create);
};

