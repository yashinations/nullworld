//change to just offsets later?
let ceiling_index = 0;
let left_index = 1;
let floor_index = 2;
let right_index = 3;
let future_left_index = 4;
let future_left_floor_index = 5;
let future_right_index = 6;
let future_right_floor_index = 7;
let center_core_index = 8;
class bounding{
	//array of boxes
	boxes = [];
	owner;
	constructor(obj){
		//set associated game object
		this.owner = obj;
		//hitbox on top
		this.boxes[left_index] = new rectangle(this.owner.rect.x_coord - 5, this.owner.rect.y_coord - 5,1,obj.rect.height);
		this.boxes[right_index] = new rectangle(this.owner.rect.x_coord + 5 + this.owner.rect.width, this.owner.rect.y_coord - 5,1,obj.rect.height);
		this.boxes[floor_index] = new rectangle(this.owner.rect.x_coord + 5, this.owner.rect.y_coord + this.owner.rect.height,obj.rect.width - 10,1);
		// set future falls
		this.boxes[future_left_floor_index] = new rectangle(this.owner.rect.x_coord - 1 + this.owner.rect.height, this.owner.rect.y_coord, 1,1);
		this.boxes[future_right_floor_index] = new rectangle(this.owner.rect.x_coord - 1, this.owner.rect.y_coord + this.owner.rect.heigh, 1, 1);
		this.boxes[center_core_index] = new rectangle(this.owner.rect.x_coord + (this.owner.rect.width / 2) - 1, this.owner.rect.y_coord + (this.owner.rect.height / 2) - 10, 1, 1);
	}
	//more math than necessary
	move(){		
		this.boxes[left_index].x_coord = this.owner.rect.x_coord - 5;
		this.boxes[left_index].y_coord = this.owner.rect.y_coord - 5;
		this.boxes[right_index].x_coord = this.owner.rect.x_coord + 5;
		this.boxes[right_index].y_coord = this.owner.rect.y_coord - 5;
		this.boxes[right_index].x_coord += this.owner.rect.width;
		this.boxes[floor_index].x_coord = this.owner.rect.x_coord + 5;
		this.boxes[floor_index].y_coord = this.owner.rect.y_coord;
		this.boxes[floor_index].y_coord += this.owner.rect.height;
		this.boxes[future_left_floor_index].x_coord = this.owner.rect.x_coord - 1;
		this.boxes[future_left_floor_index].y_coord = this.owner.rect.y_coord;
		this.boxes[future_left_floor_index].y_coord += this.owner.rect.height;
		this.boxes[future_right_floor_index].x_coord = this.owner.rect.x_coord + this.owner.rect.width;
		this.boxes[future_right_floor_index].y_coord = this.owner.rect.y_coord;
		this.boxes[future_right_floor_index].y_coord += this.owner.rect.height;
		this.boxes[center_core_index].x_coord = this.owner.rect.x_coord + (this.owner.rect.width / 2) - 1;
		this.boxes[center_core_index].y_coord = this.owner.rect.y_coord + (this.owner.rect.height / 2) - 1;
	}
}