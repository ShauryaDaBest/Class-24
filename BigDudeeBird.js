class YeetingBird{
    constructor(x,y){
        var options = {
            restitution:1.5,
            friction:1.0,
            density:0.5,
        }
        this.Body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50
        this.height = 50
        World.add(world,this.body)
        
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height)
        pop()
    }
    }