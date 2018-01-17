// player stats
// var health = 3;
require
import {level2}  from '/lvl1.js';
level = 1;
var player = {
    postionX: 0,
    postionY: 525
};
var cloud = {
    centerX: 40,
    centerY: 100,
    radius: 40,
    drawColor: "grey"
};
var moveShit = 0;


var playerMove = {
    horizon: 15,
    vertical: 175
};
var enimies = {
    postionX: 1120,
    postionY: 525
};

var enimiesMove = {
    postionX: 5,
    faster: 10,
    slower: .5
};

var token = {
    postionX: 50,
    postionY: 350,
    count: 0
}
//I have rows being made in varibles so I can change them dynmcialy with new levels  
var firstRowLeft = {
    leftX: 0,
    topY: 425,
    width: 405,
    height: 50,
    drawColor: "red",
};
var firstRowRight = {
    leftX: 550,
    topY: 425,
    width: 1200,
    height: 50,
    drawColor: "red"
};
var secondRowleft = {
    leftX: 90,
    topY: 250,
    width: 1200,
    height: 50,
    drawColor: "green"
};
var flag = {
    leftX: 1185,
    topY: 150,
    width: 10,
    height: 100,
    drawColor: "yellow"
};
var gap = {

    left: 404,
    right: 541,

}




var keysDown = {};
// Create a new image object
var image = new Image();
var imge = new Image();
var Ime = new Image();
var hearts = new Image();

// Set the image source and start loading
image.src = '../assets/pics/KirraClipart.png';
imge.src = '../assets/pics/Master_Shake.png';
Ime.src = '../assets/pics/coin.png';
hearts.src = '../assets/pics/heart8Bit.png';
// hearts.src'../assets/pics/heart8Bit.png';


window.onload = function() {
    // preloader();
    whatLvlIsThis();
    console.log("hello");
    canvas = document.getElementById('myCanvas');
    canvasContext = canvas.getContext('2d');
    //30 frame makes enemy move slower
    var framesPerSecond = 60;
    setInterval(function() {
        drawEverything();
        moveEverything();
    }, 1000 / framesPerSecond);
};

function moveEverything() {
    window.addEventListener('keydown', movePlayer, true);
    gravity();
    firstRowEnemy();

    // moveCloud();
    win();
    change();
}
//this function moves the player var
function movePlayer(evt) {
    switch (evt.keyCode) {
        case 38:
            /* Up arrow was pressed */
            console.log("up");

            player.postionY -= playerMove.vertical;

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
            console.log("right" + moveShit);
            player.postionX += playerMove.horizon;
            break;
        case 32:
            /* spacebar was pressed */
            console.log("space");  
            // drawImage(hearts, 100, 20, 25, 25);
            moveShit = 100;
            player.postionX += 10;
            player.postionY -= 10;
            break;
    }
    switch (player.postionX) {
        case 75:
            alert("hey");
            break;
    }
}
//all you need now is the function with the inputs 
function moveEnemy(rowL, rowR) {
    // console.log(firstRowRight.leftX);
    if (enimies.postionX + enimiesMove.postionX > rowR || enimies.postionX + enimiesMove.postionX < rowL) {
        enimiesMove.postionX = -enimiesMove.postionX;
    };
    enimies.postionX += enimiesMove.postionX;
}

function firstRowEnemy() {
    moveEnemy(firstRowRight.leftX, firstRowRight.width);
}

function secondRowEnemy() {
    moveEnemy(secondRowleft.leftX, secondRowleft.width);
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
    //the following is the drawing of everything on screen
    colorRect(0, 0, canvas.width, canvas.height, '#C9EEF3', "Main");

    colorRect(firstRowLeft.leftX, firstRowLeft.topY, firstRowLeft.width, firstRowLeft.height, firstRowLeft.drawColor, "I am half of firstRow");

    colorRect(firstRowRight.leftX, firstRowRight.topY, firstRowRight.width, firstRowRight.height, firstRowRight.drawColor, "I am the other half of first row");

    colorRect(secondRowleft.leftX, secondRowleft.topY, secondRowleft.width, secondRowleft.height, secondRowleft.drawColor, "I am half of second row");

    colorRect(flag.leftX, flag.topY, flag.width, flag.height,
        flag.drawColor, "I ama flag I represent where to win");

    //My goal will be to have the option of shwoing the follwing two if the images do not load \/\/

    // colorRect(player.postionX, player.postionY, 10, 75, "#CE839A", "player");
    // colorRect(enimies.postionX, enimies.postionY, 10, 75, "#green", "enemy");

    // colorCircle(cloud.centerX, cloud.centerY,cloud.radius,cloud.drawColor);
    // colorCircle(cloud.centerX + 40, cloud.centerY,cloud.radius,cloud.drawColor);
    // colorCircle(cloud.centerX + 80, cloud.centerY,cloud.radius,cloud.drawColor);
    // colorCircle(cloud.centerX + 80, cloud.centerY + 20,cloud.radius + 10,cloud.drawColor);
    // colorCircle(cloud.centerX + 50, cloud.centerY + 20,cloud.radius,cloud.drawColor);
    //These draw the images that are loaded on lines 13-19 there height an width will be static for now subject to change
    canvasContext.drawImage(image, player.postionX - 50, player.postionY, 100, 75);
    canvasContext.drawImage(imge, enimies.postionX - 50, enimies.postionY, 100, 75);

    canvasContext.drawImage(Ime, 50, 350, 50, 35);
    // for (var i = 0; i < hearts.length; i++) {
    //     hearts[i]
    // }
    canvasContext.drawImage(hearts, 40, 20, 25, 25);
    if (moveShit===100) {
        canvasContext.drawImage(hearts, enimies.postionX - 50, 20, 25, 25);
    }
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

    if (player.postionX > gap.left && player.postionX < gap.right) {
        if (player.postionY > 250 && player.postionY < 351) {

            setTimeout(gravity1stRow, 100);
        }
    };

    function gravity1stRow() {

        if (player.postionX > gap.left && player.postionX < gap.right) {
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

// function moveCloud(){
//     if (cloud.centerX + enimiesMove.postionX > canvas.width - 1 || cloud.centerX + enimiesMove.postionX < 1) {
//         enimiesMove.postionX = -enimiesMove.postionX;
//     }
//     cloud.centerX += enimiesMove.postionX;
// }
//I am here for testing purposes 
function PlayerPostion() {
    $("#statsHere").html(`Level ${level} Timer Here Tokens XX${player.postionX} YYYYY ${player.postionY}`);
    $("#statsHere").html(`Tokens: 23 &nbsp;&nbsp; Elapsed Time 1:10`);
}

function whatLvlIsThis() {
    $("#lvl").html(`Level ${level}`);   
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

// 
// This is sets up 2nd level I may put this in a seprate file 
function change() {
    if (level === 1 && player.postionX > 900 && player.postionY === 175) {
        setTimeout(level2, 1);
    };


}