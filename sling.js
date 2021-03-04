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
     attach(body,bodyA){
        this.chain.bodyA = body;
    }
    

    fly()
    {
        this.chain.bodyA=null;
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
