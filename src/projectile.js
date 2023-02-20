class projectile extends block{
	spr;
	draw_rect;
	velocity = 8;
	constructor()
	{
		let r = new rectangle(avatar.rect.x_coord, avatar.rect.y_coord, 25, 50);
		super(r,false);
		this.draw_rect = r;
		if (!avatar.facing_left) {
			this.velocity = -this.velocity;
			this.spr = new sprite(art_assets.find("projectile", "projectile", "left"), this);
		}
		else {
			this.spr = new sprite(art_assets.find("projectile", "projectile", "right"), this);
        }
	}
	move = function () {
		this.rect.x_coord += this.velocity;
	}
}