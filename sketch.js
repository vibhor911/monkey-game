PLAY=1;
END=0;
gameState=PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var score
var ground;
var survivalTime;
var obstacleGroup;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(600, 500);

  var message = "This is a message";
 console.log(message) 

 monkey=createSprite(50,335,20,50)
monkey.addAnimation("moving",monkey_running);
 monkey.collide=ground; 
 monkey.scale=0.1; 
  
 ground = createSprite(400,370,2000,20);
ground.velocityX=-4;  
 
 score=0;
 
 obstacleGroup = new Group(); 
}


function draw() {
 background(180);
 
  if(gameState === PLAY){
    score = score + Math.round(getFrameRate()/60);
  var survivalTime=0; 
 stroke("white") ;
 textSize(20);
 fill("white");
  text("Score: "+ score, 500,50); 
  
stroke("black");
 textSize(20);
fill("black");  
survuvalTime=Math.ceil(frameCount/frameRate())  
text("survivalTime:"+survivalTime,100,50)   
    
 
//if(keyDown("space")&& monkey.y >= 365) {
 //       monkey.velocityY = -12;
// }  
 if (ground.x < 0){
      ground.x = ground.width/2;
    }
  //add gravity
 // monkey.velocityY = monkey.velocityY + 0.8   
    
 //if(banana.isTouching(monkey)){
   //score=score+3;
 //}
 if(obstacleGroup.isTouching(monkey)){
   console.log("hello")
 }   
    
  }

          
  banana();   
 obstacle(); 
 
 
  
drawSprites();  
}

function banana(){
  if (frameCount % 150 === 0){
   var banana = createSprite(550,175,10,40);
banana.velocityX = -4;
banana.scale=0.1;
banana.lifetime=300;
banana.addImage(bananaImage);
    
}
}

function obstacle(){
if(frameCount % 200===0){
 var obstacle=createSprite(570,335,40,10);
  obstacle.velocityX=-6;
obstacle.lifetime=300;  
obstacle.scale=0.1;  
obstacle.addImage(obstacleImage) ;
obstacleGroup.add(obstacle)
  
}
  
}

