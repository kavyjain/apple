var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function applefun(){
apple=createSprite(random(50,350),40,10,10);
apple.addImage(appleImage);
apple.scale=0.08;
apple.velocityY=2;
apple.lifetime = 150;
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX;

var select_sprite =Math.round(random(1,2))
if (frameCount % 80 ===0){


if (select_sprite ==1){
  applefun();
}
}


  drawSprites();
}



