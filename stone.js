class stone{
  constructor(x, y) {
      var options = {
          'restitution':0,
          'friction':1.0,
          'density':1.2,
          'isStatic':false
      }
      this.image = loadImage("sprites/stone.png");
      this.body = Bodies.rectangle(x, y,50,50,options);
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0,50,50);
      pop();
    }
}