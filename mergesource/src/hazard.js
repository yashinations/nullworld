class hazard extends block{
	spr;
	draw_rect;
	constructor(r,s)
	{
		super(r,s);		
		this.draw_rect = r;
		this.spr = new sprite(art_assets.imgs[2]);
		this.spr.owner = this;
	}
	render(){
		renderer.draw_sprite(ctx,this.spr)
	}
	impale = function(){
		if(collision.overlapping(avatar.bounding_boxes.boxes[floor_index],this.rect)){
			avatar.alive = false;
			avatar.live();
		}
	}
}