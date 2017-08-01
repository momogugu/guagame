var Paddle = function(game) {
	var img = game.imageByName('paddle')
	log(img)
	var o = {
		x: 400,
		y: 400,
		w: img.w,
		h: img.h,
		speed: 10,
		img: img.image
	}
	o.move = function(x) {
		if (x < 0) {
			x = 0;
		} else if (x > 800-o.w) {
			x = 800-o.w;
		}
		o.x = x;
	}
	o.leftMove = function() {
		o.move(o.x - o.speed);
	}
	o.rightMove = function() {
		o.move(o.x + o.speed);
	}
	// 碰撞检测
	o.collide = function(b) {
		return collide(o, b);
	}
	return o;
}