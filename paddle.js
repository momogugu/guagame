var Paddle = function() {
	var img = imageFromPath('./paddle.png')
	var o = {
		x: 400,
		y: 400,
		speed: 10,
		img: img
	}
	o.move = function(x) {
		if (x < 0) {
			x = 0;
		} else if (x > 800-o.img.width) {
			x = 800-o.img.width;
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
		return collide(o, b) || collide(b, o);
	}
	return o;
}