var jaxon, jaxon_running, jaxonimg
var path, pathimg
var imaginationline1, imagination1lineimg
var imaginationline2, imagination2lineimg
function preload(){
 var ground
  //pre-load images
pathimg = loadImage("path.png")
jaxon_running = loadAnimation("runner-1.png","runner-2.png")
}

function setup(){
  createCanvas(350,500);
  //create sprites here

path = createSprite(199,250,400,500);
path.addImage("path" ,pathimg);
path.scale = 1;
path.velocityY = 4 ;
jaxon = createSprite(200,250,10,10);
jaxon.addAnimation("running", jaxon_running);
jaxon.scale = 0.1
path.velocityX = 0 ;
imaginationline1 = createSprite(330,380,10,10000)
imaginationline1.visible = false

imaginationline2 = createSprite(70,20,10,10000)
imaginationline2.visible = false

}

function draw() {
  background("white");
  
 
  if (path.y > 500)
 { path.y = height/2;}
jaxon.x = mouseX
jaxon.collide(imaginationline1)
jaxon.collide(imaginationline2)
drawSprites();
}
