let interval_ms = 100;
let last_interval = new Date();
let camera_scroll_x = 0;
let camera_scroll_y = 0;
//hacky!
let multiplier = 512 / 320;

class renderer_singleton{
	curr_sprites = [];
	background;
	draw_sprite = function(ctx,s){
		//expect horizontal sprites
		ctx.drawImage(s.src_img, s.curr_frame_index * s.frame_width, 0, s.frame_width, s.src_img.height, (s.owner.rect.x_coord * multiplier) - (camera_scroll_x * multiplier),(s.owner.rect.y_coord * multiplier) - (camera_scroll_y * multiplier),s.owner.rect.width * multiplier,s.owner.rect.height * multiplier);
		s.next_frame();
	}
	render = function () {
		//no magic numbers
		camera_scroll_x = avatar.rect.x_coord - parseInt((canvas.width / 2) / 2);
		camera_scroll_y = avatar.rect.y_coord - parseInt((canvas.width / 2) / 2);
		if(((new Date()) - last_interval) >= interval_ms) {
			ctx.clearRect(0,0,canvas.width,canvas.height);		
			ctx.drawImage(renderer.background.src_img, renderer.background.curr_frame_index * renderer.background.frame_width, 0, renderer.background.frame_width, renderer.background.src_img.height, 0, 0, canvas.width, canvas.height);//render pcs and npcs
			renderer.background.next_frame();
			//for (let s in camera.scope_objects){
				//if(camera.scope_objects[s] === avatar && !avatar.alive){
				//	continue;
				//}
				//let curr_obj = camera.scope_objects[s];
			renderer.draw_sprite(ctx, avatar.sprites[avatar.curr_sprite_index]);
			if (avatar.projectile) {
				renderer.draw_sprite(ctx, avatar.projectile.spr);
            }
			//}
			for(let s_itor = 0; s_itor < tile_map.length; s_itor++){
				//make make more sense
				let b = tile_map[s_itor];
				//if(b.solid){
				ctx.drawImage(b.spr.src_img, b.spr.curr_frame_index * b.spr.frame_width, 0, 64, 64, (b.rect.x_coord * multiplier) - (camera_scroll_x * multiplier), (b.rect.y_coord * multiplier) - (camera_scroll_y * multiplier), b.rect.width * multiplier, b.rect.height * multiplier);
				b.spr.next_frame();
				//}
			}
			last_interval = new Date();
		}
		window.requestAnimationFrame(renderer.render)
	}
}
let renderer;
