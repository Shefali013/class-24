const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var box1,box2,pig1,pig3,log1,log3,log5,log6;
var engine, world;
var ground;
function setup() {
 var canvas = createCanvas(1200,400);
 engine = Engine.create();
 world = engine.world;
 ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
 log1 = new Log(810,260,300,PI/2);
 bird = new Bird(100,100);

// console.log();
}

function draw() {
  background(100);  
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  pig1.display();
  log1.display();
  bird.display();
}