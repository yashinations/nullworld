//global html5 canvas variables
let canvas;
let ctx;
//begin game once all image data is loaded
function init_game(){
	//html5 canvas logic
	canvas = document.getElementById('canvas');;
	ctx = canvas.getContext("2d");		
	//start drawing
	renderer = new renderer_singleton();
	renderer.background = new sprite(8, null);
	renderer.background.frame_width = 500;
	renderer.background.max_frame_index = Math.floor(renderer.background.src_img.width / renderer.background.frame_width);
	renderer.background.curr_frame = new rectangle(0, 0, renderer.background.frame_width, renderer.background.src_img.height);
	//begin game
	let game_obj = new game();
	game_obj.init_singletons();	
}