var bkImg;
var donut;
var dImg;
var cherryImg;
var chocoImg;
var sprinklesImg;
var sprinklesGroup,cherryGroup, chocoGroup;
var chilliGroup, knifeGroup;
var knifeImg;
var chilliImg;
var gameoverImg;

function preload(){
bkImg=loadImage("bg.jpg");
dImg=loadImage("donut.png")
cherryImg=loadImage("cherry.png")
chocoImg=loadImage("choco.png")
sprinklesImg=loadImage("sprinkles.png")
knifeImg=loadImage("knife.png")
chilliImg=loadImage("chilli.png")
gameoverImg=loadImage("gameover.png")

}

function setup(){
createCanvas(1503,820);

donut=createSprite(650,740,20,20);
donut.addImage("d1",dImg);
donut.scale=0.2;

g1=createSprite(600,400,20,20)
g1.addImage(gameoverImg)
g1.scale=0.1
g1.visible=false


sprinklesGroup = new Group()
cherryGroup = new Group()
chocoGroup = new Group()
chilliGroup = new Group()
knifeGroup = new Group()

}

function draw(){
background(bkImg);

if(keyDown("left") && donut.x>100){
  donut.x-=10;
}
if(keyDown("right") && donut.x<1380){
    donut.x+=10;
  }
  if(keyDown("up") && donut.y>400){
    donut.y-=10;
  }
  if(keyDown("down") ){
    donut.y+=10;
  }

  if(donut.scale===0.1){
    g1.visible=true
  }

  spawnKnife();
  spawnChili();
  spawnSprinkles();
  spawnChoco();
  spawnCherry();
  collideChoco();
  collideCherry();
  collideSprinkles();
  collideChilli();
  collideKnife();
drawSprites();
}

function spawnCherry(){
  if(frameCount%120===0){
    var cherry = createSprite(random(100,600),50,20,20)
    cherry.addImage(cherryImg)
    cherry.velocityY=5
    cherry.scale=0.1
    cherryGroup.add(cherry)

  }
}

function spawnChoco(){
  if(frameCount%120===0){
    var choco = createSprite(random(400,900),50,20,20)
    choco.addImage(chocoImg)
    choco.velocityY=7
    choco.scale=0.15
    chocoGroup.add(choco)
  }
}
function spawnSprinkles(){
  if(frameCount%120===0){
    var sprinkles = createSprite(random(500,1300),50,20,20)
    sprinkles.addImage(sprinklesImg)
    sprinkles.velocityY=4
    sprinkles.scale=0.15
    sprinklesGroup.add(sprinkles)

  }
}

function spawnChili(){
  if(frameCount%90===0){
    var chilli = createSprite(random(100,1200),50,20,20)
    chilli.addImage(chilliImg)
    chilli.velocityY=6.5
    chilli.scale=0.2
    chilliGroup.add(chilli)
  }
}

function spawnKnife(){
  if(frameCount%70===0){
    var knife = createSprite(random(300,1500),50,20,20)
    knife.addImage(knifeImg)
    knife.velocityY=6.5
    knife.scale=0.15
    knifeGroup.add(knife)
  }
}

function collideChoco(){
  if(chocoGroup.collide(donut)){
    donut.scale+=0.02 
    chocoGroup.destroyEach()
    }
}

function collideSprinkles(){
  if(sprinklesGroup.collide(donut)){
    donut.scale+=0.02 
    sprinklesGroup.destroyEach()
    }
}

function collideCherry(){
  if(cherryGroup.collide(donut)){
    donut.scale+=0.02 
    cherryGroup.destroyEach()
    }
}

function collideChilli(){
  if(chilliGroup.collide(donut)){
    donut.scale-=0.05
        chilliGroup.destroyEach()
    }
}

function collideKnife(){
  if(knifeGroup.collide(donut)){
    donut.scale-=0.05
    knifeGroup.destroyEach()
    }
}