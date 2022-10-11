var sprite_width = 20;
function player(x,y,w,h){
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
    this.jumping = false;
	this.jumpHold = false;
    this.hitCeiling = false;
    this.floorY = -1;
    this.gravity = 2;
    this.jumpStrength = 1;
	this.jumpTimer = 0;
    this.maxJumpTimer = 40;
	this.prevJumpHold = false;
    this.vel = 1;
    this.prevX = x;
    this.prevY = y;
	this.left = false;
	this.currImg = new Image();
	this.currImg.src = "imgs/player.png";
	this.spriteX =20;
	this.moving = false
    this.alive = true;
    this.slope = new vector(1,0);
	this.spawn = false;
	this.fadeAlpha = 0;
	this.l;
	this.dead = false;
	this.deader = false;
	this.pause = false;
	var that = this;
	this.reset = function(){
		this.dead = true;
	}
	this.respawn = function(){
		if(sfx_on){				
			death.play();
		}
		that = this;
		if(that.l.enemies.length > 0){
			for(e in that.l.enemies){
				if(that.l.enemies[e].startX != undefined && that.l.enemies[e].startY != undefined){
					that.l.enemies[e].x = that.l.enemies[e].startX;
					that.l.enemies[e].y = that.l.enemies[e].startY
					that.l.enemies[e].hit = false;
					that.l.enemies[e].shot = false;
					that.l.enemies[e].moved = false;
					that.l.enemies[e].inAir = false;
				}
			}
		}
		that.l.flip = false;
		that.slope = new vector(1,0);
		for (pl in that.l.platforms){
			that.l.platforms[pl].x = that.l.platforms[pl].initX;
		}
		that.x = that.startX;
		that.y = that.startY + 10;
		that.alive = true;
		//setTimeout(this.disappear,10);
	}
    this.update = function(l,keys){
		if(pause || this.pause || menuBool){
			return;
		}
		if(l.slopes == null){
			this.slope.x = 1;
			this.slope.y = 0;
		}
		if(this.hitLeft && this.hitRight && !this.dead){
			this.reset();
		}
		if(!this.dead && !this.deader){
			this.jumpHold = false;
			var toDelete = "";
			this.moving = false;
			for(k in keys){
				switch (keys[k]){
					case 65:
					//for the purposes of the 2019 global game this mechanic is disabled
					//to represent an unformed thought about returning home
					/*case 37:
						if(!this.hitLeft && !pause){
							if(!this.inAir){
								if(this.slope.y < 0){
									this.vel = 2;
								}
								if(this.slope.y > 0){
									this.vel = 2;
								}							
								this.y -= this.vel * this.slope.y;
								this.vel = this.vel * this.slope.x;
							}
							this.x -= this.vel;
							this.moving = true;
							this.left = true;
						}
						break;*/
					case 32:
						if(!this.inAir && !this.prevJumpHold && !menuBool && !pause){
							this.jumping = true;
							if(sfx_on){				
								jump_sound.play();
							}
						}
						this.jumpHold = true;
						this.prevJumpHold = true;
						break;
					case 68:
					case 39:
						if(!this.hitRight && !pause){
							if(!this.inAir){
								if(this.slope.y < 0){
									this.vel = 2;
								}
								if(this.slope.y > 0){
									this.vel = 2;
								}
								this.y += this.vel * this.slope.y;
								this.vel = this.vel * this.slope.x;
							}
							this.x += this.vel;
							this.moving = true;		
							this.left = false;						
						}
						break;               
				}
			}
			this.prevJumpHold = this.jumpHold;
			if(!this.floating){
				if(this.inAir && !this.jumping){
					this.y += this.gravity;
				}
				else if(this.jumping && !this.hitCeiling && this.jumpTimer <= this.maxJumpTimer && this.jumpHold){
					this.y -= this.jumpStrength;
					this.jumpTimer++;
				}
				else if((this.jumpTimer > this.maxJumpTimer || !this.jumpHold) && !this.hitCeiling){
					this.jumping = false; 
				}
				else if(this.hitCeiling){
				   this.jumping = false; 
				}
				if(!this.inAir){
					this.jumpTimer = 0;
				}
			}
			if(!this.alive){
				this.reset(l,this.startX, this.startY);
				this.alive = true;
			}
		}
		else if(!this.deader){
			if(l.fadeAlpha <= 1){
				l.fadeAlpha += 0.02;
			}
			else{
				this.deader = true;
			}
		}
		else{
			this.respawn();
			l.fadeAlpha -= 0.02;
			if(l.fadeAlpha <= 0){
				this.dead = false;
				this.deader = false;
				l.fadeAlpha = 0;
			}
		}
	}

	this.animate = function(){	
		if(!this.aim && !this.shoot && !pause){
			sprite_width = 20;
			if(!(this.jumping && this.age == 1) && this.age != 3){ 
				this.spriteX += sprite_width;
				if(this.spriteX >= this.currImg.width){
					this.spriteX = 0;
				}		
			}
		}
	}
	var degrees = 0;
	this.deathAnimation = function(ctx){
		
	}
    this.draw = function(ctx){		
		/*if(this.inAir && this.age == 1 && this.jumping){
			if(!this.left){
				this.currImg = this.adultJump;
				this.spriteX = 0;
				
			}
			else{
				this.currImg = this.adultJump_1;
				this.spriteX = 30;
			}
		}
		else if(!pause && this.inAir && this.age == 1 && !this.jumping){
			if(!this.left){
				this.currImg = this.adultJump;
				this.currImg = this.adultJump;
				this.spriteX = 30;
				
			}
			else{
				this.currImg = this.adultJump_1;
				this.spriteX = 0;
			}
		}*/
		var x_offset = 0;
		ctx.drawImage(this.currImg,this.spriteX, 0,this.w, this.h, this.x,this.y,this.w,this.h);//drawImage(this.currImg,this.spriteX,0,sprite_width,this.currImg.height,this.x,this.y + y_offset,this.w,this.h + h_offset);	
    }
}