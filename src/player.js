let avatar;
class player extends character{
	alive = true;
	init_x;
	init_y;
	jump_strength = 5;
	max_jump_timer = 10;
	jump_timer = 0;
	jumping = false;
	projectile;
	constructor(x,y,w,h,img_indexes){
		super(x, y, w, h, img_indexes);
		this.init_x = x;
		this.init_y = y;
	}
	live = function(){		
		avatar.alive = true;
		this.rect.x_coord = this.init_x;
		this.rect.y_coord = this.init_y;
		this.floored = false;
		camera_scroll_y = 0;
	}
	action() {
		if (this.projectile == null) {
			this.projectile = new projectile();
		}
	}
	logic_thread () {
		super.logic_thread(this);
		//player specific code
		if (this.projectile) {
			if (this.projectile.rect.x_coord < canvas.width + block_size && this.projectile.rect.x_coord > 0 - block_size) {
				this.projectile.move();
			}
			else {
				this.projectile = null;
            }
        }
	}
}