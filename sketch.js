
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4;
var platform,ground;
var rope1,rope2,rope3,rope4,rop5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	ballDia = 60;
	startBobPositionX=width/2;
	startBobPositionY=height/4+500;

    platform = new Platform(width/2,height/4,width/2,20);
	ground = new Platform(400,590,800,20);

	ball1 = new Ball(startBobPositionX,startBobPositionY);
	ball2 = new Ball(startBobPositionX-ballDia,startBobPositionY);
	ball3 = new Ball(startBobPositionX-ballDia*2,startBobPositionY);
	ball4 = new Ball(startBobPositionX-ballDia*3,startBobPositionY);
	ball5 = new Ball(startBobPositionX-ballDia*4,startBobPositionY);

	rope1 = new Rope(ball1.body,platform.body,ballDia*2,0);
	rope2 = new Rope(ball2.body,platform.body,ballDia,0);
	rope3 = new Rope(ball3.body,platform.body,0,0);
	rope4 = new Rope(ball4.body,platform.body,-ballDia,0);
	rope5 = new Rope(ball5.body,platform.body,-ballDia*2,0);

}


function draw() {
  
  background(0);
  platform.display()
  ground.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-100,y:-50});

  	}
}

