class Bin {
    constructor(x, y) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y,200, 20, options);
      this.body1 = Bodies.rectangle(x+100, y-50,20, 100, options);
      this.body2 = Bodies.rectangle(x-100, y-50,20, 100, options);
      this.body.image=loadImage("dustbingreen.png");
      World.add(world, this.body);
      World.add(world, this.body1);
      World.add(world, this.body2);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER)
      image(this.image, 0, 0, 20, 20);
      pop();

      var pos1 =this.body1.position;
      var angle1 = this.body1.angle;
      push();
      translate(pos1.x, pos1.y);
      rotate(angle1);
      rectMode(CENTER);
      rect(0, 0,20, 100);
      fill("green");
      pop();

      var pos2 =this.body2.position;
      var angle2 = this.body2.angle;
      push();
      translate(pos2.x, pos2.y);
      rotate(angle2);
      rectMode(CENTER);
      rect(0, 0,20, 100);
      fill("green");
      pop();
    }
  };