class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 20
        }
    
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    this.image = loadImage("red.png");
    }
    // attach(body){
    //     this.sling.bodyA = body;
    // }
    
     fall(){
         this.sling.bodyA = null;
     }

    display(){
        image(this.image, 200,10,455,300);
            if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push ();
            stroke(48,22,8);
            line (pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
    
}