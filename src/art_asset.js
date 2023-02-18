class art_asset_singleton{
	imgs = [
		{ class_name: "player", type_name: "move", sub_type: "idle", location: "imgs/player_idle.png" },
		{ class_name: "player", type_name: "move", sub_type: "right", location: "imgs/player_walk_flip.png" },
		{ class_name: "player", type_name: "move", sub_type: "left", location: "imgs/player_walk.png" },
		{ class_name: "projectile", type_name: "projectile", subtype: "right", location: "imgs/projectile.png" },
		{ class_name: "projectile", type_name: "projectile", subtype: "left", location: "imgs/projectileright.png" },
		{ class_name: "block", type_name: "block", sub_type: "0", location: "imgs/tile1.png" },
		{ class_name: "block", type_name: "block", sub_type: "90", location: "imgs/tile2.png" },
		{ class_name: "block", type_name: "block", sub_type: "180", location: "imgs/tile3.png" },
		{ class_name: "block", type_name: "block", sub_type: "270", location: "imgs/tile4.png" },
		{ class_name: "spike", type_name: "spike", sub_type: "spike", location: "imgs/spike.png" },
		{ class_name: "exit", type_name: "exit", sub_type: "exit", location: "imgs/exit.png" },
		{ class_name: "flipswitch", type_name: "flipswitch", sub_type: "flipswitch", location: "imgs/flipswitch.png" },
		{ class_name: "background", type_name: "background", sub_type: "background", location: "imgs/background.png" },
		{ class_name: "background", type_name: "background", sub_type: "left", location: "imgs/backgroundleft.png" }
	];
	load_init = function(){
		this.load(0);
	}
	//function for recursively loading images
	load = function (current_index){
		if (current_index < this.imgs.length){
			let i = new Image();
			i.src = this.imgs[current_index].location;
			this.imgs[current_index].img = i;
			i.onload = (function () { art_assets.load(current_index + 1)});
		}
		else{
			init_game()
		}
	}
	find = function (class_name, type_name, sub_type) {
		let i;
		for (i in this.imgs) {
			if (this.imgs[i].class_name == class_name &&
				this.imgs[i].type_name == type_name &&
				this.imgs[i].sub_type == sub_type) {
				break;
            }
		}
		return i;
    }
}
let art_assets = new art_asset_singleton();