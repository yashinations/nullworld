function button(t,x,y,e){
	this.w = 200;
	this.titleCenter = 200;
	this.x = x;
	this.y = y;
	this.t = t;
	this.isClicked = function(x1,y1){
		let h = 26;
		return (x1 >= this.x - this.titleCenter && y1 >= this.y - h && x1 <= this.x - this.titleCenter + this.w && y1 <= this.y);
	}
	this.draw= function(ctx){
		this.w = (ctx.measureText(this.t)).width;
		this.titleCenter = (ctx.measureText(this.t)).width;
		this.titleCenter /= 2;
		ctx.fillText(this.t,x - this.titleCenter,y);
	}
	this.e = e;
}