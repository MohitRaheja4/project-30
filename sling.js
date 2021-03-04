class sling{
    constructor(bodyA,pointB)
    {
        var op={
             bodyA:bodyA,
            pointB:pointB,
            stiffness:0.7,
            length:30     
        }
        this.pointB=pointB;
        this.chain=Constraint.create(op)
        World.add(world,this.chain);
    }
     
    

    fly()
    {
        this.chain.bodyA=null;
    }
attach(body){
        this.chain.bodyA = body;
    }
    display()
    {
        if(this.chain.bodyA)
        {
            var pointA=this.chain.bodyA.position;
            var pointB=this.pointB;
            stroke("grey");
            strokeWeight(1);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            
        }
    }
}
