var player = {
    postionX: 0,
    postionY: 500

}
var keysDown = {};

window.onload = function() {
    console.log(keysDown);
    canvas = document.getElementById('myCanvas');
    canvasContext = canvas.getContext('2d');
    var framesPerSecond = 60;
    setInterval(function() {
        drawEverything();
        moveEverything();
    }, 1000 / framesPerSecond);

};
//drawing code
function drawEverything() {
    colorRect(0, 0, canvas.width, canvas.height, '#C9EEF3', "Main");
    colorRect(0, canvas.height - 185, canvas.width / 3, canvas.height / 12, "red", "firstRowLeft");
    colorRect(canvas.width - 650, canvas.height - 185, canvas.width, canvas.height / 12, "red", "firstRowRight");
    colorRect(90, canvas.height - 395, canvas.width, canvas.height / 12, "green", "secondRow")
    colorRect(canvas.width - 20, canvas.height - 495, 10, 100, "yellow", "flag")
    colorRect(player.postionX, player.postionY, 10, 100, "#CE839A", "player")
}

function moveEverything() {
    window.addEventListener('keydown', doKeyDown, true);
    if (player.postionX < 90 && player.postionY < 140) {
        setTimeout(gravity2ndRow, 100);

        function gravity2ndRow() {
            if (player.postionX < 90 && player.postionY < 130) {
                player.postionY = 308;
                console.log("Char Should fall dwm");
                console.log("up,dwn" + player.postionY, "left righht" + player.postionX);
            } else { clearTimeout(); }
        };
    }
}
// up,dwn130 left righht80
function doKeyDown(evt) {
    switch (evt.keyCode) {
        case 38:
            /* Up arrow was pressed */
            console.log("up");

            player.postionY -= 180;

            break;
        case 40:
            /* Down arrow was pressed */
            console.log("dwn");
            console.log("up,dwn" + player.postionY, "left righht" + player.postionX);
            break;
        case 37:
            /* Left arrow was pressed */
            console.log("left");
            player.postionX -= 10;
            break;
        case 39:
            /* Right arrow was pressed */
            console.log("right");
            player.postionX += 10;
            break;
        case 32:
            /* Right arrow was pressed */
            console.log("right");
            player.postionX += 10;
            player.postionY -= 10;
            break;
    }
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