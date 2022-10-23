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
	//begin game
	let game_obj = new game();
	game_obj.init_singletons();	
}