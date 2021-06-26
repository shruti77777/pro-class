var PLAY = 1;
var END = 0;
var gameState = PLAY;
var vill,ground;
var diamond , diaimg;
var lead,leadimg;
var villimg,bg,bgimg;
var score=0;
var bgi;
function preload(){
leadimg = loadImage("gamefl.png")
bgimg = loadImage("bg.jpg")
villimg = loadImage("yu.png")
diaimg = loadImage("dia.png")
}
function setup() {
  createCanvas(1600,700);
  bgi = createSprite(800,300,3000,20);
  lead = createSprite(256,530,20,40);
  ground = createSprite(800,670,1600,20);
  
lead.addImage(leadimg);
bgi.addImage(bgimg);

bgi.scale = 5;
bgi.velocityX = -2;
lead.scale = 0.6;
ground.visible = false;
}

function draw() {
 background("white");
 // console.log(lead.y);
  text("Score: "+ score, 500,50);
  console.log(bgi.x)
if(bgi.x<400){
 bgi.x = 600;
}
 if(keyDown("space" )&& lead.y >= 546)
 {
   lead.velocityY = -24;
 }
 lead.velocityY = lead.velocityY + 0.8;
 lead.collide(ground);
spawnmonster();
spawndia();

  drawSprites();
}
function spawnmonster(){
  if (frameCount % 90 === 0) {

vill = createSprite(1600,580,20,40);

vill.velocityX = -7;
vill.addImage("vil",villimg);
vill.scale = 0.5;
  }
}
function spawndia(){
  if (frameCount % 120 === 0) {
  diamond = createSprite(1600,100,20,20);
  diamond.y = Math.round(random(200,400));
  diamond.velocityX = -4;
  diamond.addImage(diaimg);
  diamond.scale = 0.4
  }
}