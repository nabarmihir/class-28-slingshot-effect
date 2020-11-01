//create box class extending from baseclass
class Box extends BaseClass {
  //add constructor
  constructor(x, y, width, height){
    super(x,y,width,height);
    //load box image 
    this.image = loadImage("sprites/wood1.png");
  }

};
