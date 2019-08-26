class Ball{
  constructor(x,y,dx,dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.clr = color(random(255),random(255),random(255))
  }
  
  run(){//use this so you dont have to run all of these for each ball
    var audio = document.getElementById("audio_file"); 
    this.checkEdges();
    this.update();
    this.render();
  }
  checkEdges(){//check if touching edge, if so reverse direction
    // var audio = new Audio('audio_file.mp3');
    if(this.x<0){
      this.dx = this.dx*-1;//left

    }
    if(this.x>width){
      this.dx = this.dx*-1;//right
      audio.play();
    }
    if(this.y<0){
      this.dy = this.dy*-1;//bottom
      audio.play();
    }
    if(this.y>height){
      this.dy = this.dy*-1;//top
      playing;
    }


  }
  update(){//update location
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
  }
  render(){//render one frame
    fill(this.clr);
    ellipse(this.x,this.y,50,50)
  }
  playing(){
    audio.play();
  }
}
