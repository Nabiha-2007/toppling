class Rubber {
    constructor(x, y, r) {
      var options = {
          'restitution':1,
          'friction':1,
          'density':0.3,
          'mass':3
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body = Bodies.circle(this.x, this.y, (this.r-20)/2,options);
      World.add(world, this.body);
    }
    display(){
      var sandpos =this.body.position;
      push();
      translate(sandpos.x, sandpos.y);
      rectMode(CENTER);
      fill("#4DB6AC");
      ellipse(0,0,this.r,this.r)
      pop();
    }
  };
  