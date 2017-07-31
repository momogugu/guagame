var Block = function(p) {
	var img = imageFromPath('./images/block.png')
	var o = {
		x: p[0],
		y: p[1],
		lives: p[2] || 1,
		alive: true,
		img: img
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