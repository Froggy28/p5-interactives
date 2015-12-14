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
var hasStar = false;
var hasMinion = false;
var hasFrog = false;
var hasOrnaments = false;


function setup() {
    createCanvas(1300, 700);

    // sets original colors
    var colors = color('brown');
    fill(colors);
    var stump = rect(610, 360, 70, 70);

    // uses input from input 3 to change stump
    button3.addEventListener("click", function() {
        var cc = color(input3.value);
        fill(cc);
        var stump = rect(610, 369, 70, 70);
    });

    //sets original colors for tree
    var c = color('green');
    fill(c);

    var tri3 = triangle(455, 370, 645, 200, 825, 370);
    var tri2 = triangle(455, 310, 645, 190, 815, 310);
    var tri = triangle(473, 245, 645, 125, 795, 245);

    //Takes input from input 2 to change color of  first segment
    button2.addEventListener("click", function() {
        var c = color(input2.value);
        fill(c);
        var tri = triangle(473, 245, 645, 125, 795, 245);
    });

    //Changes color of second segment!
    button4.addEventListener("click", function() {
        var ccc = color(input4.value);
        fill(ccc);
        var tri2 = triangle(455, 310, 645, 190, 815, 310);
    });

    //Changes color of third segment!
    button5.addEventListener("click", function() {
        var cccc = color(input5.value);
        fill(cccc);
        var tri3 = triangle(455, 370, 645, 200, 825, 370);
    });
    // Tree topping, and colors
    var co = color("silver");
    fill(co);
    var topping = ellipse(645, 120, 50, 50);

    button6.addEventListener("click", function() {
        var topColor = color(input6.value);
        fill(topColor);
        var topping = ellipse(645, 120, 50, 50);
    });

    // //Changes color of text
    button1.addEventListener("click", function() {
        var newColor = input1.value;
        theParagraph.style.color = newColor;
    });
    button9.addEventListener("click", function() {
        hasFrog = true;
        console.log("clicking frog")
 if (hasFrog === true) {
        var img3 = loadImage("froggy.png");
        imageSprite = createSprite(645, 100);
        imageSprite.addImage(img3);
        drawSprites();
        console.log("drawing frog");
    }
    });

    button7.addEventListener("click", function() {
        hasStar = true;
    });
    button8.addEventListener("click", function() {
        hasMinion = true;

    });

    //adding ornaments
    button10.addEventListener("click", function() {
        hasOrnaments = true;
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
    });
}





function draw() {
    
    // clearRect();

    if (hasStar === true) {
        var img = loadImage("stars.png");
        imageSprite = createSprite(645, 120);
        imageSprite.addImage(img);
        drawSprites();
    }

    if (hasStar === true) {
        var img2 = loadImage("minion.png");
        imageSprite = createSprite(645, 80);
        imageSprite.addImage(img2);
        drawSprites();
    }

}