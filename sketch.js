const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingshot,stone,ground,ground2,ground3,b1,b2,b2,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14;
var b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;
stone=new polygon(70,250,40,40);
slingshot= new sling(stone.body,{x:60,y:240});
ground=new jameen(width/2,400,width,17);
ground2=new jameen(260,300,209,3);
ground3=new jameen(460, 200,135,3)

//1st 
b1=new Block(182,280,24,30);
b2=new Block(208,280,24,30);
b3=new Block(234,280,24,30);
b4=new Block(260,280,24,30);
b5=new Block(286,280,24,30);
b6=new Block(312,280,24,30);
b7=new Block(338,280,24,30);
//2nd
b8=new Block(208,248,24,30);
b9=new Block(234,248,24,30);
b10=new Block(260,248,24,30);
b11=new Block(286,248,24,30);
b12=new Block(312,248,24,30);
//3rd
b13=new Block(234,216,24,30);
b14=new Block(260,216,24,30);
b15=new Block(286,216,24,30);
//4th
b16=new Block(260,184,24,30);
//5th
b17=new Block(416,180,20,25);
b18=new Block(438,180,20,25);
b19=new Block(460,180,20,25);
b20=new Block(482,180,20,25);
b21=new Block(504,180,20,25);
//6th
b22=new Block(438,155,20,25);
b23=new Block(460,155,20,25);
b24=new Block(482,155,20,25);
//7th
b25=new Block(460,130,20,25);
}

function draw(){
    background(0);
    Engine.update(engine);
     
slingshot.display();
    stone.display();
    ground.display();
   strokeWeight(0);
    text("Drag the hexagon and release it towards the block                press space bar to reattach the polygon ",10,10); 
  

    fill(88,141,124);
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();

    fill(129,75,129)
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();

    fill(102,97,30);
    b13.display();
    b14.display();
    b15.display();

    fill(19,73,113);
    b16.display();

    fill(88,255,98);
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    b21.display();

    fill(234,111,234);
    b22.display();
    b23.display();
    b24.display();

    fill(237,234,107);
    b25.display();

    ground2.display();
    ground3.display();
}

}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
function keyPressed()
{
    if(keyCode===32)
    {
        slingshot.attach(stone.body)
    }

function mouseReleased(){
    slingshot.fly();
}

