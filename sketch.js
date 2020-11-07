// Namespacing modules from Matter.js library
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var a1,a2,a3,a4,a5,a6,ground;

function setup() {
  createCanvas(1200,400);
  // Create the engine
  engine= Engine.create();
  world=engine.world;

  //  x position of the right most box
 var boxXPosition = 740;
 // create new box objects with 50 px of width and 50 px of height
  a1 = new Box(boxXPosition, 300, 50, 50); 
  a2 = new Box(boxXPosition-50, 300, 50, 50);
  a3 = new Box(boxXPosition-100, 300, 50, 50);
  a4 = new Box(boxXPosition-150, 300, 50, 50);
  a5 = new Box(boxXPosition-200, 300, 50, 50);
  a6 = new Box(boxXPosition-250, 300, 50, 50);
  a7 = new Box(boxXPosition-300, 300, 50, 50);
  // create a new ground object
  ground=new Ground(600,325,425,20);
}

function draw() {
  // update the Matter.js engine
  Engine.update(engine);
  background("yellow");  
  a1.display();
  a2.display();
  a3.display();
  a4.display();
  a5.display();
  a6.display();
  a7.display();
  ground.display();
  drawSprites();
}