class Sand {
    constructor(x, y, r) {
      var options = {
          'restitution':0.01,
          'friction':1,
          'density':10,
          'mass' :1
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
      fill(255);
      strokeWeight(20)
      stroke("#827717")
    ellipse(0,0,this.r,this.r)
      pop();
    }
  };
  