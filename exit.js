function exit(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.collided = false;
    this.tile = new Image();
	this.tile.src = "imgs/exit.png";
	this.nextLevel = 1;
    this.init = function(){
    }
    this.update = function(){
    }
    this.draw = function(ctx){
        //w and h?
        ctx.drawImage(this.tile,0,0,50, 50, this.x, this.y, this.w,this.h);
    }
    this.isColliding = function(x,y,x2,y2){
        let collided = false;
        if(!(this.x + 12 > x2 || 
           this.x - 12 + this.w < x || 
           this.y +12 > y2 ||
           this.y  - 12 + this.w < y))
        {
            collided = true;
        }
        return collided;
    }
    this.checkCollisions = function(p,x,y,x2,y2){
        if(this.isColliding(x,y,x2,y2)){
            return true;
        }
		return null;
    }
}