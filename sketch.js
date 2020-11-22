
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
	block1 = new box(560, 260, 20, 100);
	block2 = new box(740, 260, 20, 100);
	block3 = new box(650, 310, 200, 20);
	paper1 = new paper(100, 310, 20, 20);

	Engine.run(engine);
  
}


function draw() {
	
  background("red");
  
  ground1.display();
  block1.display();
  block2.display();
  block3.display();
  paper1.display();
 
 
}
function keyPressed () {

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:15,y:-15});
	}


}


