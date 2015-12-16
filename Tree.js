var button1 = document.getElementById("button1");
var input1 = document.getElementById("input1");
var theParagraph = document.getElementById("theParagraph");
var input2 = document.getElementById("input2");
var button2 = document.getElementById("button2");
var input3 = document.getElementById("input3");
var button3 = document.getElementById("button3");
var input4 = document.getElementById("input4");
var button4 = document.getElementById("button4");
var input5 = document.getElementById("input5");
var button5 = document.getElementById("button5");
var input6 = document.getElementById("input6");
var button6 = document.getElementById("button6");
var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");
var button9 = document.getElementById("button9");
var button10 = document.getElementById("button10");
var button11 = document.getElementById("button11");
var button12=document.getElementById("button12")
var hasStar = false;
var hasMinion = false;
var hasFrog = false;
var hasOrnaments = false;


function setup() {
    createCanvas(1300, 700);

    // //Changes color of text
    button1.addEventListener("click", function() {
        var newColor = input1.value;
        theParagraph.style.color = newColor;
    });

    //The next few functions add toppers
    button9.addEventListener("click", function() {
        hasFrog = !hasFrog;
    });

    button7.addEventListener("click", function() {
        hasStar = !hasStar;
    });
    button8.addEventListener("click", function() {
        hasMinion = !hasMinion;

    });

    // //adding ornaments
    button10.addEventListener("click", function() {
        hasOrnaments = true;
    });
}

function draw() {
    background("thistle");
    
        // changes colors of stump
    var colors = button3.addEventListener("click", function() {
        var cc = color(input3.value);
        fill(cc);
    });

    fill(colors);
    var stump = rect(610, 360, 70, 70);

    //changes colors for tree

var color3=color(input5.value);
    fill(color3);
    var tri3 = triangle(455, 370, 645, 200, 825, 370);
    var color2=color(input4.value);
    fill(color2);
    var tri2 = triangle(455, 310, 645, 190, 815, 310);
    var color1=color(input2.value);
    fill(color1)
    var tri = triangle(473, 245, 645, 125, 795, 245);


     var co = color(input6.value);
    fill(co);
    var topping = ellipse(645, 120, 50, 50);


    if (hasFrog === true) {
        var img3 = loadImage("froggy.png");
        imageSprite = createSprite(645, 100);
        imageSprite.addImage(img3);
        drawSprites();
        console.log("drawing frog");
    }
    
    if (hasStar === true) {
        var img = loadImage("stars.png");
        imageSprite = createSprite(645, 120);
        imageSprite.addImage(img);
        drawSprites();
    }

    if (hasMinion === true) {
        var img2 = loadImage("minion.png");
        imageSprite = createSprite(645, 80);
        imageSprite.addImage(img2);
        drawSprites();
    }
    //puts presents under tree
   button11.addEventListener("click", function() {
        var presentimg = loadImage("present.png");
        imageSprite = createSprite(590, 400);
        imageSprite.addImage(presentimg);
        var presentimg2 = loadImage("present2.png");
        imageSprite2 = createSprite(720, 400);
        imageSprite2.addImage(presentimg2);
        drawSprites();

    });
    if (hasOrnaments === true) {
            var ornament = loadImage("ornament.png");
            imageSprite = createSprite(620, 200);
            imageSprite.addImage(ornament);
            imageSprite = createSprite(560, 260);
            imageSprite.addImage(ornament);
            imageSprite = createSprite(680, 280);
            imageSprite.addImage(ornament);
            imageSprite = createSprite(560, 330);
            imageSprite.addImage(ornament);
            imageSprite = createSprite(700, 340);
            imageSprite.addImage(ornament);
            drawSprites();
        }
}

