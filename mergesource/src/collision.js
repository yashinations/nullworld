class singleton_collision{
	//two rectagles
	overlapping = function(r0,r1){
		return (
				   r0.x_coord < r1.x_coord + r1.width &&
				   r0.x_coord + r0.width > r1.x_coord &&
				   r0.y_coord < r1.y_coord + r1.height &&
				   r0.y_coord + r0.height > r1.y_coord
				)
	}	
}

let collision;