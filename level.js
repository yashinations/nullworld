//20x20
/*
"XXXXXXXXXXXXXXXXXXXX" +
"X000000000000000000X" +
"X000000000000000000X" +
"X000000000000000000X" +
"X000000000000000000X" +
"X000000000000000000X" +
"X000000000000000000X" +	
"X000000000000000000X" +
"X000000000000000000X" +
"X000000000000000000X" +
"X000000000000000000X" +
"X000000000000000000X" +
"X000000000000000000X" +
"X000000000000000000X" +	
"X000000000000000000X" +
"X000000000000000000X" +
"X000000000000000000X" +
"X000000000000000000X" +
"X000000000000000000X" +
"XXXXXXXXXXXXXXXXXXXX"
*/
let exit_sound;// = new Audio("mp3/exit.wav");
let levels = [
	"XXXXXXXXXXXXXXXXXXXX" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +	
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +	
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"XP00000000000000000X" +
	"X00000000000000000>X" +
	"XXXXXXXXXXXXXXXXXXXX",	
	"XXXXXXXXXXXXXXXXXXXX" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +	
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +	
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"XP0000000X000000000X" +
	"X0000000XXX0000000>X" +
	"XXXXXXXXXXXXXXXXXXXX",	
	"XXXXXXXXXXXXXXXXXXXX" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +	
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"XP00000000000000000X" +	
	"X00000000000000000>X" +
	"XXXXXXXXX00XXXXXXXXX" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X^^^^^^^^^^^^^^^^^^X" +
	"XXXXXXXXXXXXXXXXXXXX",
	"XXXXXXXXXXXXXXXXXXXX" +
	"XP00000000000000000X" +
	"X000000000000000000X" +
	"XXX0000000000000000X" +
	"XXX0000000000000000X" +
	"XXXXX00000000000000X" +
	"XXXXX00000000000000X" +	
	"XXXXXXX000000000000X" +
	"XXXXXXX000000000000X" +	
	"XXXXXXXXX0000000000X" +
	"XXXXXXXXX0000000000X" +
	"XXXXXXXXXXX00000000X" +
	"XXXXXXXXXXX00000000X" +
	"XXXXXXXXXXXXX000000X" +	
	"XXXXXXXXXXXXX000000X" +
	"XXXXXXXXXXXXXXX0000X" +
	"XXXXXXXXXXXXXXX0000X" +
	"XXXXXXXXXXXXXXXXX00X" +
	"XXXXXXXXXXXXXXXXX0>X" +
	"XXXXXXXXXXXXXXXXXXXX",
	"XXXXXXXXXXXXXXXXXXXX" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +	
	"X000000000000000000X" +
	"XP00000000000000000X" +
	"X000000000000000000X" +
	"X00000000000000000>X" +
	"XXXXX0000m00000XXXXX" +
	"X000000000000000000X" +
	"X000000000000000000X" +	
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X^^^^^^^^^^^^^^^^^^X" +
	"XXXXXXXXXXXXXXXXXXXX",
	"XXXXXXXXXXXXXXXXXXXX" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +	
	"X000000000000000000X" +
	"X00000000000000000>X" +
	"X000000009XXXXXXXXXX" +
	"X000000000X00000000X" +
	"X000000000X00000000X" +
	"X000000000X00000000X" +
	"X000000000X00000000X" +
	"X000000000X00000000X" +	
	"XP00000000X00000000X" +
	"X000000000X00000000X" +
	"XXXXXXXXX0X00000000X" +
	"X000000000X00000000X" +
	"X^^^^^^^^^X00000000X" +
	"XXXXXXXXXXXXXXXXXXXX",
	"XXXXXXXXXXXXXXXXXXXX" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +	
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000007XXXXX0000X" +
	"X000000000X00000000X" +
	"X000000000X00000000X" +
	"X000000000X00000000X" +
	"X000000000X00000000X" +
	"XP00000000X00000000X" +	
	"X000000000X0000000mX" +
	"XXXXXXXXX0X>0000000X" +
	"XXXXXXXXXXXXXXXXXXXX",
	//level when player must navigate into narrow mid air passage way by falling	
	"XXXXXXXXXXXXXXXXXXXX" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000006000000X" +	
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000080000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X00000000000000XXXXX" +
	"X000000000000000000X" +	
	"X00000000000000000>X" +
	"X000000000X0000XXXXX" +
	"X0000000X0X00000000X" +
	"XP0000X0X0X00000000X" +
	"X000X^X^X^X^^^^^^^^X" +
	"XXXXXXXXXXXXXXXXXXXX",
	//level where player must jump into path of side-moving platform
	"XXXXXXXXXXXXXXXXXXXX" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +	
	"X000000000000000000X" +
	"X000000000000000000X" +		
	"X000000000000000000X" +
	"X>00000000000000000X" +
	"X000000000000000000X" +
	"X000000000m00000000X" +	
	"X000000000000000X00X" +
	"X0000X0000000mXXX00X" +	
	"X006XX0000000000000X" +
	"X000000000000000000X" +
	"X000000000000000000X" +
	"XP00000000000000000X" +	
	"X000000000000000000X" +
	"X000000000000000000X" +	
	"XXXXXXXXXXXXXXXXXXXX"
	
];
	
