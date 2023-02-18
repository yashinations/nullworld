class sprite{
	curr_frame_index = 0;
	frame_width;
	max_frame_index;
	src_img;
	owner;
	end_call;
	constructor(img_index, owner) {
		this.src_img = art_assets.imgs[img_index].img;
		this.owner = owner;
		console.log(img_index);
		let data = get_image_data(this.src_img);
		this.set_frame_width(data.data);
		//replace this logic
		//this.frame_width = 64;
		//this.max_frame_index = Math.floor(this.src_img.width / this.frame_width);
		//this.curr_frame = new rectangle(0, 0, this.frame_width, this.src_img.height);
	}
	set_frame_width = function(data){
		for(let i = 0; i < data.length; i += 4){
			let curr_pixel_data = new pixel(data[i],data[i+1],data[i+2],data[i+3]);
			let curr_pixel_data_color = get_pixel_color(curr_pixel_data);
			if(curr_pixel_data_color != "#000000"){
			//if(curr_pixel_data_color == "#ff00ff"){
				//the previous number divisible by 4 will always be an integer with pngs
				this.frame_width = Math.floor(i / 4);				
				this.max_frame_index = Math.floor(this.src_img.width / this.frame_width);
				this.curr_frame = new rectangle(0,0,this.frame_width,this.src_img.height);
				break;
				
			}
		}
	}
	next_frame = function(){
		this.curr_frame_index++;
		if(this.curr_frame_index >= this.max_frame_index){
			this.curr_frame_index = 0;
			if(this.end_call){
				this.end_call(this.owner);
			}
		}
	}
}