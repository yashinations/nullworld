function vector(x,y){
    this.x = x;
    this.y = y;
}
var start, end;
function slope(){
    this.vectors = new Array();
	this.upward = false;
	//this.back = new Image();
	//this.back.src = "imgs/brick.png"
	this.update = function(p){
        var longestSide = 0;
        var slope = new vector(1,0);
        var firstVector = this.vectors[0];

        for (var v = 1; v < this.vectors.length; v++){
            var distance = Math.sqrt(Math.pow(this.vectors[v].x - firstVector.x, 2) +Math.pow(this.vectors[v].y - firstVector.y, 2));
            if(distance > longestSide){
                longestSide = distance;
                start = firstVector;
                end = this.vectors[v];
                var unhill = (this.vectors[v].y - firstVector.y) / (this.vectors[v].x - firstVector.x);
                slope.x = ((this.vectors[v].x - firstVector.x) / distance);
                slope.y = ((this.vectors[v].y - firstVector.y) / distance);
				if(slope.x > 0){
					this.upward = true;
				}				
				slope.x *=  unhill;
				slope.y *=  unhill;
            }
            var index = v;
            if(index == this.vectors.length - 1 - 1){
                index = 0;    
            }
            firstVector = this.vectors[index];
        }
        
        if(this.checkCollision(start, end, p.x,p.x + p.w,p.y + p.h - 1, p.y + p.h + 1)){
            p.inAir = false;
            p.slope = slope;
        }
        else{
            p.slope.x = 1;
            p.slope.y = 0;
        }
    }
    this.checkCollision = function(s,e,rx,rx2,ry,ry2)
	{
		var l = rx;
		var r = rx2;
		var t = ry;
		var b = ry2;
		return this.isCollided(e.x,e.y,s.x,s.y,l,r,t,b);

	}
	  
	this.checkCollisionBullet = function(rx,rx2,ry,ry2)
	{
		s = start;
		e = end;
		var l = rx;
		var r = rx2;
		var t = ry;
		var b = ry2;
		return this.isCollided(e.x,e.y,s.x,s.y,l,r,t,b);

	}
 
    this.isCollided = function(x0,y0,x1,y1,l,r,t,b)
    {
        var m = (y1-y0) / (x1-x0);
        var c = y0 -(m*x0);
        var top_intersection;
        var bottom_intersection;
        if(m > 0)
        {
           top_intersection = (m*l  + c);
           bottom_intersection = (m*r  + c);
        }
        else
        {
           top_intersection = (m*r  + c);
           bottom_intersection = (m*l  + c);
        }
        var toptrianglepoint;
        var bottomtrianglepoint;
        if(y0<y1)
        {
           toptrianglepoint = y0;
           bottomtrianglepoint = y1;
        }
        else
        {
           toptrianglepoint = y1;
           bottomtrianglepoint = y0;
        }

        var topoverlap;
        var botoverlap;

        topoverlap = (top_intersection>toptrianglepoint ? top_intersection : toptrianglepoint);
        botoverlap = (bottom_intersection<bottomtrianglepoint ? bottom_intersection : bottomtrianglepoint);

        return (topoverlap<botoverlap) && (!((botoverlap<t) || (topoverlap>b)));

    }
    this.draw = function(ctx){
        ctx.beginPath();
        for(v in this.vectors){
            ctx.lineTo(this.vectors[v].x,this.vectors[v].y);
        }
        ctx.closePath();/*
		var pat=ctx.createPattern(this.back,"repeat");
        ctx.fillStyle = pat;
        ctx.fill();
		ctx.strokeStyle = "#37F";
		ctx.lineWidth=1;*/
        ctx.stroke();
    }
}