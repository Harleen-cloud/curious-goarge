
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0,paris,france
function preload(){
  
  paris=loadImage("forest.jpg")
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


function setup() {
  createCanvas(600, 400);
  
  france=createSprite(300,200,1200,10); 
 france.velocityX=-4; 
france.addImage(paris)
  france.scale=1.5
  
monkey=createSprite(80,315,20,20); 
 monkey.addAnimation("moving",monkey_running); 
 monkey.scale=0.1
  
  ground=createSprite(400,350,1200,10); 
ground.x=ground.width/2;
console.log(ground.x)
  ground.shapeColor="black"
  
 
  
  FoodGroup= new Group();
  obstacleGroup= new Group();
  
}

function draw() {
background(paris);
  drawSprites();
  
  textSize(20);
  fill("white");
  text("score:"+score,500,50);
  
  if(france.x<0)
  {
    france.x=france.width/2;
  }
   if(keyDown("space"))
   { 
     monkey.velocityY=-10;
   }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground); 
  
  food();
  obstacles();
  
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach()
    monkey.scale=monkey.scale+0.01
    score=score+1
    
  }
 
  if(obstacleGroup.isTouching(monkey)){
    monkey.scale=0.08
  }
}

function food ()
{
  if(frameCount%80===0)
  { 
    banana=createSprite(600,Math.round(random(220,270)),45,6);
    banana.addImage(bananaImage);
    banana.scale=0.1; 
    banana.velocityX=-2 ;
    banana.lifetime=350 ;
    FoodGroup.add(banana)
  }
}
function obstacles ()
{
  if(frameCount % 150===0)
  { 
    obstacle=createSprite(600,325,45,6);
    obstacle.addImage(obstacleImage) ;
    obstacle.scale=0.1;
    obstacle.velocityX=-2;
    obstacle.lifetime=350;
    obstacleGroup.add(obstacle);
  } 
} 



