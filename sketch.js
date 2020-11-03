var PLAY=1;
var END=0;
var gameState=1;
var swordImage,sword;
var fruits;
var enemy;
var monsterImage,monster;
var monsterGroup;
var fruitGroup;
var fruit1,fruit2,fruit3,fruit4;
var score=0;
var gameOverImage;
var knifeSwooshSound
var gameOverSound


function preload(){
  swordImage= loadImage("sword.png");
 monsterImage=loadImage("alien1.png");
gameOverImage=loadImage("gameover.png");
fruit1=loadImage("fruit1.png")
fruit2=loadImage("fruit2.png")
fruit3=loadImage("fruit3.png")
fruit4=loadImage("fruit4.png")

 knifeSwooshSound=loadSound("knifeSwooshSound.mp3")
gameOverSound=loadSound("gameover.mp3")

}




function setup(){
  
  createCanvas(600,600);
  
  
  sword=createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale=0.7;
  
  fruitGroup = new Group();
monsterGroup = new Group();
}

  score = 0;  






function draw(){
background("lightblue");
  text("score :"+score,500,50)
textSize(20);
  
  if(gameState===PLAY){
   fruits();
  enemy(); 
    sword.y=World.mouseY;
  sword.x=World.mouseX;
  if (fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
    score=score+2
    knifeSwooshSound.play();
  }
    
  }
  if(monsterGroup.isTouching(sword)){
    gameState=END;
     gameOverSound.play();
  }
  else if(gameState===END){
   fruitGroup.destroyEach();
    monsterGroup.destroyEach();
  sword.addImage(gameOverImage);
   sword.x=200; 
    sword.y=200;
  }
  
  
  drawSprites();
}

function fruits(){
 if (frameCount % 80 === 0) {
 fruit = createSprite(400,200,40,10);
fruit.scale=0.2;
 r = Math.round(random(1,4));
 if (r == 1) {
      fruit.addImage(fruit1);
 }else if (r == 2) {
      fruit.addImage(fruit2);
 }else if (r == 3) {
      fruit.addImage(fruit3);
 }else if (r == 4) {
      fruit.addImage(fruit4);
 }
   fruit.y = Math.round(random(50,340));
 
 fruit.velocityX=-7;
 fruit.setLifeTime=100;
 position= Math.round(random(1,2))
  
   if(position==1) {
    fruit.x=400;
    fruit.velocityX=-(7+(score/4)); 
  }
   
   else if(position==2){
     fruit.x=0
 fruit.velocityX=(7+(score/4)); 
   } 
   fruitGroup.add(fruit);

 
 
 }
}

function enemy(){
 if (frameCount % 200 === 0) {
 monster = createSprite(400,200,40,10);
 monster.addAnimation("moving",monsterImage)
   monster.y = Math.round(random(100,300));
 monster.velocityX=-8;
 monster.setLifeTime=50;
 monster.velocityX=-(8+(score/10)); 
   monsterGroup.add(monster);
 }
 
 
 
}



