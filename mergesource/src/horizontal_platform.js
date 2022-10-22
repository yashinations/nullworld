class horizontal_platform extends block{
	constructor(r,s){
		super(r,s);
	}	
	behavior = function(that)
	{
		if(that.left_max > that.rect.x_coord){
			that.left = false;
			that.right = true;
		}
		else if(that.right_max < that.rect.x_coord){
			that.left = true;
			that.right = false;
		}
		if(that.left){
			that.rect.x_coord -= 2;
		}
		else{
			that.rect.x_coord += 2;
		}
		let avatar_hit_box = avatar.bounding_boxes.boxes[floor_index];
		if ((collision.overlapping(avatar_hit_box, that.rect) && !avatar.grounded) || (collision.overlapping(avatar.rect, that.rect) && !collision.overlapping(avatar_hit_box, that.rect)))
		{
			if(avatar.x_delta == 0){
				if(that.left){
					avatar.x_delta -= 2;
				}
				else{
					avatar.x_delta += 2;
				}
			}
		}
	}
}