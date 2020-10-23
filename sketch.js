var president,presidentImg,buildings,buildingImg
var gameState=1;
function preload() {
  // body...
  presidentImg = loadImage("images/presidentImg.png");
  buildingImg = loadImage("images/building.png");
}

function setup(){
 createCanvas(1500,1000)
 president = createSprite(100,300,20,20);
 president.addImage("president",presidentImg);
 

}

function draw(){
background(0,0,0);

textSize(15);
fill("white");
if (gameState==1) {
text("Hello kid! I am making you the temporary president of my country.Take well care of this country",100,450);
text("Press space to continue",100,490)
}

if(keyDown("space")){
  president.visible = false;
  gameState = 2;
}
if (gameState==2) {
 for (var i=100;i<900;i=i+100) {
   buildings = createSprite(i,200,20,20)
   buildings.addImage("buildings",buildingImg);
   buildings.scale = 0.5;

 }
 for (var i=100;i<900;i=i+100) {
   buildings = createSprite(i,400,20,20)
   buildings.addImage("buildings",buildingImg);
   buildings.scale = 0.5;

 }
 for (var i=100;i<900;i=i+100) {
   buildings = createSprite(i,600,20,20)
   buildings.addImage("buildings",buildingImg);
   buildings.scale = 0.5;

 }for (var i=100;i<900;i=i+100) {
   buildings = createSprite(i,800,20,20)
   buildings.addImage("buildings",buildingImg);
   buildings.scale = 0.5;
 }
 text("This is the map of yout country",300,100);
 
} 
drawSprites()
}