var bola;
function setup() {
  createCanvas(400,400);
 bola=createSprite(124,244,150,270)} 

function draw() 
{
  background(30);
if(keyIsDown(UP_ARROW)){
background("blue");
bola.y=bola.y-175
}
if(keyIsDown(DOWN_ARROW)){
background("red");
bola.y=bola.y+175
}
 if(keyIsDown(LEFT_ARROW)){
background("purple");
  bola.x=bola.x-175
 }
if(keyIsDown(RIGHT_ARROW)){
background("orange");
  bola.x=bola.x+175 
}


drawSprites();
}


