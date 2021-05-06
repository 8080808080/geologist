class Stone{
	constructor(x,y,w,h)
	{
	// assign options to the stone ball

    var options={
        "restitution":0.8,
        "friction":0.9,
        "density":12
    }

		this.x=x;
		this.y=y;
		this.width=w
        this.height=h
		this.body=Bodies.rectangle(this.x, this.y, this.width,this.height, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			
			strokeWeight(4);
			stroke("black");
			fill("grey");
			//draw the ellipse here to display the stone ball
        rectMode(CENTER)
        rect(0,0,this.width,this.height)  
			pop()
	}

}