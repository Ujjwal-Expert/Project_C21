var car, wall;
var touch=false;

var weight=0
var speed = 0
var thickness=0;

var deformation= 0
function setup() {
  createCanvas(800,400);
  

  

  weight= random(400,1500);
  speed = random(55,90);
  thickness=random(22,83)

  wall = createSprite(600,200,thickness,200);
  wall.shapeColor="grey";

  bullet = createSprite(200,200,40,15);
  bullet.shapeColor="grey";
  

  deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);
  
}

function draw() {
  background("white");
  //car.x = World.mouseX;

  bullet.velocityX=speed;

  if(bullet.x-wall.x <= bullet.width/2 + wall.width/2&&
     wall.x-bullet.x<= bullet.width/2 + wall.width/2 ){
     touch=true;
  }
  
  

  if(touch === true && deformation <= 10){
    wall.shapeColor="green";
    bullet.velocityX=0;
  }
  if(touch === true && deformation > 10){
    wall.shapeColor="red";
    bullet.velocityX=0;
  }
  

  drawSprites();

}