function platform(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
	this.initX = x;
	this.left = false;
    this.playerStanding = false;
	this.hitLeft = false;
	this.hitRight = false;
	this.tile = new Image();
	this.tile.src = "imgs/tile.png";
    this.update = function(p){
	   if(p.pause){
		   return;
	   }
	   if(this.hitLeft){
			this.left = false;
	   }
	   else if(this.hitRight){
		   this.left = true;
	   }
	   if(this.left){
		   this.x--;
	   }
	   else{
		   this.x++;
	   }
	   if(this.playerStanding){
		   if(this.left){
			   p.x--;
		   }
		   else{
			   p.x++;
		   }
	   }
    }
    this.draw = function(ctx){
       ctx.drawImage(this.tile, this.x,this.y,this.w,this.h);
    }
    this.setCollided = function(p,x,y,x2,y2){
        var xBuffer = 5;
		var yBuffer = 5;
        if(this.isColliding(x + xBuffer,y - yBuffer,x2 - xBuffer,y + yBuffer)){
            this.playerStanding = false;
            p.hitCeiling = true;
        }
        else if(this.isColliding(x2,y + yBuffer,x2 + xBuffer,y2 - yBuffer)){
            this.playerStanding = false;
            p.hitRight = true;
            p.x = this.x - p.w;
        }
        else if(this.isColliding(x - xBuffer,y + yBuffer,x - 1,y2 - yBuffer)){
            this.playerStanding = false;
            p.hitLeft = true;
            p.x = this.x + this.w;
        }
        else if(this.isColliding(x - 5,y2 - yBuffer,x2 + 5,y2 + yBuffer)){
			if(this.playerStanding){
				p.inAir = false;
			}
			else{
				p.jumpTimer = p.maxJumpTimer + 1;
			}
            this.playerStanding = true;
        }
        else{
            this.playerStanding = false;
        }
    }
    this.isColliding = function(x,y,x2,y2){
        var collided = false;
        if(!(this.x > x2 || 
           this.x + this.w < x || 
           this.y > y2 ||
           this.y + this.h < y))
        {
            collided = true;
        }
        return collided;
    }
    this.checkCollisions = function(p,x,y,x2,y2){
        if(this.isColliding(x,y,x2,y2)){
            this.setCollided(p,x,y,x2,y2);
        }
        else{
            this.playerStanding = false;
        }
    }
}