var path = require("path");

module.exports = function(app) {

	app.get("/login", function(req, res){
		res.sendFile(path.join(__dirname, "../otherPages/login.html"));
	});

	app.get("/contact", function(req, res){
		res.sendFile(path.join(__dirname, "../otherPages/contact.html"));
	});

	app.get("/scores", function(req, res){
		res.sendFile(path.join(__dirname, "../otherPages/scorePage.html"));
	});

	app.get("/game", function(req, res){
		res.sendFile(path.join(__dirname, "../otherPages/game.html"));
	});

	app.get("/arena", function(req, res){
		res.sendFile(path.join(__dirname, "../otherPages/ignore.html"));
	});

	app.get("/levels", function(req, res){
		res.sendFile(path.join(__dirname, "../otherPages/levels.html"));
	});


	app.get("/extra", function(req, res){
		res.sendFile(path.join(__dirname, "../otherPages/bonus.html"));
	});

	app.get("/signUp", function(req, res){
		res.sendFile(path.join(__dirname, "../otherPages/signUp.html"));
	});

	app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });

};