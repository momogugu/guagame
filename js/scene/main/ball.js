var Ball = function(game) {
	var img = game.imageByName('ball')
	var o = {
		x: 200,
		y: 100,
		w: img.w,
		h: img.h,
		speedX: 5,
		speedY: 5,
		img: img.image,
		fired: false,
	}
	o.fire = function() {
		o.fired = true;
	}
	o.move = function() {
		if (o.fired) {
			if (o.x < 0 || o.x > 800) {
				o.speedX *= -1;
			}
			if (o.y < 0 || o.y > 500) {
				o.speedY *= -1;
			}
			o.x += o.speedX;
			o.y += o.speedY;
		}
	}
	// 反弹
	o.bounce = function() {
		o.speedY *= -1;
	}
	//
	o.hasPoint = function(x, y) {
		var xIn = x >= o.x && x <= o.x+o.w
		var yIn = y >= o.y && y <= o.y + o.h
		return xIn && yIn
	}
	return o;
}