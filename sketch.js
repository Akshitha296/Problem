const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b1

function setup() {
	createCanvas(600, 500);


	engine = Engine.create();
	world = engine.world;

	b1 = new Bob(100, 400, 20);


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  b1.display();
  background(170, 178, 173);
  
  drawSprites();
 
}



