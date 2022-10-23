let avatar;
class player extends character{
	alive = true;
	init_x;
	init_y;
	jump_strength = 5;
	max_jump_timer = 10;
	jump_timer = 0;
	jumping = false;
	constructor(x,y,w,h,img_indexes){
		super(x,y,w,h,img_indexes);
		this.init_x = x;
		this.init_y = y;
	}
	live = function(){		
		avatar.alive = true;
		avatar.rect.x_coord = avatar.init_x;
		avatar.rect.y_coord = avatar.init_y;
		avatar.floored = false;
		camera_scroll_y = 0;
	}
}