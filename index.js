var console = console.log.bind(console);

var imageFromPath = function(path) {
	var img = new Image();
	img.src = path;
	return img;
}

//碰撞检测
var collide = function(a, b) {
	if (b.y>a.y && b.y< a.y+a.img.height) {
		if (b.x > a.x && b.x < a.x + a.img.width) {
			a.alive = false;
			return true;
		}
	}
	return false;
}

var Paddle = function() {
	var img = imageFromPath('./paddle.png')
	var o = {
		x: 400,
		y: 300,
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

var Block = function() {
	var img = imageFromPath('./block.png')
	var o = {
		x: 100,
		y: 50,
		alive: true,
		img: img
	}
	o.kill = function() {
		o.alive = false;
	}
	// 碰撞检测
	o.collide = function(b) {
		return o.alive && collide(o, b)||collide(b, o);
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

	g.drawImage = function(gua) {
		g.ctx.drawImage(gua.img, gua.x, gua.y);
	}

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
	}, 1000 / 60)
	
	return g;
}

var main = function() {
	var paddle = Paddle();
	var ball = Ball();
	var game = Guagame();

	var blocks = [];
	for (var i = 0; i < 3; i++) {
		var block = Block();
		// 设置坐标
		block.x += 200*i;
		blocks.push(block);
	}

	game.registerAction('a', paddle.leftMove);
	game.registerAction('d', paddle.rightMove);
	game.registerAction('f', ball.fire);
	game.registerAction('s', ball.stop);

	game.move = function() {
		ball.move();
		if (paddle.collide(ball)) {
			ball.bounce();
		}
		for (var i = 0; i < blocks.length; i++) {
			if(blocks[i].collide(ball)) {
				blocks[i].kill();
				ball.bounce();
			}
		}
	}

	game.draw = function() {
		game.drawImage(paddle);
		game.drawImage(ball);
		for (var i = 0; i < blocks.length; i++) {
			if (blocks[i].alive) {
				game.drawImage(blocks[i]);
			}
		}
	}
}

main();