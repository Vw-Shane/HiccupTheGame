export function level2() {
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
};