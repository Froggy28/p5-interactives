var GRAVITY = .1;
var hummingbird;

function setup(){
    createCanvas(1200,608);
    var humbirdImage=loadImage("humbirdImage.png")
        hummingbird=createSprite(width/2,520);
        hummingbird.addImage(humbirdImage);
        
        camera.position.x = width/2;
        
}


function draw(){
    background("white");
    hummingbird.velocity.y -=.01;

    //moving from left to right
    if(keyDown(37)){
        hummingbird.position.x -=5;
    }
    if(keyDown(39)){
        hummingbird.position.x +=5;
    }
    
    drawSprites();
}