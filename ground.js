class Ground{
    constructor(x, y){
        this.body = Bodies.rectangle(x, y, 200,15);
        World.add(world, this.body);
    }

    display(){
        push ();
        rectMode(CENTER);
        rect(400,350,800,15);
        pop ();
    }
}