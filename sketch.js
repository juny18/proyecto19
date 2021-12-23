///gameState=PLAY; gameState va después de declarar las variables
var PLAY =1;
var END = 0;
var towerImg,tower;
var doorImg,door,doorsGroup;
var climberImg,climber,climbersGroup;
var ghost,ghostImg;
var spiritCollided;

gameState=PLAY;


function preload(){
towerImg=loadImage("tower.png"); 
doorImg=loadImage("door.png");
climberImg=loadImage("climber.png");
ghostImg=loadImage("ghost-standing.png");
spiritCollided=loadAnimation("spirit.png");
 
   
doorsGroup=new Group();  
climbersGroup=new Group();  
}  




function setup(){
createCanvas(600,600);
tower=createSprite(300,300); 
tower.addImage("tower",towerImg);
tower.velocityY=4;
  
   
ghost=createSprite(300,500);// checa la posición en y
ghost.addImage("ghost",ghostImg);
ghost.addAnimation("spirit", spiritCollided);  
ghost.scale=0.4;  
  

ghost.setCollider("circle",0,0,100);
ghost.debug = false;
}




function draw(){
  background(0);
ghost.x =World.mouseX;  
  
  
if(tower.y>400){
 tower.y=300;
}
  

  if(gameState === PLAY){

   //ground.velocityY=4;
    //scoring
    
   //spawnClouds();
   if (tower.x < 0){
     tower.x = tower.width/2;
    }
       
    spawnDoors();
    
   if(climbersGroup.isTouching(ghost)){
            
        gameState = END;
      
    }

    //No cambiaste la varible del trex
   if(doorsGroup.isTouching(ghost)){
            
        gameState = END;
      
    }
  }      
 else if (gameState === END){
           
     //change the trex animation
      ghost.changeAnimation("spirit", spiritCollided);
    
      tower.velocityY = 0;
      ghost.velocityX = 0;
      
     
      //set lifetime of the game objects so that they are never destroyed
   doorsGroup.setLifetimeEach(-1);
   climbersGroup.setLifetimeEach(-1);
     
   doorsGroup.setVelocityYEach(0);
   climbersGroup.setVelocityYEach(0);  
  }
  


drawSprites()
}


function spawnDoors(){

  
if(frameCount%370 === 0){
var door=createSprite(200,-50)  
door.addImage(doorImg);
  
//door.lifetime=800;
door.x=Math.round(random(120,400));  
 
door.velocityY=7;//7
  door.lifetime=800; 
  
  //
doorsGroup.add(door)
  
climber=createSprite(200,10);  
climber.x=door.x;  
  
climber.addImage("climber",climberImg);  
  
climber.velocityY=7;  
climber.lifetime=800;
climbersGroup.add(climber);  

  
}  
  
  
  
  

}