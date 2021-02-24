
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer,ground,sand1,sand2,sand3,sand4,sand5;
var stone,iron,rubber;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);

 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    hammer = new Hammer(100,100);
	ground = new Ground(600,height,1200,20);
  sand1 = new Sand (200,400,3);
	sand2 = new Sand (250,400,3);
	sand3 = new Sand (300,400,3);
	sand4 = new Sand (350,400,3);
	sand5 = new Sand (400,400,3);
	sand6 = new Sand (450,400,3);
	sand7 = new Sand (500,400,3);
	stone = new Stone(500,500);
	iron = new Iron(800,500);
	rubber = new Rubber(700,400,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  hammer.display();
  ground.display();
  stone.display();
  iron.display();
  rubber.display();



  drawSprites();
 
}



