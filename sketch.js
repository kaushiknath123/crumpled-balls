
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(800, 350);


	engine = Engine.create();
	world = engine.world;

	ground1 = new ground(400, 330, 900, 20);
	dustbin = new dust(625, 260, 200, 200);
	block2 = new box(560, 260, 20, 100);
	block3 = new box(690, 260, 20, 100);
	block4 = new box(625, 310, 150, 20);
	paper1 = new paper(100, 300, 20, 20);

	Engine.run(engine);
  
}


function draw() {
	
  background("red");
  
 
  paper1.display();
  ground1.display();
  block4.display();
  block2.display();
  block3.display();
  
  dustbin.display();
 
 
}
function keyPressed () {

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:82,y:-85});
	}


}


