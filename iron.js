class Iron {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':0.3,
          'mass':15
      }
      this.body = Bodies.rectangle(x, y, 100, 100, options);
      this.width = 100;
      this.height = 100;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("black");
      strokeWeight(5)
      stroke("black")
      rect(0, 0, this.width, this.height);
      pop();
    }
  };