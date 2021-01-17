const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var polygonimg,polygon

function preload(){
    polygonimg = loadImage("polygon.png")
}

function setup() {
	createCanvas(900, 400);

	engine = Engine.create();
    world = engine.world;
    
    ground=new Ground(450,height,900,40)

    //1st pyramid
    baseBlock=new Ground(390,300,250,10);
    //layer1
    block1=new Boxcyan(300,275,30,40);
    block2=new Boxcyan(330,275,30,40);
    block3=new Boxcyan(360,275,30,40);
    block4=new Boxcyan(390,275,30,40);
    block5=new Boxcyan(420,275,30,40);
    block6=new Boxcyan(450,275,30,40);
    block7=new Boxcyan(480,275,30,40);
    //layer2
    block8=new Boxp(330,235,30,40);
    block9=new Boxp(360,235,30,40);
    block10=new Boxp(390,235,30,40);
    block11=new Boxp(420,235,30,40);
    block12=new Boxp(450,235,30,40);
    //layer3
    block13=new Boxblue(360,195,30,40);
    block14=new Boxblue(390,195,30,40);
    block15=new Boxblue(420,195,30,40);
    //top
    block16=new Boxgrey(390,155,30,40);

    //2nd pyramid
    baseBlock2=new Ground(700,195,200,10);
    //layer1
    block17=new Boxcyan(640,170,30,40);
    block18=new Boxcyan(670,170,30,40);
    block19=new Boxcyan(700,170,30,40);
    block20=new Boxcyan(730,170,30,40);
    block21=new Boxcyan(760,170,30,40);
    //layer2
    block22=new Boxblue(670,120,30,40);
    block23=new Boxblue(700,120,30,40);
    block24=new Boxblue(730,120,30,40);
    //top
    block25=new Boxp(700,80,30,40);
  
    //pyramid end
    fill("yellow");
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingshot =new Slingshot(this.polygon,{x:100,y:200});
    imageMode(CENTER);
    image(polygonimg,polygon.position.x,polygon.position.y,40,40);


    Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(40,40,40);

  ground.display();
  baseBlock.display();
  baseBlock2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  polygon.display();
  slingshot.display();
  

  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}   