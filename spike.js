function spike(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.sprite = new Image();
    this.sprite.src = "imgs/spike.png";
    this.init = function(){
    }
    this.update = function(){
    }
	this.isColliding = function(x,y,x2,y2){
        let collided = false;
        let buffer = 15;
        if(!(this.x > x2 - buffer|| 
           this.x + this.w < x + buffer || 
           this.y > y2 - buffer ||
           this.y + this.w < y + buffer))
        {
            collided = true;
        }
        return collided;
    }
    this.checkCollisions = function(p,x1,y1,x2,y2,l){
        if(this.isColliding(p.x + 1,p.y + 1,p.x + p.w - 1,p.y + p.h - 1)){
			if(p.constructor.name == "player" || p.constructor.name == "twin" ){
				p.dead = true;
				p.alive = false;
			}
        }
		return false;
    }
	//let degrees  = 0;
    this.draw = function(ctx){
		/*ctx.save();
		ctx.translate(this.x + (this.w / 2), this.y + (this.h / 2));
		ctx.rotate(degrees*Math.PI/180);
		
		ctx.translate(-this.x  - (this.w / 2), -this.y - (this.h / 2));*/
		ctx.drawImage(this.sprite,0,0,this.sprite.width,this.sprite.height,this.x,this.y,this.w,this.h);
		/*ctx.restore();
		
		degrees += 8;
		if(degrees >= 360){
			degrees = 0;
		}*/
    }
}