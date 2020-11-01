//create a baseclass
class BaseClass{
  //add constuctor
    constructor(x, y, width, height, angle) {
        var options = {
          //options
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        //create a rectangle body
        this.body = Bodies.rectangle(x, y, width, height, options);
        //name width
        this.width = width;
        //name height
        this.height = height;
        //load image of base
        this.image = loadImage("sprites/base.png");
        //add this body to world
        World.add(world, this.body);
      }

      //display this body
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}