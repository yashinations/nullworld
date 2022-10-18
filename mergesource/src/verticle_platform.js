class vertical_platform extends block{
	constructor(r,s){
		super(r,s);
	}	
	behavior = function(that)
	{
		if(that.left_max > that.rect.y_coord){
			that.left = false;
			that.right = true;
		}
		else if(that.right_max < that.rect.y_coord){
			that.left = true;
			that.right = false;
		}
		if(that.left){
			that.rect.y_coord -= 0.3;
		}
		else{
			that.rect.y_coord += 0.3;
		}	
		if(collision.overlapping(avatar.bounding_boxes.boxes[ceiling_index],that.rect)){
			avatar.kill();
		}
		else if (collision.overlapping(avatar.bounding_boxes.boxes[floor_index],that.rect) && avatar.floored)
		{			
			avatar.verticle_ride = that;		
		}
		else{
			avatar.verticle_ride = null;
		}
	}
}