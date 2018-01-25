// player stats
var health = 2;
canvasBackground = "#C9EEF3";

level = 1;
var player = {
    postionX: 300,
    postionY: 225,
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
    vertical: 75,
    horizonF: -15,
    verticalF: 90

};
var flagFF = {
    leftX: -1000,
    topY: -1000
};

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

function drawEverything() {
    //the following is the drawing of everything on screen
    colorRect(0, 0, canvas.width, canvas.height, canvasBackground, "Main");
canvasContext.drawImage(playerSim, player.postionX - 50, player.postionY, player.height, player.width);
if (attack === 100) {
        canvasContext.drawImage(fireBall, fireBall.X, fireBall.Y, 25, 25);
}
}

    function moveEverything() {
        window.addEventListener('keydown', movePlayer, true);

        firem();


        playerLoop();


    }
    function HH() {
    // this makes the player "hiccup" out a fireball
    player.height -= 10;
    player.width -= 10;
    player.heightF -= 10;
    player.widthF -= 10;
}

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


    function playerLoop() {
        if (player.postionX > 1200) {
            player.postionX = 15;
        } else if (player.postionX < 0) {
            player.postionX = 1170;
        }
        if (level === 4) {
            if (player.postionXF > 1200) {
                player.postionXF = 15;
            } else if (player.postionXF < 0) {
                player.postionXF = 1170;
            }
        }
    }