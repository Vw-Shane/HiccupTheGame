// player stats
// var health = 3;

level = 1;
var player = {
    postionX: 0,
    postionY: 525,
    height: 100,
    width: 75
};
var cloud = {
    centerX: 40,
    centerY: 100,
    radius: 40,
    drawColor: "grey"
};
var attack = 0;


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
var fireBallX = 0;



var keysDown = {};
// Create a new image object
var playerSim = new Image();
var enemy = new Image();
var coin = new Image();
var hearts = new Image();
var fireBall = new Image();

// Set the image source and start loading

playerSim.src = '../assets/pics/KirraClipart.png';
enemy.src = '../assets/pics/Master_Shake.png';
coin.src = '../assets/pics/coin.png';
hearts.src = '../assets/pics/heart8Bit.png';
fireBall.src = '../assets/pics/fireBall.png';
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
    firem();
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
            console.log("right");

            player.postionX += playerMove.horizon;
            break;
        case 32:
            fireBallX = player.postionX + 1;
            /* spacebar was pressed */
            console.log("space");
            player.height += 10;
            player.width += 10;
            attack = 100;

            console.log(fireBallX);
            // player.postionX += 10;
            // player.postionY -= 10;
            setTimeout(HH, 100);
            break;
    }
    switch (player.postionX) {
        case 75:
            alert("hey");
            break;
    }
}

function HH() {

    player.height -= 10;
    player.width -= 10;
}
//all you need now is the function with the inputs 
function moveEnemy(rowL, rowR) {
    // console.log(firstRowRight.leftX);
    if (enimies.postionX + enimiesMove.postionX > rowR || enimies.postionX + enimiesMove.postionX < rowL) {
        enimiesMove.postionX = -enimiesMove.postionX;
    };
    enimies.postionX += enimiesMove.postionX;

}




function firem() {

    if (fireBallX < 1200) {
        fireBallX += 5;
        console.log(fireBallX);
    } else {
        fireBallX = 2000;
        console.log("Doop")
    }
    if (fireBallX === enimies.postionX + 1 || fireBallX === enimies.postionX - 4) {
        fireBallX = 2000;
        console.log("Shits Gone");
        enimies.postionX = 2000;
        setTimeout(resetEnemy, 3000);
        //call reset enemy funk ,30000
        
    }
}
function resetEnemy(){
    enimies.postionX = 1100;
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
    canvasContext.drawImage(playerSim, player.postionX - 50, player.postionY, player.height, player.width);
    canvasContext.drawImage(enemy, enimies.postionX - 50, enimies.postionY, 100, 75);

    canvasContext.drawImage(coin, 50, 350, 50, 35);
    // for (var i = 0; i < hearts.length; i++) {
    //     hearts[i]
    // }
    canvasContext.drawImage(hearts, 40, 20, 25, 25);
    canvasContext.drawImage(hearts, 70, 20, 25, 25);
    if (attack === 100) {
        canvasContext.drawImage(fireBall, fireBallX, player.postionY, 25, 25);
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

function level2() {
    player.postionX = 1170;
    player.postionY = 525;
    level = 2;
    PlayerPostion(); //this function will be updated to show score and tokens and time
    whatLvlIsThis();
    firstRowLeft.width = 745;
    gap.left = 740;
    gap.right = 880;
    firstRowRight.leftX = 885;
    firstRowRight.width = 225;
    firstRowRight.drawColor = "black";
    secondRowleft.leftX = 80;
    secondRowleft.width = 900;
    flag.leftX = 105;
    flag.topY = 150;
}
// This is sets up 2nd level I may put this in a seprate file 
function change() {
    if (level === 1 && player.postionX > 900 && player.postionY === 175) {
        setTimeout(level2, 1);
    };


}