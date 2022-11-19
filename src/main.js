class game{
	//curr = instanciated singular
	//player = avatar, user
	//level = avatar's environment
	init_singletons = function(){
		//make into loop
		keyboard_input = new keyboard_input_singleton();
		//special case of adding key board triggers
		document.addEventListener('keypress', keyboard_input.click_trigger, false);
		document.addEventListener('keyup', keyboard_input.release_trigger, false);
		document.addEventListener('keydown', keyboard_input.hold_trigger, false);
		collision = new singleton_collision();
		//moving temporarily
		level = new level_singleton(0);
		//put \/ this somewhere else
		window.requestAnimationFrame(renderer.render);
		setTimeout(collision_thread,18);
	}
}