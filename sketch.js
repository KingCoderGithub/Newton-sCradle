const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball, ball2, ball3, ball4, ball5;
var rope, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var ball_options = {
		restitution: 1,
		density:0.8
	}

	ball = Bodies.circle(320, 380, 20, ball_options);
	World.add(world, ball);
	ball2 = Bodies.circle(360, 380, 20, ball_options);
	World.add(world, ball2);
	ball3 = Bodies.circle(400, 380, 20, ball_options);
	World.add(world, ball3);
	ball4 = Bodies.circle(440, 380, 20, ball_options);
	World.add(world, ball4);
	ball5 = Bodies.circle(480, 380, 20, ball_options);
	World.add(world, ball5);


	rope = new Rope(ball, roof, -80, 0);
    rope2 = new Rope(ball2, roof, -40, 0);
	rope3 = new Rope(ball3, roof, 0, 0);
	rope4 = new Rope(ball4, roof, 40, 0);
	rope5 = new Rope(ball5, roof, 80, 0);


	Engine.run(engine);

	rectMode(CENTER);
	ellipseMode(RADIUS);
  
}

function draw() {
  
  background("#99004d");
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  ellipse(ball.position.x, ball.position.y, 40, 40);
  ellipse(ball2.position.x, ball2.position.y, 40, 40);
  ellipse(ball3.position.x, ball3.position.y, 40, 40);
  ellipse(ball4.position.x, ball4.position.y, 40, 40);
  ellipse(ball5.position.x, ball5.position.y, 40, 40);

  

  //call display() to show ropes here
  

  //roof.display();
  rect(roof.position.x,roof.position.y,230,20);

  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
	if(keyCode===RIGHT_ARROW)
  {
	Matter.Body.applyForce(ball, ball.position, {x:-50, y:-45});
  }
}


