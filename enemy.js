function enemy(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
	this.startX = x;
	this.startY = y;
    this.inAir = true;
    this.hitCeiling = false;
    this.hitLeft = false;
    this.hitRight = false;
    this.left = false;
    this.gravity = 2;
    this.vel = 0.5;
    this.prevX = x;
    this.prevY = y;
    this.moved = false;
    this.hit = false;
	//this.spriteX = 0;
	this.slope = new vector(1,0);
    this.init = function(){
    }
    this.move = function(){
        this.moved = true;
        if(this.hitLeft){
            this.left = false;
			//this.currImg = this.img;
        }
        else if(this.hitRight){
            this.left = true;
			//this.currImg = this.imgFlip;
        }
        if(this.left){
            this.x -= this.vel;
        }
        else{
            this.x += this.vel;
        }    
    }
    this.update = function(){
        this.prevY = this.y;
        /*if(this.shot){
            this.inAir = true;
            this.moved = false;
        }*/
        if(!this.inAir){
            this.move();
        }
        else{
            if(!this.moved){
                this.y += 5;
            }
            else{
                this.left = !this.left;
                if(this.left){
                    this.x -= this.vel;
                }
                else{
                    this.x += this.vel;
                }
            }
        }
    }
	this.isColliding = function(x,y,x2,y2){
        let collided = false;
        if(!(this.x > x2 || 
           this.x + this.w < x || 
           this.y > y2 ||
           this.y + this.h < y))
        {
            collided = true;
        }
        return collided;
    }
    this.checkCollision = function(p){
        if(this.isColliding(p.x + 15,p.y,p.x + p.w - 15,p.y + p.h)){
            return true;
        }
		return false;
    }
	this.animate = function(){	
	
	}
    this.draw = function(ctx){
		ctx.fillRect(this.x,this.y,this.w,this.h);//drawImage(this.currImg,this.spriteX,0,40,this.currImg.height,this.x,this.y,this.w,this.h);
    }
}