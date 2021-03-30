
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,circle,engine,world
var bin,bla
function preload()
{
	bla = loadImage("dustbin.png")
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,380,800,15)
  circle=new Circle(100,30,50,30)
  d=new Dustbin(600,300)
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  ground.display()
  //dustbin=createSprite(600,305,150,20)
 // dustbin.addImage(bla)
  //dustbin.scale=0.5

d.display()
  circle.display()

 
  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW)

Matter.Body.applyForce(circle.body,circle.body.position,{x:400,y:-400})
}

