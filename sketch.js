//create objects, engine, world, constraint
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    //load background image
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){

    //create canvas
    var canvas = createCanvas(1200,400);

    //create engine
    engine = Engine.create();

    //add world to engine
    world = engine.world;

    //create a ground and platform
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    //create boxes, pigs, logs and bird
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);
    log3 =  new Log(810,180,300, PI/2);
    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    bird = new Bird(100,100);

     //create slingshot
    slingshot = new SlingShot(bird.body,{x:200,y:100});
}

function draw(){

    //display backgroung image
    background(backgroundImg);

    Engine.update(engine);
    strokeWeight(4);

    // display all the objects(boxes, logs, pigs, bird, slingshot)
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig3.display();
    log3.display();
    box5.display();
    log4.display();
    log5.display();
    bird.display();
    platform.display();
    slingshot.display();

}

//drag bird from set position
function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});

}

//release bird from slingshot
function mouseReleased(){
    slingshot.fly();
}
