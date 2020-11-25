
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	bg = loadImage ("1.jpg");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world
	ground = new Ground(width/2,670,1600,10)
	paper = new Paper (200,450,70)
	dustbinL = new Dustbin (1200,550)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  paper.display();
  ground.display();
  dustbinL.display();
  drawSprites();
 
}
function keyPressed(){
	 if(keyCode === UP_ARROW) { 
		 Matter.Body.applyForce(paper.body, paper.body.position, {x:130, y: -250})
		 }
		 }


