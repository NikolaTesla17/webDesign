class Ball{
  constructor(x,y,dx,dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.clr = color(random(255),random(255),random(255))
    this.shape = Math.floor(Math.random() * 3) + 1;
  }
  run(){//use this so you dont have to run all of these for each ball
    this.checkEdges();
    this.update();
    this.render();
  }
  checkEdges(){//check if touching edge, if so reverse direction
    if(this.x<0){
      this.dx = this.dx*-1;//left
    }
    if(this.x>width){
      this.dx = this.dx*-1;//right
    }
    if(this.y<0){
      this.dy = this.dy*-1;//bottom
    }
    if(this.y>height){
      this.dy = this.dy*-1;//top
    }
  }
  update(){//update location
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;

    this.x2 = this.x+50;
    this.y2 = this.y+50;
    this.x3 = this.x-20;
    this.y3 = this.y-20;
  }
  render(){//render one frame
    if (this.shape == 1){
        ellipse(this.x,this.y,50,50);
        fill(this.clr);
    }
    if (this.shape == 2) {
        triangle(this.x,this.y,this.x2,this.y2,60,60);
        fill(this.clr);
    }
    if (this.shape == 3){
        rect(this.x,this.y,50,50);
        fill(this.clr);
    }
  }
}
