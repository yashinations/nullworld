class block{
	//drawable area
	rect;
	//collidable area
	bounding_boxes = [];
	//passible property
	solid;
	constructor(r,s){
		this.rect = r;
		//sets if passible
		this.solid = s;
		//add to available blocks
		tile_map.push(this);
		this.spr = new sprite(2 + parseInt((Math.random() * 100) % 4), this);
	}
}

class flipblock extends block {
	spr;
	draw_rect;
	constructor(r, s) {
		super(r, s);
		this.draw_rect = r;
		this.spr = new sprite(6, this);
	}
}