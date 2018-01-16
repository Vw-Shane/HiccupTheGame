// project
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var one = 1;
var PlayerSchema = new Schema({
    username: { type: String, required: true },
    level:  { type: String, one },
    tokens: { type: String, one },
    //the following only change if power ups have been purchased
    jumpHeight: { type: String, one },
    playerSize: { type: String, one },
    speed: { type: String, one },
    tokenDoubler: { type: String, one }

});

var Player = mongoose.model("Player", PlayerSchema);
module.exports = Player;