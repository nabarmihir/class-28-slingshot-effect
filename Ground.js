//create a class for ground
class Ground {
    //add constructor
    constructor(x,y,width,height) {
      //add options
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      //add class to world
      World.add(world, this.body);
    }
    //display the object
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      //add color to ground
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
