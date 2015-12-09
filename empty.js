var box;
var imageSprite;
var collectibles;
var score = 0;
var score2 = 0;
var donutImg;



function setup() {
  createCanvas(1345, 625);
  fill(color(65));
  textSize(32);

  donutImg = loadImage("donut.png");
  var boximg = loadImage("sibling.png");
  box = createSprite(400, 200, 50, 125);
  box.addImage(boximg);
  document.body.style.backgroundImage = "url('pusheenbackground.jpg')";


  var img = loadImage("http://4.bp.blogspot.com/-_g3930a0KQo/UW48ossZ5GI/AAAAAAAAB5c/m75t76VPocw/s1600/sticker_144884852352448.png");
  imageSprite = createSprite(300, 300);
  imageSprite.addImage(img);


  collectibles = new Group();

  for (var i = 0; i < 100; i++) {
    var dot = createSprite(random(0, width), random(0, height));
    dot.addAnimation("normal", "donut.png");
    collectibles.add(dot);

    wallTop = createSprite(width / 2, -30 / 2, width, 30);
    wallBottom = createSprite(width / 2, height + 30 / 2, width, 30);
    wallRight = createSprite(width / 2, -30 / 2, width, 30);
    wallLeft = createSprite(width / 2, height + 30 / 2, width, 30);
  }


}

function draw() {
  imageSprite.collide(box);
  imageSprite.bounce(wallTop);
  imageSprite.bounce(wallBottom);
  box.bounce(wallTop);
  box.bounce(wallBottom);


  function collect(collecter, collected) {
    collected.remove();
    score++;
  }
  imageSprite.overlap(collectibles, collect);

  function collecting(collecter, collected) {
    collected.remove();
    score2++;
  }
  box.overlap(collectibles, collecting);



  if (keyDown(37)) {
    imageSprite.position.x -= 7;
  }
  if (keyDown(39)) {
    imageSprite.position.x += 7;
  }
  if (keyDown(38)) {
    imageSprite.position.y -= 7
  }
  if (keyDown(40)) {
    imageSprite.position.y += 7;
  }

  if (keyDown(65)) {
    box.position.x -= 10;
  }
  if (keyDown(68)) {
    box.position.x += 10;
  }
   if (keyDown(87)) {
    box.position.y -= 10;
  }
  if (keyDown(83)) {
    box.position.y += 10;
  }


  background(255, 255, 255);
  drawSprites();
  fill(color(65));
  textSize(32);
  text("Player 1 Donuts eaten:  " + score, 10, 30);


  fill(color(65));
  textSize(32);
  text("Player 2 Donuts eaten:  " + score2, 900, 30);
}



function mousePressed() {
  var dots = createSprite(mouseX, mouseY, 30, 30);
  dots.velocity.x = random(-5, 5);
  dots.velocity.y = random(-5, 5);
}
