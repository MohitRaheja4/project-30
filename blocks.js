class Block {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.4,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibilty=255;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3)
      {
        var pos =this.body.position;
      var angle = this.body.angle;
      push()
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(2);
      stroke(55,55,55);
      rect(0, 0, this.width, this.height);
      pop();
      }
      else
      {
        World.remove(world,this.body);
        push();
      this.visibilty=this.visibility-5;
      tint(255,this.visibilty);
      //rect(0, 0, this.width, this.height);   
      pop();
      }     
      
    }
  };
  