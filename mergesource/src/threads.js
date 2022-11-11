function can_see(seer, seen) {
	let sight_height_limit = 50;
	let sight_limit = 200;
	let lx1 = seen.rect.x_coord;
	let ly1 = seen.rect.y_coord + (seen.rect.height / 2);
	let lx2 = seer.rect.x_coord;
	let ly2 = seer.rect.y_coord + (seer.rect.height / 2);
	let a = lx1 - lx2;
	let b = ly1 - ly2;
	if (b < sight_height_limit) {
		let c2 = Math.pow(a, 2) + Math.pow(b, 2);
		let c = Math.sqrt(c2);
		if (c < sight_limit) {
			for (o in tile_map) {
				let current_block = tile_map[o];
				if (yash_math.rect_line(current_block.rect, lx1, ly1, lx2, ly2)) {
					return false;
				}
			}
			return true;
		}
	}
	return false;
}
function collision_sides_check(actor, current_block) {
	let hit_object = { floored: false, lefted: false, righted: false, turn_side: false, turn_floor: false, grounded: false };
	if (collision.overlapping(actor.bounding_boxes.boxes[left_index], current_block.rect)) {
		hit_object.lefted = true;
		hit_object.turn_side = true;
	}
	if (collision.overlapping(actor.bounding_boxes.boxes[right_index], current_block.rect)) {
		hit_object.righted = true;
		hit_object.turn_side = true;
	}
	if (collision.overlapping(actor.bounding_boxes.boxes[floor_index], current_block.rect)) {
		hit_object.floored = true;
		if (actor === avatar && current_block.behavior == null) {
			hit_object.grounded = true;
		}
	}
	if (collision.overlapping(actor.bounding_boxes.boxes[future_left_floor_index], current_block.rect)) {
		if (actor.patrol_left) {
			hit_object.turn_floor = false;
		}
	}
	if (collision.overlapping(actor.bounding_boxes.boxes[future_right_floor_index], current_block.rect)) {
		if (obj_in_question.patrol_right) {
			hit_object.turn_floor = false;
		}
	}

	if (collision.overlapping(actor.bounding_boxes.boxes[center_core_index], current_block.rect)) {
		actor.alive = false;
		actor.live();
	}
	return hit_object;
}
let collision_thread =
function(){
	if (avatar.alive) {
		for (q in keyboard_input.queue) {
			keyboard_input.trigger(keyboard_input.queue[q].key, keyboard_input.queue[q].trigger);
		}	
		
		for (let s in camera.scope_objects){
			let obj_in_question = camera.scope_objects[s];
			//make better make all this better

			//let saw = false;
			//let kill = false;
			//saw = can_see(avatar, obj_in_question);
			let hit_object;
			for (o in tile_map){
				let current_block = tile_map[o];
				if(!current_block.solid){
					continue;
				}				
				hit_object = collision_sides_check(obj_in_question, current_block);
			}
			if(obj_in_question.behavior === obj_in_question.patrol){
				obj_in_question.turn = turn_side || turn_floor;
			}
			obj_in_question.lefted = hit_object.lefted;
			obj_in_question.righted = hit_object.righted;
			obj_in_question.floored = hit_object.floored;
			obj_in_question.grounded = hit_object.grounded;
			obj_in_question.logic_thread(obj_in_question);
			//obj_in_question.bounding_boxes.move();
		}
	}
	for (o in tile_map) {
		let current_block = tile_map[o];
		if (current_block) {
			if (current_block.behavior) {
				current_block.behavior(current_block);
			}
		}
	}
	setTimeout(collision_thread,18);
}