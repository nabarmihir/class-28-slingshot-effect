//create log class extending from base class
class Log extends BaseClass{
  //add constructor
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    //load log image from sprites
    this.image = loadImage("sprites/wood2.png");
    
    Matter.Body.setAngle(this.body, angle);
  }
}