function level(){
    this.blocks;
	this.interval = 600;
	this.levelIndex = 0;
	this.spriteX = 0;
    this.flip = false;
    this.slopes = null;
	this.platforms = new Array();
	this.timeCount = 0;
	this.fadeAlpha = 0;
	this.fading = false;
    this.init = function(interval, p, ctx) {
		this.fadeAlpha = 0;
		p.pause = false;
		this.fading = false;
		if(this.levelIndex < levels.length){
			this.init2(interval,p, ctx);
		}
		else{
			menuBool = true;
		}
	}
    this.init2 = function(interval, p, ctx) {
		if(this.levelIndex < levels.length){
			//localStorage.setItem("last_completed_level",this.levelIndex);
			this.platforms = new Array();
			let blockCount = levels[this.levelIndex].length;
			let blockSize = 25;
			let rowCount = 20;
			this.enemies = new Array();
			this.trees = new Array();
			this.blocks = new Array();
			this.flip = false;
			this.slopes = null;
			//p.bullets = [null,null,null,null,null];
			for(let i = 0; i < blockCount; i++){
				if(levels[this.levelIndex][i] == 'X'){
					let b = new block((i % rowCount) * blockSize,parseInt(i / rowCount) * blockSize, blockSize, blockSize);   
					this.blocks[this.blocks.length] = b;
				}				
				else if(levels[this.levelIndex][i] == 'F'){
					this.blocks[this.blocks.length] = new flipswitch((i % rowCount) * blockSize,parseInt(i / rowCount) * blockSize, blockSize, blockSize);    
					this.blocks[this.blocks.length] = new flipswitch((i % rowCount) * blockSize,parseInt(i / rowCount) * blockSize, blockSize, blockSize);    
				}				
				else if(levels[this.levelIndex][i] == 'D'){
					this.blocks[this.blocks.length] = new door((i % rowCount) * blockSize,parseInt(i / rowCount) * blockSize, blockSize, blockSize, false);    
				}
				else if(levels[this.levelIndex][i] == 'R'){
					this.blocks[this.blocks.length] = new door((i % rowCount) * blockSize,parseInt(i / rowCount) * blockSize, blockSize, blockSize, true);    
				}
				else if(levels[this.levelIndex][i] == '>'){
					this.exit = new exit((i % rowCount) * blockSize,parseInt(i / rowCount) * blockSize, blockSize, blockSize);  
					//let last_completed_level = localStorage.getItem("last_completed_level")
					//if(last_completed_level != null && last_completed_level != undefined){
					//	this.exit.nextLevel = parseInt(last_completed_level) + 1;
					//}
					//else{
					this.exit.nextLevel = this.levelIndex + 1;	
					if (this.exit.nextLevel >= levels.length){
						this.exit.nextLevel = 0;
					}
					//}
				}
				else if(levels[this.levelIndex][i] == 'E'){
					this.enemies[this.enemies.length] = new enemy((i % rowCount) * blockSize,parseInt(i / rowCount) * blockSize, 20, 40); 
					this.initEnemies = new Array();
					for(e in this.enemies){
						this.initEnemies.push(this.enemies[e]);
					}
				}
				else if(levels[this.levelIndex][i] == 'P'){
					p.x = ((i % rowCount) * blockSize) + 1;
					p.y = (parseInt(i / rowCount) * blockSize) + 1;
					p.startX = p.x;
					p.startY = p.y;
					p.l = this;
				}
				else if(levels[this.levelIndex][i] == '^'){
					this.blocks[this.blocks.length] = new spike((i % rowCount) * blockSize,parseInt(i / rowCount) * blockSize, blockSize, blockSize);    
				}
				else if(levels[this.levelIndex][i] == 'm'){
					this.platforms[this.platforms.length] = new platform((i % rowCount) * blockSize,parseInt(i / rowCount) * blockSize, blockSize, blockSize);    
				}
				else if(levels[this.levelIndex][i] == 's'){
					if(this.slopes == null){
						this.slopes = new slope();
					} 
					this.slopes.vectors[this.slopes.vectors.length] = new vector(((i % rowCount) * blockSize),(parseInt(i / rowCount) * blockSize) + blockSize);
					if((this.levelIndex == 18 && (i % rowCount) != 1) || (this.levelIndex == 21 && (i % rowCount) != 2)){
						let b = new levelBlock((i % rowCount) * blockSize,parseInt(i / rowCount) * blockSize, blockSize, blockSize);   
						this.blocks[this.blocks.length] = b;
					}
				}
				else if(!isNaN(parseInt(levels[this.levelIndex][i]))){
					let height = parseInt(levels[this.levelIndex][i]);
					if(height > 0){
						this.trees[this.trees.length] = new elevator((i % rowCount) * blockSize,parseInt(i / rowCount) * blockSize, blockSize, blockSize * height);
					}				
				}
			}
		}
		else{
			menuBool = true;
			menu_index = 4;
		}
	}
    this.update = function(p){
		if(this.levelIndex >= levels.length){
			menuBool = true;
			menu_index = 4;
			return;
		}
		if(p.deader)
		{
			return;
		}
        let buffer = 50;
        this.isCollision(p,this.blocks);
		let exited = false
		if(this.exit != null){
			exited = this.exit.checkCollisions(p,p.x, p.y, p.x + p.w, p.y + p.h);				
			if(exited != null && this.twin == null){
				if(this.fadeAlpha < 1){
					if(sfx_on){
						exit_sound.play();
					}
					this.fading = true;
					this.fadeAlpha += 0.01;
					p.pause = true;
				}
				else if(this.levelIndex < levels.length){
					this.levelIndex = this.exit.nextLevel;
					this.init(33,p);
				}
			}
		}
        for (t in this.trees){
            this.trees[t].update(p);
        }
		for (e in this.enemies){
			if(!this.fading){
				if(this.enemies[e].shot){
					this.enemies[e].update();   
				}
				else{
					this.isCollision(this.enemies[e],this.blocks);
					this.enemies[e].update();
					if(!this.enemies[e].hit){
						let hit = this.enemies[e].checkCollision(p);

						let twinHit = false;
						if(this.twin != null){
							twinHit = this.enemies[e].checkCollision(this.twin);
						}
						if(hit || twinHit){
							p.reset(this, p.startX, p.startY);
							break;
						}
					}
				}
			}
		}
        /*for (b in p.bullets){
        	if(p.bullets[b] != null){
	            let hit = p.bullets[b].checkCollision(this);
				if(hit){
					p.bullets[b].hit = true;
				}
				if(this.evilTwin != null){
					if(!(p.bullets[b].x > this.evilTwin.x + this.evilTwin.w || 
					   p.bullets[b].x + p.bullets[b].w < this.evilTwin.x || 
					   p.bullets[b].y > this.evilTwin.y + this.evilTwin.h ||
					   p.bullets[b].y + p.bullets[b].h < this.evilTwin.y)){
							p.bullets[b].hit = true;
					   }
				}
	            for (e in this.enemies){
	                let shot = this.enemies[e].checkCollision(p.bullets[b]);
	                if(shot && !p.bullets[b].hit){
	                    this.enemies[e].shot = true;
	                    p.bullets[b].hit = true;
						if(sfx_on){
							enemy_die.play();
						}
	                }
	            }
	        }
        }*/
		
		for (pl in this.platforms){
			this.isCollision(this.platforms[pl], this.blocks);
			this.platforms[pl].checkCollisions(p,p.x,p.y,p.x + p.w, p.y + p.h);
			this.platforms[pl].update(p);
		}
    }
    this.isCollision = function(p,blocks){
        p.inAir = true;
        p.hitCeiling = false;        
        p.hitLeft = false;           
        p.hitRight = false;
        for(b in blocks){
			if(blocks[b].constructor.name == "door"){
				if((this.flip && !blocks[b].reverse) || (!this.flip && blocks[b].reverse)){
					continue;
				}
            }
            blocks[b].checkCollisions(p,p.x, p.y, p.x + p.w, p.y + p.h)
			blocks[b].update(this);
        }
        for (t in this.trees){
			this.trees[t].checkCollisions(p,p.x, p.y, p.x + p.w, p.y + p.h);
		}
        if(this.slopes != null){
            this.slopes.update(p);
        }
    }
    this.draw = function(ctx){		
		ctx.globalAlpha = 1;	
		for(b in this.blocks){
	        if(this.blocks[b].constructor.name == "door"){
				if((this.flip && !this.blocks[b].reverse) || (!this.flip && this.blocks[b].reverse)){
					ctx.globalAlpha = 0.2;
				}
			}
           	this.blocks[b].draw(ctx);
			ctx.globalAlpha = 1;			
		}
		//hack
		if(this.exit != null){
			this.exit.draw(ctx);
		}
		for (e in this.enemies){
			this.enemies[e].draw(ctx);
		}
		for (t in this.trees){
			this.trees[t].draw(ctx);
		}
        if(this.slopes != null){
            this.slopes.draw(ctx);
        }
		for (pl in this.platforms){
			this.platforms[pl].draw(ctx);
		}
		ctx.globalAlpha  = this.fadeAlpha;
		ctx.fillStyle = "#000000";
		ctx.fillRect(0,0,500,500);
		ctx.globalAlpha  = 1;
    }
    this.getBlocksInRange = function(x,y,x2,y2){
        let selectBlocks = new Array();
        let selectBlocksCount = 0;		
        for(b in this.blocks){
            if(this.blocks[b].x >= x && this.blocks[b].y >= y && this.blocks[b].x + this.blocks[b].w <= x2 && this.blocks[b].y + this.blocks[b].h <= y2){
                selectBlocks[selectBlocksCount] = this.blocks[b];
                selectBlocksCount++;
            }
        }
        return selectBlocks;
    }
}