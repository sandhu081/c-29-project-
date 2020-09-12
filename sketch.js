const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var gs=1;
var slingIMG,BG,BKimg;

function preload() {
    slingIMG = loadImage("slingshot.png");
    BG = loadImage("space.jpg");
    BKimg = loadImage("solar panel.png");
}

function setup(){
    var canvas = createCanvas(1360,625);
    engine = Engine.create();
    world = engine.world;

    ball = new Ball (200,100,50,50);
    slingshot = new SlingShot (ball.body,{x:600,y:460});

    b1 = new Asteroid (0,0,50,50);
    b2 = new Asteroid (502,300,20,30);
    b3 = new Asteroid (100,100,10,20);
    b4 = new Asteroid (902,160,30,50);
    b5 = new Asteroid (300,50,60,40);
    b6 = new Asteroid (700,200,20,50);
    b7 = new Asteroid (1100,50,30,10);
    b8 = new Asteroid (1300,250,20,40);

    p1 = new Planet (1000,250,50,50,3);
    p2 = new Planet (500,150,70,50,2);
    p3 = new Planet (180,350,70,50,1);

}

function draw(){
    background(BG);
    Engine.update(engine); 

    image(BKimg,0,425,1360,200);
    image(slingIMG,520,400,150,250);

    ball.display();
    slingshot.display();

    b1.display();
    b1.loop(b1);
    b2.display();
    b2.loop(b2);
    b3.display();
    b3.loop(b3);
    b4.display();
    b4.loop(b4);
    b5.display();
    b5.loop(b5);
    b6.display();
    b6.loop(b6);
    b7.display();
    b7.loop(b7);
    b8.display();
    b8.loop(b8);

    p1.display();
    p2.display();
    p3.display();

    if(ball.body.position.x>1560 || ball.body.position.x<-100 || ball.body.position.y>825 || ball.body.position.y<-200){
        Matter.Body.setPosition(ball.body,{x:600,y:400});
        slingshot.rejoin(ball.body);
        gs=1;
    }
    textSize(50);
    text("Pull and Launch the Striker to Knock the Asteroids out",100,535);

}

function mouseDragged(){
    if(gs===1){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
    }
}

function mouseReleased(){
    slingshot.shoot();
    gs=2
}

