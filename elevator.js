function elevator(x,y,w,h){
    this.x = x;
    this.y = y;
	//temp hardcoded w, h
    this.w = 25;
    this.h = 25;
	this.initial_y = y;
	this.max_y = y + h;
    this.playerStanding = false;
	this.up = false;
    this.sprite = new Image();
	this.sprite.src = "imgs/tile.png";
    this.update = function(p){  
       if(this.up){
		   if (this.y >= this.max_y){
			   this.up = false;
		   }
		   else{
				this.y++;
		   }
       }
       else{
		   if (this.y <= this.initial_y){
			   this.up = true;
		   }
		   else{
			   this.y--;
			   if(this.playerStanding){
				   p.y--;
			   }
		   }
       }	
    }
    this.draw = function(ctx){
       ctx.drawImage(this.sprite,0, 0, this.w, this.h, this.x, this.y, this.w, this.h);
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
        else if(this.isColliding(x + xBuffer,y2 - yBuffer,x2 - xBuffer,y2 + yBuffer)){
            p.inAir = false;
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