class exit extends block{
    collided = false;
	nextLevel = 1;
    constructor(r,s){
        super(r, s);
        this.draw_rect = r;
        this.spr = new sprite(7, this);
    }
    advance = function () {
        let current_index = level.current_index + 1;
        if (current_index >= level_map.length) {
            current_index = 0;
        }
        level = new level_singleton(current_index);
    }   
}