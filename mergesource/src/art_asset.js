let avatar_walk_left = 0;
let avatar_walk_right = 1;
let tile = 2;
let spike = 3;
let exit = 4;
let background = 5;
let enemy_kill_right = 6;
let img_srcs = [
	"imgs/player_walk.png",
	"imgs/player_walk_flip.png",
	"imgs/tile.png",
	"imgs/spike.png",
	"imgs/exit.png",
	"imgs/background.png"
]
class art_asset_singleton{
	imgs = [];
	load_init = function(str_array){
		this.load(str_array,0);
	}
	//functions for recursively loading images
	load = function(str_array, s){
		if (s < str_array.length){
			let i = new Image();
			i.src = str_array[s]
			art_assets.imgs.push(i);
			i.onload = (function(){art_assets.load(str_array,s + 1)});
		}
		else{
			init_game()
		}
	}
}
let art_assets = new art_asset_singleton();