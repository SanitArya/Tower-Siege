class Slingshot{

    constructor(bodyA,pointB){
    
        var options = {
    
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.slingshot = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.slingshot);
    
    }
    display(){

        if(this.slingshot.bodyA != null){
        var posA = this.slingshot.bodyA.position;
        var posB = this.pointB;
    
        push();
        stroke(48,22,8);
        if(posA.x<220){
        strokeWeight(10);
        line(posA.x-20,posA.y,posB.x-10,posB.y);
        line(posA.x+20,posA.y,posB.x+30,posB.y-3);
       
        }
        else{
            strokeWeight(5);
            line(posA.x+25,posA.y,posB.x-10,posB.y);
            line(posA.x+25,posA.y,posB.x+30,posB.y-3);
           
    
        }
        pop();
    }
    }
    fly(){
        this.slingshot.bodyA = null;
    }
    attach(bodyA){

        this.slingshot.bodyA = bodyA;  
        }
    }
 
    