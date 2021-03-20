class Ball{
    constructor(x,y){
        
        var options ={
            restitution : 1,
            friction :0,
            density:0.8
        }
        this.x = x
        this.y = y
        this.radius = 30
        this.body = Bodies.circle(x,y,this.radius,options)
        World.add(world,this.body)
    }
    display(){
        ellipseMode(RADIUS);
        var pos = this.body.position
        fill("blue")
        ellipse(pos.x,pos.y,this.radius,this.radius)
    }
}