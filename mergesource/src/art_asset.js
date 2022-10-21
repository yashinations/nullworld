let avatar_walk_left = 0;
let avatar_walk_right = 1;
let tile1 = 2;
let tile2 = 3;
let tile3 = 4;
let tile4 = 5;
let spike = 6;
let exit = 7;
let background = 8;
let enemy_kill_right = 9;
let img_srcs = [
	"imgs/player_walk.png",
	"imgs/player_walk_flip.png",
	"imgs/tile1.png",
	"imgs/tile2.png",
	"imgs/tile3.png",
	"imgs/tile4.png",
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