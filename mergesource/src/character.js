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
	facing_left = true;
	velocity = 4;
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
	logic_thread(that){
		//somehow make self referential, not object specific NO GLOBALS!
		if (this.jumping && this.jump_timer <= this.max_jump_timer) {
			this.rect.y_coord -= this.jump_strength;
			this.jump_timer++;
		}
		if (this.jump_timer >= this.max_jump_timer) {
			this.jump_timer = 0;
			this.jumping = false;
        }
		if (!this.floored && this.verticle_ride == null && !this.jumping) {
			this.prev_coords.y_coord = this.rect.y_coord;
			this.rect.y_coord += this.gravity;
		}
		else if (!this.jumping) {
			if (this.verticle_ride != null) {
				this.rect.y_coord = this.verticle_ride.rect.y_coord - this.rect.height;
			}
			else {
				while ((this.rect.y_coord + this.rect.height) % block_size != 0) {
					--this.rect.y_coord;
				}
			}
		}
		if (this.x_delta != 0){
			this.prev_coords.x_coord = this.rect.x_coord;
			this.rect.x_coord += this.x_delta;	
		}
		this.x_delta = 0;
		this.bounding_boxes.move();
	}	
	move = function(direction){	
		if(direction < 0){
			this.curr_sprite_index = walk_right;
			this.facing_left = false;
		}
		else{
			this.curr_sprite_index = walk_left;
			this.facing_left = true;
		}
		if(!((this.lefted && direction < 0) || (this.righted && direction > 0))){
			this.x_delta = this.velocity * direction;
		}
	}
}