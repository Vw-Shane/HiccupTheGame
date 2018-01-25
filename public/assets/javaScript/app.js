// player stats
var health = 2;
canvasBackground = "#C9EEF3";

level = 1;
var player = {
    postionX: 0,
    postionY: 525,
    height: 100,
    width: 75,
    postionXF: 0,
    postionYF: -100,
    heightF: 100,
    widthF: 75
};
var cloud = {
    centerX: 40,
    centerY: 100,
    radius: 40,
    drawColor: "grey"
};
var playerMove = {
    horizon: 15,
    vertical: 175,
    horizonF: -15,
    verticalF: 90

};
var flagFF = {
    leftX : -1000, 
    topY :-1000};

var heartpostion = {
    X: 40,
    Y: 20,
    X2: 70,
    Y2: 20,
};
var attack = 0;



var enimies = {
    postionX: 1120,
    postionY: 525
};


var enemyFlip = {
    H: 0,
    W: 0,
    postionY: 475
};

var enimiesMove = {
    postionX: 5,
    faster: 10,
    slower: .5,
    respawn: 1000
};

var coinPosition = {
    X: 1020,
    Y: 525,
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
    drawColor: "green",
    leftX2: 0,
    topY2: 250,
    width2: 0,
    leftX3: 0,
    width3: 0
};
var thirdRow = {
    leftX: 0,
    topY: 0,
    width: 0,
    height: 0,
    drawColor: " ",

};

var flag = {
    leftX: 1185,
    topY: 150,
    leftXG: 1185,
    topYG: 150,
    width: 50,
    height: 100,
    drawColor: "yellow"
};
var gap = {
    left: 404,
    right: 541,
    left2: 0,
    right2: 0

}
var fireBall = {
    Y: 0,
    X: 0
}



var keysDown = {};
// Create a new image object
var playerSim = new Image();
var playerFlip = new Image();
var enemy = new Image();
var enemyFip = new Image();
var coin = new Image();
var hearts = new Image();
var fireBall = new Image();
var flagg = new Image();
var flagF = new Image();

// Set the image source and start loading
playerFlip.src = '../assets/pics/KirraClipartFlip.png'
playerSim.src = '../assets/pics/KirraClipart.png';
enemy.src = '../assets/pics/lobster.png';
enemyFip.src = '../assets/pics/lobsterFlip.png';
coin.src = '../assets/pics/coin.png';
hearts.src = '../assets/pics/heart8Bit.png';
fireBall.src = '../assets/pics/fireball.png';
flagg.src = '../assets/pics/flag.png';
flagF.src = '../assets/pics/flagflip.png';
// hearts.src'../assets/pics/heart8Bit.png';


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
};

function moveEverything() {
    window.addEventListener('keydown', movePlayer, true);
    gravity();
    secondRowEnemy();
    firem();
    lose();
    coinLogic(15, 1185, 15, 175, 525, 175);
    whatLvlIsThis();
    playerLoop();
    moveBrick();
    // moveCloud();
    //win(); this function will be updated to send stats to database
    change();
}
//this function moves the player var
function movePlayer(evt) {
    if (level != 4) {
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
                fireBall.Y = player.postionY;
                fireBall.X = player.postionX + 1;
                /* spacebar was pressed */
                // console.log("look here"+fireBall.Y);
                player.height += 10;
                player.width += 10;
                attack = 100;


                // player.postionX += 10;
                // player.postionY -= 10;
                setTimeout(HH, 100);
                break;
            
            case 87:
                /* Up arrow was pressed */
                console.log("up");

                player.postionY -= playerMove.vertical;

                break;
            case 65:
                /* Left arrow was pressed */
                console.log("left");
                player.postionX -= playerMove.horizon;
                break;
            case 68:
                /* Right arrow was pressed */
                console.log("right");

                player.postionX += playerMove.horizon;
                break;
        }
    }
    if (level === 4) {
        switch (evt.keyCode) {
            case 38:
                /* Up arrow was pressed */
                console.log("up");

                player.postionYF += playerMove.vertical;

                break;
            case 40:

                /* Down arrow was pressed */
                console.log("dwn");
                PlayerPostion();
                break;
            case 37:
                /* Left arrow was pressed */
                console.log("left");
                player.postionXF -= playerMove.horizon;
                break;
            case 39:
                /* Right arrow was pressed */
                console.log("right");

                player.postionXF += playerMove.horizon;
                break;
            case 32:
                fireBall.Y = player.postionYF;
                fireBall.X = player.postionXF + 1;
                /* spacebar was pressed */
                // console.log("look here"+fireBall.Y);
                player.heightF += 10;
                player.widthF += 10;
                attack = 100;


                // player.postionXF += 10;
                // player.postionYF -= 10;
                setTimeout(HH, 100);
                break;
            case 84:
                level4();

                break;
            case 87:
                /* Up arrow was pressed */
                console.log("up");

                player.postionYF += playerMove.verticalF;

                break;
            case 65:
                /* Left arrow was pressed */
                console.log("left");
                player.postionXF -= playerMove.horizon;
                break;
            case 68:
                /* Right arrow was pressed */
                console.log("right");

                player.postionXF += playerMove.horizon;
                break;
        }
    }
}

