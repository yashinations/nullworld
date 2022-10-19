class keyboard_input_singleton{
	left = function(){
		avatar.move(-1);
	}
	right = function(){
		avatar.move(1);
	}
	up = function(){
		//this just catches input, but i imagine the avatar cranes their next up and the camera peers up
		avatar.look(-1);
	}
	duck = function(){
		//avatar squishes down
		avatar.duck();
	}
	jump = function(){
		if (avatar.floored && !avatar.jump_held) {
			avatar.jumping = true;
		}
		avatar.jump_hold = true;
		avatar.jump_held = true;
	}
	action = function(){
		avatar.action();
	}
	secondary_action = function(){
		avatar.secondary_action();
	}
	//triggers
	get_keyboard_object = function(k){
		if(k){
			if(keyboard_input.key_map[k]){
				return keyboard_input.key_map[k];				
			}
		}
		return null;
	}
	trigger = function(k,t){
		let ko = this.get_keyboard_object(k);
		if(ko){
			if(ko[t]){
				ko.action();
			}
		}
	}
	click_trigger = function(e){
		keyboard_input.trigger(e.key,"click");
	}
	release_trigger = function(e){
		keyboard_input.trigger(e.key,"release");
	}
	hold_trigger = function(e){
		keyboard_input.trigger(e.key,"hold");
	}
	key_map = {
		"a": { action: this.left, click: false, release:false, hold: true},
		"d": { action: this.right, click: false, release:false, hold: true},
		"w":{action:this.up, click:true, release:false, hold: true},
		"s":{action:this.duck, click:true, release:false, hold: true},
		" ": { action: this.jump, click: false, release: false, hold: true},
		"\n": { action: this.action, click: true, release: false, hold: false }
	};
}
let keyboard_input;
