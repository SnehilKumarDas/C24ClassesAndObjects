class Bird{

    constructor(x,y){

        var options = {

            restitution : 0.8,
            friction : 0.3,
            density : 1
        }

       this.body = Bodies.rectangle(x,y,50,50,options);
       World.add(world,this.body);
       this.width = 50;
       this.height = 50;

}

display(){

  var pos = this.body.position
  pos.x = mouseX;
  pos.y = mouseY;
push();

translate(pos.x,pos.y)
strokeWeight(3)
stroke("yellow")
fill(255)
rectMode(CENTER)
rect(0,0,this.width,this.height);
pop();

}

}