function HH() {
    // this makes the player "hiccup" out a fireball
    player.height -= 10;
    player.width -= 10;
    player.heightF -= 10;
    player.widthF -= 10;
}
//all you need now is the function with the inputs 
function moveEnemy(rowL, rowR) {
    // console.log(firstRowRight.leftX);
    if (enimies.postionX + enimiesMove.postionX > rowR || enimies.postionX + enimiesMove.postionX < rowL) {
        enimiesMove.postionX = -enimiesMove.postionX;
    };
    enimies.postionX += enimiesMove.postionX;

}
//88888888 Errors
var brickChange = 3;

function moveBrick() {

    if (secondRowleft.leftX2 - 5 > 1200 ||
        secondRowleft.leftX2 + 5 < 0) {
        secondRowleft.leftX2 = -brickChange;
    };
    secondRowleft.leftX2 += brickChange;

}



function firem() {

    if (fireBall.X < 1200) {
        fireBall.X += 5;
        // console.log(fireBall.X);
    } else {
        fireBall.X = 2000;
        // console.log("Doop")
    }
    if (fireBall.Y === enimies.postionY && fireBall.X === enimies.postionX + 1 || fireBall.Y === enimies.postionY && fireBall.X === enimies.postionX - 4) {
        fireBall.X = 2000;
        
        enimies.postionX = 2000;
        setTimeout(resetEnemy, 3000);
        //call reset enemy funk ,30000

    }
    if (level === 4) {
        if (fireBall.X < 1200) {
        fireBall.X += 5;
        // console.log(fireBall.X);
    } else {
        fireBall.X = 2000;
        // console.log("Doop")
    }
    if (fireBall.X === enimies.postionX + 1 || fireBall.X === enimies.postionX - 4) {
        fireBall.X = 2000;
        
        enimies.postionX = 2000;
        setTimeout(resetEnemy, 3000);
        //call reset enemy funk ,30000

    }
    }
}

