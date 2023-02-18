let tile_map = [];
class level_singleton{
	current_index = 0;
	left_input_only = false;
	constructor(i) {
		this.left_input_only = false;
		this.current_index = i;
		let current_level_map = level_map[this.current_index];
		for (let o in current_level_map)
		{
			//solid block, by default
			let x = (o % (level_width)) * block_size;
			let y = parseInt(o / (level_width)) * block_size;
			let r = new rectangle(x,y,block_size,block_size);
			if(current_level_map[o] == 'X'){
				let b = new block(r,true);
			}
			else{
				//let b = new block(r,false);
			}
			//add enemies
			//E
			if(current_level_map[o] == 'P'){
				let indexs = [art_assets.find("player", "move", "left"), art_assets.find("player", "move", "right"), art_assets.find("player", "move", "idle")];
				avatar = new player(x,y - 15,25,50,indexs);
			}
			if (current_level_map[o] == '^') {
				let b = new hazard(new rectangle(x, y + 10, block_size, block_size), true);
				b.behavior = b.impale;
			}
			if (current_level_map[o] == '>') {
				let b = new exit(new rectangle(x, y, block_size, block_size), true);
			}
			if (current_level_map[o] == 'L') {
				this.left_input_only = true;
			}
		}
		if (this.left_input_only) {
			renderer.background = new sprite(art_assets.find("background", "background", "left"), null);
		}
		else {
			renderer.background = new sprite(art_assets.find("background", "background", "background"), null);
		}
		renderer.background.frame_width = 500;
		renderer.background.max_frame_index = Math.floor(renderer.background.src_img.width / renderer.background.frame_width);
		renderer.background.curr_frame = new rectangle(0, 0, renderer.background.frame_width, renderer.background.src_img.height);
		for (let o in current_level_map) {
			let x = (o % (level_width)) * block_size;
			let y = parseInt(o / (level_width)) * block_size;
			let r = new rectangle(x, y, block_size, block_size);
			let lastx = x;
			if (current_level_map[o] == 'H') {
				let b = new horizontal_platform(r, true);
				b.left_max = lastx;
				while (current_level_map[o] != 'X') {
					lastx = (o % (level_width)) * block_size;
					o++;
				}
				b.right_max = lastx;
			}
		}
		for (let o in current_level_map) {
			let x = (o % (level_width)) * block_size;
			let y = parseInt(o / (level_width)) * block_size;
			let r = new rectangle(x, y, block_size, block_size);
			if (current_level_map[o] == 'V') {
				let b = new vertical_platform(r, true);
				b.left_max = y;
				let x_index = (o % (level_width));
				while (!(current_level_map[o] == 'X' && (o % (level_width)) == x_index)) {
					y = parseInt(o / (level_width)) * block_size;
					o++;
				}
				b.right_max = y - block_size;
			}
		}
	}
}
let level;