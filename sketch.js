
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;
var back,retry1,retry;
var gamestate="play";

function preload(){
  
  
monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
  back=loadImage("back1.jpg");
  retry1=loadImage("retry.jpg");
}



function setup() {
  createCanvas(600,600);
  
  back1=createSprite(width/2,300,10000,600);
  back1.addImage("bla bla",back);
  back1.velocityX=-2;
  //back.scale=5;
  retry=createSprite(width/2,350,60,60);
  retry.addImage("ree",retry1);
  retry.scale=0.1;
  
  monkey=createSprite(50,350,10,10);
  monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale=0.125;

  ground=createSprite(width,460,1000,5);
  ground.shapeColor="white";
  monkey.collide(ground);
  ground.visible=false;
  ground.velocityX=-2;
  if(ground.x===0){
    ground.x=ground.width/2;
  }
  
  obstacleGroup=new Group();
  FoodGroup=new Group();
}

function draw() {
  background("black");
  if (ground.x > 10) {
    ground.x = 300;
  }
  
  if(back1.x<300){
    back1.x=300;
  }
  //gamestate= play
  if(gamestate==="play"){
    monkey.visible=true;
    obstacleGroup.visible=true;
    FoodGroup.visible=true;
    back1.visible=true;
    retry.visible=false;
    monkey.velocityY=monkey.velocityY+0.8;
    monkey.collide(ground);
    textSize(20);
    fill("white")
    text("🍌×"+score,390,30);
    if(touches.lenght>0||keyDown("space")){
     monkey.velocityY= -12;
     Touches[];
    }           

    //functions 
  obstacles();
    bananas();
    
}
  if(monkey.isTouching(obstacleGroup)){
    gamestate="over";
    FoodGroup.destroyEach();
  }
  if(monkey.isTouching(FoodGroup)){
    score=score+1;
    FoodGroup.destroyEach();
  }
  
  if(gamestate==="over"){
    retry.visible=true;
    monkey.visible=false;
    obstacleGroup.visible=false;
    FoodGroup.visible=false;
    back1.visible=false;
    textSize(25);
    fill("white")
    text("G A M E  O V E R",200,170);
    textSize();
    text("No. of bananas destroyed/eaten :"+score+"🍌",20,250);
    if(mousePressedOver(retry)){
      monkey.y=350;
      gamestate="play";
      score=0;
    }
  }
  
  
  drawSprites();
}

function obstacles() {
  if (frameCount % 100 === 0) {
    obstacle = createSprite(width, 435 , 10 , 10);
    obstacle.velocityX = -6;
    obstacle.addAnimation("ob", obstaceImage);
    obstacle.scale = 0.1;
    obstacle.lifetime=100;
    obstacleGroup.add(obstacle);
  }
}
function bananas(){
  if(frameCount%120===0){
    var y=Math.round(random(430,50))
    banana=createSprite(width,y,20,20);
    banana.velocityX=-6;
    banana.addImage("kela",bananaImage);
    banana.scale=0.1;
    FoodGroup.add(banana);
  }
}





