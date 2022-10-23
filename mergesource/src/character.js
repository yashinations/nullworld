let walk_left = 0;
let walk_right = 1;
let action_left = 2;
let action_right = 3;
class character{
	bounding_boxes;
	hit_boxes = [];
	rect;
	health = 0;	
	sprites = [];
	curr_sprite_index = 0;
	lefted = false;
	righted = false;
	ceilinged = false;
	floored = false;
	gravity = 6;
	prev_coords;
	x_delta = 0;
	verticle_ride = null;
	constructor(x,y,w,h,img_indexes){
		this.rect = new rectangle(x,y,w,h);
		this.prev_coords = new vertex(x,y);
		this.bounding_boxes = new bounding(this);	
		this.set_sprite(img_indexes);
		camera.scope_objects.push(this);
	}
	set_sprite = function(img_indexes){
		for(let iii in img_indexes){
			this.sprites.push(new sprite(img_indexes[iii],this));
		}
	}
	logic_thread = function(that){
		//somehow make self referential, not object specific NO GLOBALS!
		if (that.jumping && that.jump_timer <= that.max_jump_timer) {
			that.rect.y_coord -= that.jump_strength;
			that.jump_timer++;
		}
		if (that.jump_timer >= that.max_jump_timer) {
			that.jump_timer = 0;
			that.jumping = false;
        }
		if (!that.floored && that.verticle_ride == null && !that.jumping) {
			that.prev_coords.y_coord = that.rect.y_coord;
			that.rect.y_coord += that.gravity;
		}
		else if (!that.jumping) {
			if (that.verticle_ride != null) {
				that.rect.y_coord = that.verticle_ride.rect.y_coord - that.rect.height;
			}
			else {
				while ((that.rect.y_coord + that.rect.height) % block_size != 0) {
					--that.rect.y_coord;
				}
			}
		}
		if(that.x_delta != 0){
			that.prev_coords.x_coord = that.rect.x_coord;
			that.rect.x_coord += that.x_delta;	
		}
		that.x_delta = 0;
		that.bounding_boxes.move();
	}	
	move = function(direction){	
		if(direction < 0){
			this.curr_sprite_index = walk_right;
		}
		else{
			this.curr_sprite_index = walk_left;
		}
		//no magic numbers
		if(!((this.lefted && direction < 0) || (this.righted && direction > 0))){
				this.x_delta = direction * 4;
		}
		else{
			this.x_delta = 0;
		}
	}
}