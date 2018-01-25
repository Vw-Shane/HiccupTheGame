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
	app.get("/game2", function(req, res){
		res.sendFile(path.join(__dirname, "../otherPages/game2.html"));
	});
	app.get("/game3", function(req, res){
		res.sendFile(path.join(__dirname, "../otherPages/game3.html"));
	});
	app.get("/game4", function(req, res){
		res.sendFile(path.join(__dirname, "../otherPages/game4.html"));
	});

	app.get("/arena", function(req, res){
		res.sendFile(path.join(__dirname, "../otherPages/arena.html"));
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