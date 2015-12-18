var button1 = document.getElementById("button1");
var input1 = document.getElementById("input1");
var theParagraph = document.getElementById("theParagraph");
var treeTopInput = document.getElementById("treeTopInput");
var treeTopButton = document.getElementById("treeTopButton");
var stumpInput = document.getElementById("stumpInput");
var stumpButton = document.getElementById("stumpButton");
var treeMidInput = document.getElementById("treeMidInput");
var treeMidButton = document.getElementById("treeMidButton");
var treeBoInput = document.getElementById("treeBoInput");
var treeBoButton = document.getElementById("treeBoButton");
var topInput = document.getElementById("topInput");
var topButton = document.getElementById("topButton");
var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");
var button9 = document.getElementById("button9");
var button10 = document.getElementById("button10");
var button11 = document.getElementById("button11");
var button12 = document.getElementById("button12");
var hasStar = false;
var hasMinion = false;
var hasFrog = false;
var hasOrnaments = false;
var hasPresents = false;
var hasFrogs=false;


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

    // //adding ornaments and presents
    button10.addEventListener("click", function() {
        hasOrnaments = !hasOrnaments;
    });
    button11.addEventListener("click", function() {
        hasPresents = !hasPresents;
    });
    button12.addEventListener("click",function() {
        hasFrogs=!hasFrogs;
    });
}


var stumpColor = "brown";
var treeTopColor = "green";
var treeMidColor = "green";
var treeBoColor = "green";
var topColor = "silver";



stumpButton.addEventListener("click", function() {
        stumpColor = stumpInput.value;
});

treeBoButton.addEventListener("click", function() {
        treeBoColor = treeBoInput.value;
    });
treeMidButton.addEventListener("click", function() {
    treeMidColor=treeMidInput.value;
});
treeTopButton.addEventListener("click",function() {
    treeTopColor=treeTopInput.value;
})
topButton.addEventListener("click", function() {
    topColor=topInput.value;
})

function draw() {
    background("thistle");

    //Draws Stump
    fill(stumpColor);
    var stump = rect(610, 360, 70, 70);
            
    // Draws + changes for Bottom Tree
    fill(treeBoColor);
    var treeBottom = triangle(455, 370, 645, 200, 825, 370);

 
    //changes and draws for second segment
    fill(treeMidColor);
    var tri2 = triangle(455, 310, 645, 190, 815, 310);
    
//Changes and draws for first segment
    fill(treeTopColor);
    var tri = triangle(473, 245, 645, 125, 795, 245);

// //changes topper color
    fill(topColor);
    var topping = ellipse(645, 120, 50, 50);


    if (hasFrog === true) {
        var img3 = loadImage("froggy.png");
        var mySprite= createSprite(645, 100);
        mySprite.addImage(img3);
        drawSprites();
        console.log("drawing frog");
    }
    
    if (hasStar === true) {
        var img = loadImage("stars.png");
       mySprite = createSprite(645, 120);
        mySprite.addImage(img);
        drawSprites();
    }

    if (hasMinion === true) {
        var img2 = loadImage("minion.png");
        mySprite = createSprite(645, 80);
        mySprite.addImage(img2);
        drawSprites();
    }
    //puts presents under tree

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
    if(hasFrogs===true){
        var frogImg=loadImage("frog2.png");
       imageSprite = createSprite(620, 200);
        imageSprite.addImage(frogImg);
        imageSprite = createSprite(560, 260);
        imageSprite.addImage(frogImg);
        imageSprite = createSprite(680, 280);
        imageSprite.addImage(frogImg);
        imageSprite = createSprite(570, 330);
        imageSprite.addImage(frogImg);
        imageSprite = createSprite(700, 340);
        imageSprite.addImage(frogImg);
        drawSprites();
    }
    
    if (hasPresents === true) {
        var presentimg = loadImage("present.png");
        imageSprite = createSprite(590, 400);
        imageSprite.addImage(presentimg);
        var presentimg2 = loadImage("present2.png");
        imageSprite2 = createSprite(720, 400);
        imageSprite2.addImage(presentimg2);
        drawSprites();
    }
    
}