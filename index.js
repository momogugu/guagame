var console = console.log.bind(console);

var imageFromPath = function(path) {
	var img = new Image();
	img.src = path;
	return img;
}

var Paddle = function() {
	var img = imageFromPath('./paddle.png')
	var o = {
		x: 400,
		y: 300,
		speed: 10,
		img: img
	}
	o.leftMove = function() {
		o.x -= o.speed;
	}
	o.rightMove = function() {
		o.x += o.speed;
	}
	// 碰撞检测
	o.collide = function(b) {
		if (b.y+b.img.height>o.y) {
			if (b.x>o.x && b.x<o.x+o.img.width) {
				return true;
			}
		}
		return false;
	}
	return o;
}

var Ball = function() {
	var img = imageFromPath('./ball.png')
	var o = {
		x: 200,
		y: 100,
		speedX: 5,
		speedY: 5,
		img: img,
		fired: false,
	}
	o.fire = function() {
		o.fired = true;
	}
	o.stop = function() {
		o.fired = false;
	}
	o.move = function () {
		if (o.fired) {
			if (o.x<0 || o.x>800) {
				o.speedX *= -1;
			}
			if (o.y<0 || o.y>500) {
				o.speedY *= -1;
			}
			o.x += o.speedX;
			o.y += o.speedY;
		}
	}
	return o;
}

var Guagame = function() {
	var g = {
		actions: {},
		keys: {}
	}
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	g.canvas = canvas;
	g.ctx = ctx;

	// events
	window.addEventListener('keydown', function(event) {
		g.keys[event.key] = true;
	});
	window.addEventListener('keyup', function(event) {
		g.keys[event.key] = false;
	});
	g.registerAction = function(key, callback) {
		g.actions[key] = callback;
	}

	setInterval(function() {
		// events
		var keys = Object.keys(g.actions);
		for (var i = 0; i < keys.length; i++) {
			var key = keys[i];
			if (g.keys[key]) {
				g.actions[key]();
			}
		}
		g.move();
		// clear
		g.ctx.clearRect(0, 0, g.canvas.width, g.canvas.height);
		// draw
		g.draw();
	}, 1000/60)
	return g;
}

var main = function() {
	var paddle = Paddle();
	var ball = Ball();
	var game = Guagame();

	game.registerAction('a', paddle.leftMove);
	game.registerAction('d', paddle.rightMove);
	game.registerAction('f', ball.fire);
	game.registerAction('s', ball.stop);

	game.move = function () {
		if (paddle.collide(ball)) {
			ball.speedY *= -1;
		}
		ball.move();
	}

	game.draw = function() {
		game.ctx.drawImage(paddle.img, paddle.x, paddle.y);
		game.ctx.drawImage(ball.img, ball.x, ball.y);
	}
}

main();