class bob{
    constructor(x,y,choice){

        var choice;

        this.body = Bodies.circle(x,y,40,{isStatic:choice});
        World.add(world,this.body);
        
    }
    display(){

        var pos = this.body.position;

        ellipseMode(RADIUS);fill(208,210,209);stroke("black");
        ellipse(pos.x,pos.y,40,40);
    }
}