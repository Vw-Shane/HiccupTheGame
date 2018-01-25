var db = require("../models/");
module.exports = {

create: function(req, res) {
	console.log(`Hey this worked ${JSON.stringify(req.body)}`);
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