//this if statement goes in the file you want this js file to load from be mindful it doubeled your click evetns 

if (player.postionX > 900 && player.postionY === 175) {
    var d = document,
        h = d.getElementsByTagName('head')[0],
        s = d.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = '../assets/javaScript/level2.js';
    h.appendChild(s);
};


player stats
var player = {
    postionX: 0,
    postionY: 525
}

var playerMove = {
    horizon: 15,
    vertical: 175
}
var enimies = {
    postionX: 1120,
    postionY: 525
}

var enimiesMove = {
    postionX: 5,
}

var keysDown = {};
// Create a new image object
var image = new Image();
var imge = new Image();

// Set the image source and start loading
image.src = '../assets/pics/Master_Shake.png';
imge.src = '../assets/pics/Master_Shake.png'


window.onload = function() {
    // preloader();
    canvas = document.getElementById('myCanvas');
    canvasContext = canvas.getContext('2d');
    //30 frame makes enemy move slower
    var framesPerSecond = 60;
    setInterval(function() {
        drawEverything();
        moveEverything();



    }, 1000 / framesPerSecond);
    $("#statsHere").append(`${enimies.postionX} is your left or right postion
        ${player.postionY} is your up down postion`);

};

function moveEverything() {

    window.addEventListener('keydown', movePlayer, true);
    gravity();
    moveEnemy();
    win();
    
}
//this function moves the player var
function movePlayer(evt) {
    switch (evt.keyCode) {
        case 38:
            /* Up arrow was pressed */
            console.log("up");

            player.postionY -= 175;
            PlayerPostion();
            break;
        case 40:
            /* Down arrow was pressed */
            console.log("dwn");
            PlayerPostion();
            break;
        case 37:
            /* Left arrow was pressed */
            console.log("left");
            player.postionX -= playerMove.horizon;
            break;
        case 39:
            /* Right arrow was pressed */
            console.log("right");
            player.postionX += playerMove.horizon;
            break;
        case 32:
            /* spacebar was pressed */
            console.log("space");
            player.postionX += 10;
            player.postionY -= 10;
            break;
    }
}
//this one moves the enemy
function moveEnemy() {
    if (enimies.postionX + enimiesMove.postionX > canvas.width - 1 || enimies.postionX + enimiesMove.postionX < 1) {
        enimiesMove.postionX = -enimiesMove.postionX;
    };
    enimies.postionX += enimiesMove.postionX;
}



// this function gives the layout of the rectangels
function colorRect(leftX, topY, width, height, drawColor, tag) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height);
}

// this function gives the layout for circle shape
function colorCircle(centerX, centerY, radius, drawColor, tag) {
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
}

//Do Not Delete Yet // this function gives the layout for images 
// function colorImage(image, dx, dy, dWidth, dHeight) {
//   canvasContext.drawImage("../Frylock.png", player.postionX, player.postionY);
// }



//drawing code
function drawEverything() {
    //I have rows being made in varibles so I can change them dynmcialy with new levels  
    var firstRowLeft = {
        leftX: 0,
        topY: 425,
        width: 405,
        height: 50,
        drawColor: "red",
    };
    var firstRowRight = {
        leftX: canvas.width - 650,
        topY: 425,
        width: canvas.width,
        height: canvas.height / 12,
        drawColor: "red"
    };
    //the following is the drawing of everything on screen
    colorRect(0, 0, canvas.width, canvas.height, '#C9EEF3', "Main");

    colorRect(firstRowLeft.leftX, firstRowLeft.topY, firstRowLeft.width, firstRowLeft.height, firstRowLeft.drawColor, "I am half of firstRow");

    colorRect(firstRowRight.leftX, firstRowRight.topY, firstRowRight.width, firstRowRight.height, firstRowRight.drawColor, "I am the other half of first row");

    colorRect(90, 250, canvas.width, canvas.height / 12, "green", "I am the secondRow");
    colorRect(canvas.width - 15, 150, 10, 100, "yellow", "I ama flag I represent where to win");

    //My goal will be to have the option of shwoing the follwing two if the images do not load //
    // colorRect(player.postionX, player.postionY, 10, 75, "#CE839A", "player");
    // colorRect(enimies.postionX, enimies.postionY, 10, 75, "#green", "enemy");

    //These draw the images that are loaded on lines 13-19 
    canvasContext.drawImage(image, player.postionX - 50, player.postionY, 100, 75);
    canvasContext.drawImage(imge, enimies.postionX - 50, enimies.postionY, 100, 75);
}


function gravity() {

    if (player.postionX < 90 && player.postionY < 176) {
        setTimeout(gravity2ndRow, 100);
    }

    function gravity2ndRow() {
        if (player.postionX < 90 && player.postionY < 176) {
            player.postionY = 350;
            console.log("Char Should fall dwm");
            console.log("up,dwn" + player.postionY, "left righht" + player.postionX);
        } else { clearTimeout(); }
    };

    if (player.postionX > 404 && player.postionX < 541) {
        if (player.postionY > 250 && player.postionY < 351) {

            setTimeout(gravity1stRow, 100);
        }
    };

    function gravity1stRow() {

        if (player.postionX > 404 && player.postionX < 541) {
            player.postionY = 525;
            console.log("Char Should fall dwm");
            console.log("up,dwn" + player.postionY, "left righht" + player.postionX);
        } else { clearTimeout(); }
    };
    if (player.postionY < 174) {
        setTimeout(roof, 10);
    };

    function roof() {
        // console.log("stop");
        player.postionY = 175;
    }
}


//I am here for testing purposes 
function PlayerPostion() {
    $("#statsHere").html(`X ${player.postionX} is your left or right postion
       Y ${player.postionY} is your up down postion
       and Xenime ${enimies.postionX}`);
}

// function preloader()
// {

//     // counter
//     var i = 0;

//     // create object
//     // imageObj = [
//     // ];

//     // set image list
//     imageObj = new Array();
//     imageObj[0] = "Frylock.png",
//     imageObj[1] = "Master_Shake.png"
//     // images[2] = "image3.jpg"
//     // images[3] = "image4.jpg"

//     // start preloading
//     for (i = 0; i <imageObj.length; i++) {
//         imageObj.src = imageObj[i];
//     }

// console.log(imageObj[0].src);
// }
//this function is what happens if player reaches flag on first level
function win() {
    if (player.postionX === 1185 && player.postionY === 175) {
        console.log("Fuck you ( ͡~ ͜ʖ ͡°)");
    };
}
// This will be called if enimy and player meet
function lose() {
    console.log("loser");
}


 function level3(){
console.log("whats in your wallet");
  }