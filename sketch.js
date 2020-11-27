
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(390, 690, 820, 20);
	ball1 = new Ball(215,100)


	dustbin1 = new Dustbin(485, 625, 20, 80);
	dustbin2 = new Dustbin(665, 625, 20, 80);
	dustbin3 = new Dustbin(575, 672, 200, 20);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();	 
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ball1.display();
 drawSprites();
 
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce( ball1.body,ball1.body.position,{x:85, y:155});
   


	}
}
