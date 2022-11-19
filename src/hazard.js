class hazard extends block{
	spr;
	draw_rect;
	constructor(r,s)
	{
		super(r,s);		
		this.draw_rect = r;
		this.spr = new sprite(6,this);
	}
	impale = function(){
		if(collision.overlapping(avatar.bounding_boxes.boxes[floor_index],this.rect)){
			avatar.alive = false;
			avatar.live();
		}
	}
}