
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var roof1, bobObj1, bobObj2, bobObj3, bobObj4, bobObj5;
var rope1,rope2,rope3,rope4,rope5;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof1 = new roof(400,100,600,50);
	bobObj1 = new bob(200,550,100);
	bobObj2 = new bob(300,550,100);
	bobObj3 = new bob(400,550,100);
	bobObj4 = new bob(500,550,100);
	bobObj5 = new bob(600,550,100);
	rope1 = new rope(bobObj1.body,roof1.body,0,0);
	rope2 = new rope(bobObj2.body,roof1.body,0,0);
	rope3 = new rope(bobObj3.body,roof1.body,0,0);
	rope4 = new rope(bobObj4.body,roof1.body,0,0);
	rope5 = new rope(bobObj5.body,roof1.body,0,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");

  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  
  drawSprites();
 
}



