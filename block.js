function block(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.collided = false;
    this.tile = new Image();
	this.tile.src = "imgs/tile.png";
	this.currFade = 0;
	this.fadeSpeed = 1;
    this.init = function(){
    }
    this.update = function(){
    }
    this.draw = function(ctx){
        ctx.drawImage(this.tile, this.x,this.y,this.w,this.h);
    }
    this.setCollided = function(obj,x,y,x2,y2){
        let xBuffer = 5;
		let yBuffer = 5;
		if(obj.dead){
			return;
		}
        if(this.isColliding(x + 15,y - yBuffer,x2 - 15,y + yBuffer)){
            obj.hitCeiling = true;
            //p.floating = false;
            let yDiff = this.y + this.h - y;
            if(yDiff > 25){
                obj.alive = false;
				obj.dead = true;
            }
            obj.y = this.y + this.h;
        }
        else if(this.isColliding(x2,y + yBuffer,x2 + xBuffer,y2 - yBuffer)){
            obj.hitRight = true;
            obj.x = this.x - obj.w;
        }
        else if(this.isColliding(x - xBuffer,y + yBuffer,x - 1,y2 - yBuffer)){
            obj.hitLeft = true;
            obj.x = this.x + this.w;
        }
        else if(this.isColliding(x + xBuffer,y2 - yBuffer,x2 - xBuffer,y2 + yBuffer)){
            obj.inAir = false;
        }
    }
    this.isColliding = function(x,y,x2,y2){
        let collided = false;
        if(!(this.x > x2 || 
           this.x + this.w < x || 
           this.y > y2 ||
           this.y + this.w < y))
        {
            collided = true;
        }
        return collided;
    }
    this.checkCollisions = function(obj,x,y,x2,y2){
		
        if(this.isColliding(x,y,x2,y2)){
            this.setCollided(obj,x,y,x2,y2);
        }
    }
}