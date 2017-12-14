// player stats
var player = {
    postionX: 0,
    postionY: 525
}

var enimies = {
    postionX: 0,
    postionY: 525
}



var enimiesMove = {
    postionX: 2,
}

var keysDown = {};
// Create a new image object
var image = new Image();
var imge = new Image();

// Set the image source and start loading
image.src = '../assets/pics/KirraClipart.png';
imge.src = '../assets/pics/Master_Shake.png'


window.onload = function() {
    // preloader();
    console.log(keysDown);
    canvas = document.getElementById('myCanvas');
    canvasContext = canvas.getContext('2d');

    var framesPerSecond = 60;
    setInterval(function() {
        drawEverything();
        moveEverything();



    }, 1000 / framesPerSecond);
    $("#statsHere").append(`${enimies.postionX} is your left or right postion
        ${player.postionY} is your up down postion`);

};

function moveEverything() {

    window.addEventListener('keydown', doKeyDown, true);
    gravity();
    moveEnemy();
    win();
}
// up,dwn130 left righht80
function doKeyDown(evt) {
    switch (evt.keyCode) {
        case 38:
            /* Up arrow was pressed */
            console.log("up");

            player.postionY -= 175;

            break;
        case 40:
            /* Down arrow was pressed */
            console.log("dwn");
            PlayerPostion();
            break;
        case 37:
            /* Left arrow was pressed */
            console.log("left");
            player.postionX -= 15;
            break;
        case 39:
            /* Right arrow was pressed */
            console.log("right");
            player.postionX += 15;
            break;
        case 32:
            /* spacebar was pressed */
            console.log("space");
            player.postionX += 10;
            player.postionY -= 10;
            break;
    }
}

function moveEnemy() {

    console.log(canvas.width);
    console.log(enimies.postionX);

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

// // this function gives the layout for images
// function colorImage(image, dx, dy, dWidth, dHeight) {
//   canvasContext.drawImage("../Frylock.png", player.postionX, player.postionY);
// }



//drawing code
function drawEverything() {
    colorRect(0, 0, canvas.width, canvas.height, '#C9EEF3', "Main");
    colorRect(0, 425, 405, canvas.height / 12, "red", "firstRowLeft");
    colorRect(canvas.width - 650, 425, canvas.width, canvas.height / 12, "red", "firstRowRight");
    colorRect(90, 250, canvas.width, canvas.height / 12, "green", "secondRow");
    colorRect(canvas.width - 15, 150, 10, 100, "yellow", "flag");
    // colorRect(player.postionX, player.postionY, 10, 75, "#CE839A", "player");
    colorRect(enimies.postionX, enimies.postionY, 10, 75, "#green", "enemy");

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



function PlayerPostion() {
    $("#statsHere").html(`X ${player.postionX} is your left or right postion
       Y ${player.postionY} is your up down postion`);
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
function win() {
    if (player.postionX > 1184 && player.postionY === 175) {
        alert("Fuck you ( ͡~ ͜ʖ ͡°)");
    };
}