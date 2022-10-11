function flipswitch(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.hit = false;
	this.prev_flip = false;
    //this.currImage = new Image();
    //this.spriteX = false;
    this.init = function(){
    }
    this.update = function(l){
		if(this.hit && this.prev_flip != l.flip){
			l.flip = !l.flip;
			this.prev_flip = l.flip;
		}
		else if(!this.hit){
			this.prev_flip = !l.flip;
		}
    }
	this.setCollided = function(obj,x,y,x2,y2){
		//placeholder flag trigger for opening door objects
        this.hit = true;
    }
    this.isColliding = function(x,y,x2,y2){
        var collided = false;
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
		this.hit = false;
		if(this.isColliding(x,y,x2,y2)){
            this.setCollided(obj,x,y,x2,y2);
        }
    }
    this.draw = function(ctx){
        ctx.fillRect(this.x,this.y,this.w,this.h);//drawImage(this.currImage,this.spriteX,0,this.w,this.currImage.height,this.x,this.y,this.w,this.h);
    }
}