function resetEnemy() {
    enimies.postionX = enimiesMove.respawn;
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
    colorRect(0, 0, canvas.width, canvas.height, canvasBackground, "Main");

    colorRect(flag.leftX, flag.topY, flag.width, flag.height);

    colorRect(firstRowLeft.leftX, firstRowLeft.topY, firstRowLeft.width, firstRowLeft.height, firstRowLeft.drawColor, "I am half of firstRow");

    colorRect(firstRowRight.leftX, firstRowRight.topY, firstRowRight.width, firstRowRight.height, firstRowRight.drawColor, "I am the other half of first row");

    colorRect(secondRowleft.leftX, secondRowleft.topY, secondRowleft.width, secondRowleft.height, secondRowleft.drawColor, "I am half of second row");
    colorRect(secondRowleft.leftX2, secondRowleft.topY2, secondRowleft.width2, secondRowleft.height, secondRowleft.drawColor, "I am half of second row");
    colorRect(thirdRow.leftX, thirdRow.topY, thirdRow.width, thirdRow.height, thirdRow.drawColor, "I am thirdRow");



    //My goal will be to have the option of shwoing the follwing two if the images do not load \/\/

    // colorRect(player.postionX, player.postionY, 10, 75, "#CE839A", "player");
    // colorRect(enimies.postionX, enimies.postionY, 10, 75, "#green", "enemy");

    // colorCircle(cloud.centerX, cloud.centerY,cloud.radius,cloud.drawColor);
    // colorCircle(cloud.centerX + 40, cloud.centerY,cloud.radius,cloud.drawColor);
    // colorCircle(cloud.centerX + 80, cloud.centerY,cloud.radius,cloud.drawColor);
    // colorCircle(cloud.centerX + 80, cloud.centerY + 20,cloud.radius + 10,cloud.drawColor);
    // colorCircle(cloud.centerX + 50, cloud.centerY + 20,cloud.radius,cloud.drawColor);
    //These draw the images that are loaded on lines 13-19 there height an width will be static for now subject to change flag.height, 
    canvasContext.drawImage(flagg,flag.leftXG - 50, flag.topYG,flag.width,flag.height);
    canvasContext.drawImage(flagF,flagFF.leftX, flagFF.topY,flag.width,flag.height);

    canvasContext.drawImage(playerSim, player.postionX - 50, player.postionY, player.height, player.width);
    canvasContext.drawImage(playerFlip, player.postionXF - 50, player.postionYF, player.heightF, player.widthF);
    canvasContext.drawImage(coin, coinPosition.X, coinPosition.Y, 50, 35);
    canvasContext.drawImage(enemy, enimies.postionX - 50, enimies.postionY, 100, 75);
    canvasContext.drawImage(enemyFip, enimies.postionX - 50, enemyFlip.postionY, enemyFlip.H, enemyFlip.W);


    // for (var i = 0; i < hearts.length; i++) {
    //     hearts[i]
    // }
    canvasContext.drawImage(hearts, heartpostion.X, heartpostion.Y, 25, 25);
    canvasContext.drawImage(hearts, heartpostion.X2, heartpostion.Y2, 25, 25);
    if (attack === 100) {
        canvasContext.drawImage(fireBall, fireBall.X, fireBall.Y, 25, 25);
    }
}


