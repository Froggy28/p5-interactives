var dSprite;
var pSprite;
var collectibles;
var score=0;
var pscore=0;
var MARGIN=40;

function setup(){
 createCanvas(1335,606); 
 
 //creating a dragon sprite
var dragonimg = loadImage("dragon1.png");
  dSprite = createSprite(300, 300);
  dSprite.addImage(dragonimg);
  
 //creating a phoenix sprite 
var phoeniximg=loadImage("phoenix.png");
  pSprite=createSprite(600,300);
  pSprite.addImage(phoeniximg);
  
 collectibles = new Group();

for(var i = 0; i< 200; i++){
var dot=createSprite(random(0,width), random(0,height));
dot.addAnimation("normal", "pearl.png");
collectibles.add(dot);
    }
    
}

backgroundColor="white";

function draw(){
    background(backgroundColor);
    textSize(32);
    
//This keeps the sprites from dissapearing off the sie
for(var i=0; i<allSprites.length; i++){
    var s= allSprites[i];
    if(s.position.x<-MARGIN)s.position.x=width+MARGIN;
    if(s.position.x>width+MARGIN)s.position.x=-MARGIN;
    if(s.position.y<-MARGIN)s.position.y=height+MARGIN;
    if (s.position.y>height+MARGIN)s.position.y=-MARGIN 
}
    
//dragon collects
function collect(collecter, collected){
    collected.remove()
    score++;
}
dSprite.overlap(collectibles,collect);

//phoenix collects
function collects(collecter, collected){
    collected.remove();
    pscore++;
}
pSprite.overlap(collectibles, collects);


    //These key functions make the dragon sprite move around the canvas
    if(keyDown(38)){
        dSprite.position.y -=5;
    }
    if(keyDown(40)){
        dSprite.position.y +=5;
    }
    if(keyDown(39)){
        dSprite.position.x +=5;
    }
    if(keyDown(37)){
        dSprite.position.x -=5;
    }
    
    //Make the phoenix move around the canvas
    if(keyDown(65)){
        pSprite.position.x -=5;
    }
    if(keyDown(68)){
        pSprite.position.x +=5;
    }
    if(keyDown(87)){
        pSprite.position.y -=5
    }
    if(keyDown(83)){
        pSprite.position.y +=5;
    }
    //draws sprites and scores
    background(255,255,255);
    fill(color(65));
    text("Dragon pearls: " +score, 10, 30);
    text("Phoenix pearls: " +pscore, 900,30)
    drawSprites();
}