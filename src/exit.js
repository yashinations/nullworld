class exit extends block{
    collided = false;
	nextLevel = 1;
    constructor(r,s){
        super(r, s);
        this.draw_rect = r;
        this.spr = new sprite(parseInt(art_assets.find("exit", "exit", "exit")), this);
    }
    advance = function () {
        let current_index = level.current_index + 1;
        if (current_index >= level_map.length) {
            current_index = 0;
        }
        tile_map = [];
        camera.scope_objects = [];
        level = new level_singleton(current_index);
    }
	behavior = function (that) {
        if (collision.overlapping(avatar.rect, that.rect))
            that.advance();
		}
}