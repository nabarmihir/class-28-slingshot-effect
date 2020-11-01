//create bird class extended from base class
class Bird extends BaseClass {
  constructor(x,y){
    //give width and height to bird
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }
  //display image
  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
