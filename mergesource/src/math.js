class yash_math_override{
	pad_zeros = function(s,z){
		let zeros = z - s.length;
		if(zeros > 0){
			let zero_str = "0";
			for(let i = 1; i < zeros; i++){
				zero_str += "0"
			}
			return zero_str + s;
		}
		return s;
	}
	line_line = function(x1,y1,x2,y2,x3,y3,x4,y4) {
	  let uA = ((x4-x3)*(y1-y3) - (y4-y3)*(x1-x3)) / ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1));
	  let uB = ((x2-x1)*(y1-y3) - (y2-y1)*(x1-x3)) / ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1));
	  return (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1);
	}
	rect_line = function(r,lx1,ly1,lx2,ly2){
	  //left side
	  //start point
	  let rx11 = r.x_coord;
	  let ry11 = r.y_coord;
	  //end point
	  let rx12 = r.x_coord;
	  let ry12 = r.y_coord + block_size;
	  //right side
	  //start point
	  let rx21 = r.x_coord + block_size;
	  let ry21 = r.y_coord;
	  //end point
	  let rx22 = r.x_coord + block_size;
	  let ry22 = r.y_coord + block_size;	
	  //top side
	  //start point
	  let rx31 = r.x_coord;
	  let ry31 = r.y_coord;
	  //end point
	  let rx32 = r.x_coord + block_size;
	  let ry32 = r.y_coord;
	  //bottom side
	  //start point
	  let rx41 = r.x_coord;
	  let ry41 = r.y_coord + block_size;
	  //end point
	  let rx42 = r.x_coord + block_size;
	  let ry42 = r.y_coord + block_size;
	  //check if line l intersects one of the sides of r
	  let left_side = yash_math.line_line(lx1,ly1,lx2,ly2,rx11,ry11,rx12,ry12);
	  let right_side = yash_math.line_line(lx1,ly1,lx2,ly2,rx21,ry21,rx22,ry22);
	  let top_side = yash_math.line_line(lx1,ly1,lx2,ly2,rx31,ry31,rx32,ry32);
	  let bottom_side = yash_math.line_line(lx1,ly1,lx2,ly2,rx41,ry41,rx42,ry42);
	  return (left_side || right_side || top_side || bottom_side)
	}
}
let yash_math = new yash_math_override();