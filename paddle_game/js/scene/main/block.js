var Block = function(game, p) {
	var img = game.imageByName('block')
	var o = {
		x: p[0],
		y: p[1],
		w: img.w,
		h: img.h,
		lives: p[2] || 1,
		alive: true,
		img: img.image
	}
	o.kill = function() {
		if (o.alive) {
			o.lives -- ;
		}
		if (o.lives < 1) {
			o.alive = false;
		}
	}
	// 碰撞检测
	o.collide = function(b) {
		return collide(o, b);
	}
	return o;
}