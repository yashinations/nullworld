let tile_map = [];
class level_singleton{
	constructor (){
		for (let o in level_map)
		{
			//solid block, by default
			let x = (o % (level_width)) * block_size;
			let y = parseInt(o / (level_width)) * block_size;
			let r = new rectangle(x,y,block_size,block_size);
			if(level_map[o] == 'X'){
				let b = new block(r,true);
			}
			else{
				let b = new block(r,false);
			}
			//add enemies
			if(level_map[o] == 'E'){
				let indexs = [enemy_walk_left,enemy_walk_right,enemy_kill_left,enemy_kill_right];
				let e = new enemy((o % (level_width)) * block_size,parseInt(o / (level_width)) * block_size,31,63,indexs);
				e.behavior = e.patrol;
				e.behavior(e);
			}
			//add user			
			if(level_map[o] == 'P'){
				let indexs = [avatar_walk_left,avatar_walk_right];
				avatar = new player(x,y - 15,32,32,indexs);
			}
			if (level_map[o] == '^') {
				let b = new hazard(new rectangle(x, y, block_size * 2, block_size), true);
				b.behavior = b.impale;
			}
		}
		for (let o in level_map) {
			let x = (o % (level_width)) * block_size;
			let y = parseInt(o / (level_width)) * block_size;
			let r = new rectangle(x, y, block_size, block_size);
			let lastx = x;
			if (level_map[o] == 'H') {
				let b = new horizontal_platform(r, true);
				b.left_max = lastx;
				while (level_map[o] != 'X') {
					lastx = (o % (level_width)) * block_size;
					o++;
				}
				b.right_max = lastx;
			}
		}
		for (let o in level_map) {
			let x = (o % (level_width)) * block_size;
			let y = parseInt(o / (level_width)) * block_size;
			let r = new rectangle(x, y, block_size, block_size);
			if (level_map[o] == 'V') {
				let b = new vertical_platform(r, true);
				b.left_max = y;
				let x_index = (o % (level_width));
				while (!(level_map[o] == 'X' && (o % (level_width)) == x_index)) {
					y = parseInt(o / (level_width)) * block_size;
					o++;
				}
				b.right_max = y - block_size;
			}
		}
	}
}
let level;