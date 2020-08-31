class RedBox extends BaseClass{
    constructor(x,y){
      super(x,y,50,50);
      this.visibility = 255;
    }
    display(){
      fill("red");
      var BoxSpeed = this.body.speed;
      if(BoxSpeed<3){
      super.display();
      }else{
        push();
        World.remove(world,this.body);
        this.visibility = this.visibility - 5;
        tint(255,this.visibility);
        rect(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
      }
    }
    score(){

      if(this.visibility<0 && this.visibility>-10){

        score++;
      }
    }
  }