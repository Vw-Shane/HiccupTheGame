var db = require("../models");
module.exports = {

create: function(req, res) {
    db.Player
      .create(req.body)
      .then(function(dbPlayer) {
        res.json(dbPlayer);
    });
  }
};


 // function(req, res) {
 //        var userName = req.body.username;
 //        console.log(userName);
 //    });