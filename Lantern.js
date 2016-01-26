var bodyButton= document.getElementById("bodyButton");
var bodyInput=document.getElementById("bodyInput");
var ballButton= document.getElementById("ballButton");
var ballInput=document.getElementById("ballInput");
var tailButton=document.getElementById("tailButton");
var tailInput=document.getElementById("tailInput");
var topButton=document.getElementById("topButton");
var topInput=document.getElementById("topInput");
var backgroundButton=document.getElementById("backgroundButton");
var backgroundInput=document.getElementById("backgroundInput");
var dragons=document.getElementById("dragons");
var hasDragons=false;

function setup(){
    createCanvas(1340,600);
}


var bodyColor="red";
var ballColor="gold";
var tailColor="red";
var topColor="gold";
var backgroundColor="white";

 bodyButton.addEventListener("click", function(){
        bodyColor=bodyInput.value;
    });
     
 ballButton.addEventListener("click", function() {
        ballColor=ballInput.value;
   });
   
 tailButton.addEventListener("click", function() {
     tailColor=tailInput.value;
 })
 
 topButton.addEventListener("click", function() {
     topColor=topInput.value;
 })
 
 backgroundButton.addEventListener("click", function() {
     backgroundColor=backgroundInput.value;
 })
 
 dragons.addEventListener("click", function() {
     hasDragons=true;
 })
    
function draw(){
    background(backgroundColor);
    
        var string=line(670,0,670,160)
    
        fill(topColor);
        var top=rect(625,160,90,40);

        fill(bodyColor);
    var lanternBody=ellipse(670,280,300,200);
    
    fill(tailColor);
        var tassleTail= triangle(650,489, 670, 410, 690,480);
    
        fill(ballColor);
    var tassleBall=ellipse(670,397,40,40);
    
    if(hasDragons===true){var dragonSprite=createSprite(180,300);
     var dragonImage=loadImage("dragon.png");
     dragonSprite.addImage(dragonImage);
     drawSprites();}
}