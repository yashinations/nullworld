function door(x,y,w,h,r){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.collided = false;
    //this.tile = new Image();
	//this.tile.src = "imgs/door.png";
    this.reverse = r;
    this.init = function(){
    }
    this.update = function(){
    }
    this.draw = function(ctx){
		ctx.fillRect(this.x,this.y,this.w,this.h);//drawImage(this.tile,0,0,this.w,this.h,this.x,this.y,this.w,this.h);
    }
    this.setCollided = function(p,x,y,x2,y2){
        let xBuffer = 5;
		let yBuffer = 5;
        if(this.isColliding(x + 15,y - yBuffer,x2 - 15,y + yBuffer)){
            p.hitCeiling = true;
        }
        else if(this.isColliding(x2,y + yBuffer,x2 + xBuffer,y2 - yBuffer)){
            p.hitRight = true;
            x = this.x - p.w;
        }
        else if(this.isColliding(x - xBuffer,y + yBuffer,x - 1,y2 - yBuffer)){
            p.hitLeft = true;
            x = this.x + this.w;
        }
        else if(this.isColliding(x + xBuffer,y2 - yBuffer,x2 - xBuffer,y2 + yBuffer)){
            p.inAir = false;
        }
		if(this.isColliding(x + xBuffer,y + yBuffer,x2 - xBuffer,y2 - yBuffer)){
            p.reset();
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
    this.checkCollisions = function(p,x,y,x2,y2){
        if(this.isColliding(x,y,x2,y2)){
            this.setCollided(p,x,y,x2,y2);
        }
    }
}