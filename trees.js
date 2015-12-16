

function preload(){
    mySound=loadSound("Jingle_Bells_original_song.mp3");
}

function setup(){
  createCanvas(300,300);
    background("black");
     mySound.setvolume(0.3);
    
}

function mousePressed() {
  if (mouseX < width && mouseY < height && mouseX > 0 && mouseY > 0) {
    mySound.play();
  }
}

