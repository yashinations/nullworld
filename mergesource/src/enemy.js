class enemy extends character{
	patrol_left = true;
	patrol_right = false;
	turn = false;
	behavior;
	constructor(x,y,w,h,img_indexes){
		super(x,y,w,h,img_indexes);
		let end_call = (function(that){
			if(this.flip){
				that.curr_sprite_index = walk_left;
			}
			else{
				that.curr_sprite_index = walk_right;
			}
			that.behavior = that.patrol;
			that.behavior(that);
			that.rect.width = w;
			avatar.live()
		});
		this.sprites[action_left].end_call = end_call;
		this.sprites[action_right].end_call = end_call;

	}
	logic_thread(that) {
		super.logic_thread(that);
		//enemy specific code
		if (that.behavior === that.patrol && saw) {
			that.behavior = that.follow;
		}
		else if (that.behavior === that.follow && !saw) {
			that.behavior = that.patrol;
		}
		//if (that.behavior === that.patrol) {
		//	that.turn = turn_side || turn_floor;
		//}
		if (collision.overlapping(that.rect, avatar.rect)) {
			that.behavior = obj_in_question.kill;
			that.behavior(that);
		}
	}
	follow = function(that){
		if (avatar.rect.x_coord < that.rect.x_coord){
			that.move(-1);
		}
		else{
			that.move(1);
		}
		let next_call = (function(){that.behavior(that);});
		setTimeout(next_call,100);
	}
	kill = function(that){
		avatar.alive = false;		
		if(!that.flip){
			that.curr_sprite_index = action_right;			
		}
		else{
			that.curr_sprite_index = action_left;
		}
		that.sprites[that.curr_sprite_index].curr_frame_index = 0;
		that.rect.width *= 1.5;
	}
	patrol = function(that){
		//no magic #'s!
		if(that.turn)
		{
			that.patrol_left = !that.patrol_left;
			that.patrol_right = !that.patrol_right;
		}
		if(that.patrol_left){
			that.move(-1);
		}
		else{
			that.move(1);
		}
		let next_call = (function(){that.behavior(that);});
		setTimeout(next_call,100);
	}
}