function gravity() {
    if (level === 4) {
        if (player.postionYF === 175) {
            if (player.postionXF < 90 || player.postionXF > 990) {
                player.postionYF = 0;
            }
        } else if (player.postionYF === 350) {
            if (player.postionXF < 704 || player.postionXF > 1111) {
                player.postionYF = 175;
            }
        } else if (player.postionYF === 525) {
            if (player.postionXF > 750) {
                player.postionYF = 350;
            }
        }
    }
    if (level < 3 && player.postionY < 174) {
        setTimeout(roof, 10);
    } // else if (level === 3  && player.postionX > 975 && player.postionX < 765){
    //      setTimeout(roof, 10);
    // }
    if (player.postionX - secondRowleft.leftX < 0 && player.postionY < 176 ||
        secondRowleft.width + secondRowleft.leftX - player.postionX < 0
    ) {
        setTimeout(gravity2ndRow, 100);
    }

    function gravity2ndRow() {
        if (level != 3) {
            if (player.postionY < 176) {
                player.postionY = 350;
                console.log("Char Should fall dwm");
                console.log("up,dwn" + player.postionY, "left right" + player.postionX);
            } else { clearTimeout(); }
        };

        if (level === 3) {
            if (player.postionX < secondRowleft.leftX2 && player.postionY < 176 || player.postionX > secondRowleft.leftX2 + secondRowleft.width2 && player.postionY < 174) {
                if (player.postionX > 975 || player.postionX < 766) {
                    player.postionY = 350;
                };
                console.log("Char Should fall dwm");
                console.log("up,dwn" + player.postionY, "left right" + player.postionX);
            } else { clearTimeout(); }
           
        };

    };
    if (level === 3 ) {
         if (player.postionX > gap.left && player.postionX < gap.right && player.postionY === 350 || player.postionX > gap.left2 && player.postionX < gap.right2 && player.postionY === 350) {
        if (0===0) {

            setTimeout(gravity1stRow, 100);
        }
    };
    }

    if (player.postionX > gap.left && player.postionX < gap.right || player.postionX > gap.left2 && player.postionX < gap.right2) {
        if (player.postionY > 250 && player.postionY < 351) {

            setTimeout(gravity1stRow, 100);
        }
    };

    function gravity1stRow() {

        if (player.postionX > gap.left && player.postionX < gap.right || player.postionX > gap.left2 && player.postionX < gap.right2) {
            player.postionY = 525;
            console.log("Char Should fall dwm");
            console.log("up,dwn" + player.postionY, "left right" + player.postionX);
        } else { clearTimeout(); }
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
    $("#statsHere").html(`Coin Stats ${coinPosition.X} Level ${level}Player's X ${player.postionX}--- Player's Y ${player.postionY} _-_--__ Enimies X ${enimies.postionX} -___--_ Enimies Y ${enemyFlip.postionY}  `);
    // $("#statsHere").html(`Tokens: 23 &nbsp;&nbsp; Elapsed Time 1:10`);
}

function whatLvlIsThis() {
    //tells user the level they are on and coin count//
    if (health === -1) {
        $("#lvl").html(`You lost`);
    } else
        $("#lvl").html(`Level ${level} &nbsp;&nbsp;&nbsp;&nbsp; Coins ${coinPosition.count}`);
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
// function win() {
//     if (player.postionX === flag.postionX && player.postionY === flag.topY + 25) {
//        console.log("did Iw ork")
//     };
// }
// This will be called if enimy and player meet
function refreshPage() {
    window.location.reload();
}

function lose() {
    if (level === 4) {
        if (health === 2) {
        if (player.postionYF === enemyFlip.postionY && player.postionXF === enimies.postionX - 15) {
            heartpostion.Y2 = -100;
            health = 1;
        }
    } else if (health === 1) {
        if (player.postionYF === enemyFlip.postionY && player.postionXF === enimies.postionX - 15) {

            heartpostion.Y = -100;
            health = 0;
        }

    } else if (health === 0) {
        if (player.postionYF === enemyFlip.postionY && player.postionXF === enimies.postionX - 15) {
            health = -1;
            refreshPage();
        }
    }
    }
    if (health === 2) {
        if (player.postionY === enimies.postionY && player.postionX === enimies.postionX - 15) {
            heartpostion.Y2 = -100;
            health = 1;
        }
    } else if (health === 1) {
        if (player.postionY === enimies.postionY && player.postionX === enimies.postionX - 15) {

            heartpostion.Y = -100;
            health = 0;
        }

    } else if (health === 0) {
        if (player.postionY === enimies.postionY && player.postionX === enimies.postionX - 15) {
            health = -1;
            refreshPage();
        }
    }
}

function coinLogic(minX, maxX, multipleX, minY, maxY, multipleY) {
    if (player.postionY === coinPosition.Y && player.postionX === coinPosition.X) {
        coinPosition.count++;
        coinPosition.X = Math.floor(Math.random() * ((maxX - minX) / multipleX)) * multipleX + minX;
        coinPosition.Y = Math.floor(Math.random() * ((maxY - minY) / multipleY)) * multipleY + minY;
        console.log(`Coin thing happend ${coinPosition.X}`);
    } else if (player.postionYF === coinPosition.Y && player.postionXF === coinPosition.X) {
        coinPosition.count++;
        coinPosition.X = Math.floor(Math.random() * ((maxX - minX) / multipleX)) * multipleX + minX;
        coinPosition.Y = Math.floor(Math.random() * ((maxY - minY) / multipleY)) * multipleY + minY;
        console.log(`Coin thing happend ${coinPosition.X}`);
    }
}

function level2() {
    player.postionX = 1170;
    player.postionY = 525;
    level = 2;
     //this function will be updated to show score and tokens and time
    enimies = {
        postionX: 90,
        postionY: 175
    };
    enimiesMove.respawn = 500;
    firstRowLeft.width = 745;
    gap.left = 740;
    gap.right = 880;
    gap.left2 = 1109,
        gap.right2 = 1201,
        firstRowRight.leftX = 885;
    firstRowRight.width = 225;
    firstRowRight.drawColor = "black";
    secondRowleft.leftX = 80;
    secondRowleft.width = 900;
    flag.leftX = 105;
    flag.topY = 150;
    flag.leftXG = flag.leftX;
     flag.topYG = flag.topY;
}

function level3() {
    level = 3;
    player.postionX = 630;
    player.postionY = 525;
    enimies.postionX = 600;
    enimies = {
        postionX: 90,
        postionY: 175
    };
   gap.left = 560;
    gap.right = 704;
    gap.left2 = 1021,
        gap.right2 = 1201,
    // respawn may change
    enimiesMove.respawn = 90;
    firstRowLeft.width = 565;
    firstRowRight.leftX = 700;
    firstRowRight.width = 325;
    canvasBackground = "#A7ACAC";
    secondRowleft.leftX = 0;
    secondRowleft.width = 300;
    secondRowleft.drawColor = "black";
    secondRowleft.leftX2 = 450;
    secondRowleft.width2 = 300;
    thirdRow.leftX = 780;
    thirdRow.topY = 75;
    thirdRow.width = 200;
    thirdRow.height = 25;
    thirdRow.drawColor = "blue";
    flag.leftX = thirdRow.leftX + thirdRow.width / 2;
    flag.topY = 0;
    flag.leftXG = flag.leftX;
     flag.topYG = flag.topY;
}

function level4() {
    player.height = 0;
    player.width = 0;
    player.postionXF = 0;
    player.postionYF = 0;
    
    player.postionX = 0;
    player.postionY = 2200;
    level = 4;
    enimies = {
        postionX: 90,
    };
  enemyFlip = {
    H: 200,
    W: 175,
    postionY: 175
};
    secondRowleft.topY2 = 1450;
    thirdRow.leftX = -1000;
    enimiesMove.respawn = 500;
    firstRowLeft.width = 745;
    
        firstRowRight.leftX = 685;
    firstRowLeft.topY = 475;
    firstRowRight.width = 425;
    firstRowRight.topY = 300,
        firstRowRight.drawColor = "black";
    secondRowleft.leftX = 80;
    secondRowleft.topY = 125;
    secondRowleft.width = 900;
    flag.leftXG = - 1000;
     flag.topYG = - 1000;
     flag.leftX = 105;
    flag.topY = 500;
   flagFF.leftX  = flag.leftX;
     flagFF.topY = flag.topY;
   
}

// This is sets up 2nd level I may put this in a seprate file 
function change() {
    if (level === 1 && player.postionX === flag.leftX && player.postionY === flag.topY + 25) {
        setTimeout(level2, 1);
    } else if (level === 2 && player.postionX === flag.leftX && player.postionY === flag.topY + 25) {
        setTimeout(level3, 1);
    } else if (level === 3 && player.postionX > 854 && player.postionY === 0|| player.postionX < 915 && player.postionY === 0) {
        setTimeout(level4, 1);
    }
}
//     } else if (level === 4 && player.postionX > 854 && player.postionY === 0) {
//         console.log(brickChange); {
//             setTimeout(level4, 1);

//         }
//     }

// }


function playerLoop() {
    if (player.postionX > 1200) {
        player.postionX = 15;
    } else if (player.postionX < 0) {
        player.postionX = 1170;
    }
    if (level===4) {
       if (player.postionXF > 1200) {
        player.postionXF = 15;
    } else if (player.postionXF < 0) {
        player.postionXF = 1170;
    } 
    }
}