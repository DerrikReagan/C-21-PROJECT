var PLAY = 1;
var END = 0;
var gameState = PLAY;

var space, spaceimg
var rocket, rocketimg
var meteroids, meteroidsimg
var ufo, ufoimg
var robot, robotimg
var diamondsG
var meteroidsGroup
var ufoGroup
var robotGroup



function preload(){
spaceimg=loadImage("space.jpg")
rocketimg=loadImage("rocket.png")
meteroidsimg=loadImage("meteroids.png")
robotimg=loadImage("robot.png")
ufoimg=loadImage("ufo.png")


}

function setup() {
 createCanvas(900, 900)
 //space=createSprite(900,900, 900, 900)
 //space.addImage(spaceimg)
 rocket=createSprite(350, 850, 90, 90)
 rocket.addImage(rocketimg)
 rocket.scale=0.3


 meteroidsGroup=new Group();
 ufoGroup=new Group();
 robotGroup=new Group();

}

function draw() {

 background(spaceimg)

 if(gameState === PLAY){
if (robotGroup.isTouching(rocket)) {
destroy()
}

if (ufoGroup.isTouching(rocket)) {
destroy()

   
   
}

if (meteroidsGroup.isTouching(rocket)) {
destroy()

}
  
    
    
    
   // ufoGroup.destroy()
  
    
    
  //  meteroidsGroup .destroy()

   if (keyDown("right")) {
    rocket.x = rocket.x +5
   }
   if (keyDown("left")) {
  rocket.x = rocket.x-5 ;
   }
  
 }


createMeteroids()
createUfo()
createRobots()
//if (space.y < 100){
 //   space.y = space.height/2;
 // }
  //space.velocityY=-10

 drawSprites()
}
function createMeteroids() {
    if (World.frameCount % 320 == 0) {
  
   var meteroids = createSprite(100,100, 20, 20 )
    meteroids.addImage(meteroidsimg);
    meteroids.scale=0.2;
    meteroids.velocityY = 4;
    meteroids.lifetime = 350;
    meteroidsGroup.add(meteroids);
    meteroids.addImage(meteroidsimg)
   
  }
  }
  function createUfo() {
    if (World.frameCount % 320 == 0) {

   var ufo = createSprite(500,100, 20, 20 )
    ufo.addImage(ufoimg);
    ufo.scale=0.2;
    ufo.velocityY = 6;
    ufo.lifetime = 350;
    ufoGroup.add(ufo);
    ufo.addImage(ufoimg)
  
  }
  }

  function createRobots() {
    if (World.frameCount % 320 == 0) {

   var robot = createSprite(700,100, 20, 20 )
    robot.addImage(robotimg);
    robot.scale=0.2;
    robot.velocityY = 6;
    robot.lifetime = 350;
    robotGroup.add(robot);
    robot.addImage(robotimg)
  }
  }