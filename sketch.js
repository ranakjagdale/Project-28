var packageBody,ground
var dust,ball,launcher;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	dust = new Dustbin();
	ball = new Paper(100,350, 70);
	ground = new Ground(600,680,1200,40);
	launcher = new Launcher(ball.body,{x:100, y: 300});
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(200);
  ground.display();
  dust.display();
  ball.display();
  launcher.display();
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball.body,ball.body.position,{x:125,y:-73});
	}
}

function mouseDragged()
{
	Matter.Body.setPosition(ball.body,{x: mouseX, y: mouseY})	
}

function mouseReleased()
{
	launcher.fly();
}



