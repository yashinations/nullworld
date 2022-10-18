class rectangle{
	x_coord;
	y_coord;
	width;
	height;
	constructor(x,y,w,h){
		this.x_coord = x;
		this.y_coord = y;
		this.width = w;
		this.height = h;
	}
	//returns sum of both rectangles
	add_rectangle(r){
		let return_rect = new rectangle(this.x_coord + r.x_coord, this.y_coord + r.y_coord,this.width + r.width, this.height + r.height);
		return return_rect;
	}
}