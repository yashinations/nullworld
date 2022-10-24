class projectile extends block{
	spr;
	draw_rect;
	velocity = 6;
	constructor()
	{
		let r = new rectangle(avatar.rect.x_coord, avatar.rect.y_coord + (avatar.rect.height / 2) - 16, 32, 32);
		super(r,false);
		this.draw_rect = r;
		this.spr = new sprite(projectileimg, this);
		if (!avatar.facing_left) {
			this.velocity = -6;
        }
	}
	move = function () {
		this.rect.x_coord += this.velocity;
	}
}