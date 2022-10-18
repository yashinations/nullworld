let bounding_types = ["ceiling","left","right","floor"];
class bounding{
	rect;
	owner;
	hit = false;
	curr_type_index;
	constructor(obj,r,bounding_type_index){
		this.owner = obj;
		this.rect = r;
		this.curr_type_index = bounding_type_index;
	}
	contact = function(foreign_rect){
		this.hit = collision.overlapping(this.rect,foreign_rect);
		switch(bounding_types[this.curr_type_index]){
			case "ceiling":
				this.obj.ceilinged = this.hit;
			case "left":
				this.obj.lefted = this.hit;	
			case "right":
				this.obj.righted = this.hit;	
			case "floor":
				this.obj.floored = this.hit;	
		}
	}
}