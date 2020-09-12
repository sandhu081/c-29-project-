class Asteroid {
  constructor(x, y,width,height) {
    var options = {
        restitution:2,
        friction:1.0,
        density:0.5,
        gravity:1000000000.0
    }
    this.body = Bodies.rectangle(x, y, width+20, height+20, options);
    this.width = width;
    this.height = height;
    var numbers = ['1','2','3','4','5','6','7','8'];
    this.num = random(numbers);
    this.image = loadImage("asteroid "+ this.num+".png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,10,0,this.width*4,this.height*3.5);
    console.log(this.body.speed);
    pop();
  }

  
  loop(l){
    Matter.Body.setMass(l.body,0.1);
  if(l.body.position.x>1450 || l.body.position.y<-50 ){
    Matter.Body.setPosition(l.body,{x:-100,y:random(0,200)});
    angleMode(DEGREES)
    Matter.Body.setAngle(l.body,random(90,180));
    var numbers = ['1','2','3','4','5','6','7','8'];
    this.num = random(numbers);
    this.image = loadImage("asteroid "+ this.num+".png");
  }else{
    if(frameCount%2==0){
    Matter.Body.setVelocity(l.body,{x:random(1,7),y:random(-3,3)});
    }
  }
}
};
