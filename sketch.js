const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box, chain, ground, bgImage, crane;

function preload() {
  bgImage = loadImage("d1.jpg");
  crane = loadImage("red.png");
}

function setup() {
  createCanvas(600,400);
  engine = Engine.create();
  world = engine.world;

  box = new Box(200,300, 40, 40);
  chain = new SlingShot(box.body, {x: 300, y: 50});
  ground = new Ground(400,350,800,15);
}

function draw() {
  background(bgImage);  
  Engine.run(engine);

  chain.display();
  box.display();
  ground.display();

  drawSprites();
}

function mouseReleased(){
  slingshot.fly();
 // gameState = "launched";
}

function mouseDragged(){
  //if (gameState!=="launched"){
    Matter.Body.setPosition(box.body, {x: mouseX , y: mouseY});
  }


 function keyPressed(){
   if( keyCode === 32){
     chain.fall();
   }
 }