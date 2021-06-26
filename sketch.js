const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    boyImg = loadImage("sprites/boy.png")
    treeImg = loadImage("sprites/tree.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    //TREE = new tree(700,320,70,70);

    //BOY =  new boy(150,300,10,10);
    
    MANGO = new mango(660, 60);
    MANGO2 = new mango(600, 70);
	MANGO3 = new mango(600, 130);
    MANGO4 = new mango(660, 110);
	MANGO5 = new mango(720, 130);
	MANGO6 = new mango(660, 170);



    STONE = new stone (50,300);

    chain = new slingShot(STONE.body, {x:250,y:250});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    image(boyImg,200,175,200,300);
    image(treeImg, 500,10,300,400);
    //box1.display();
    //box2.display();
    ground.display();
    //pig1.display();
   
    //box3.display();
    //box4.display();
    //pig3.display();

    //box5.display();
    //TREE.display();
    STONE.display();
    chain.display();   
    //BOY.display(); 
    MANGO.display();
    MANGO2.display();
    MANGO3.display();
    MANGO4.display();
    MANGO5.display();
    MANGO6.display();
    detectcollision(STONE, MANGO);
    detectcollision(STONE, MANGO2);
    detectcollision(STONE, MANGO3);
    detectcollision(STONE, MANGO4);
    detectcollision(STONE, MANGO5);
    detectcollision(STONE, MANGO6);

}

function mouseDragged(){
    Matter.Body.setPosition(STONE.body,{x: mouseX, y: mouseY})
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(STONE.body,{x:235,y:420,chain});
        chain.attach(STONE.body);
    }
}

function detectcollision(s,m){
    mangoposition = m.body.position;
    stoneposition = s.body.position;
    var distance = dist(stoneposition.x,stoneposition.y,mangoposition.x,mangoposition.y);
    if(distance < 100){
        Matter.Body.setStatic(m.body,false);
    }
}