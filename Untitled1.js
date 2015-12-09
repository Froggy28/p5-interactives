var box;
var imageSprite;
var collectibles;


function setup() {
  createCanvas(1345,625);
  box=createSprite(400,200,50,125);
  var img=loadImage("http://4.bp.blogspot.com/-_g3930a0KQo/UW48ossZ5GI/AAAAAAAAB5c/m75t76VPocw/s1600/sticker_144884852352448.png");
    imageSprite = createSprite(300,300);
  imageSprite.addImage(img);
  var img2=loadImage("http://1.bp.blogspot.com/-06-1H-ByqQo/UEovm7WZlaI/AAAAAAAABzo/yo6iq6gZPjg/s1600/pusheen_the_cat_png_by_xcswagg-d55vutz.png")
  collectibles=createSprite(30,30)
  collectibles.addImage(img2)
  
 
}

function draw() {
collectibles.position.x=mouseX;
collectibles.position.y=mouseY;