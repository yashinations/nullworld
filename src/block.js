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
		this.spr = new sprite(parseInt(art_assets.find("block", "block", "0")) + (parseInt((Math.random() * 100) % 3)), this);
	}
}

class flipblock extends block {
	spr;
	draw_rect;
	constructor(r, s) {
		super(r, s);
		this.draw_rect = r;
		this.spr = new sprite(parseInt(art_assets.find("flipswitch", "flipswitch", "flipswitch")), this);
	}
}