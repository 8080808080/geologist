const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var stone,rubber,iron1
var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(100,100);

    rubber=new Rubber(900,450,50)
    iron1=new Iron(300,350, 50,50)
    stone=new Stone(700,320,50,50)
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
   
    iron1.display();
    rubber.display();
    stone.display();
 
}