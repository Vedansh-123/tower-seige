const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    block1=new Block(330,235,30,40)
    block2=new Block(360,235,30,40)
    block3=new Block(390,235,30,40)
    block4=new Block(420,235,30,40)
    block5=new Block(450,235,30,40)

    block6=new Block(360,195,30,40)
    block7=new Block(390,195,30,40)
    block8=new Block(420,195,30,40)

    block9=new Block(390,155,30,40)

    polygon=new Pyramid(200,200,50,50)
    chain1=new SlingShot(polygon.body,{x:200,y:50})
}


function draw(){
    background(0);
    Engine.update(engine);
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    polygon.display()
    chain1.display()
    strokeWeight(4);
}
