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
	return o;
}

var Ball = function() {
	var img = imageFromPath('./ball.png')
	var o = {
		x: 200,
		y: 100,
		speed: 5,
		img: img,
		fired: false,
	}
	o.fired = function() {
		o.fired = true;
	}
	return o;
}

var Guagame = function() {
	var g = {
		actions: [],
		keys: []
	}
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	g.canvas = canvas;
	g.ctx = ctx;


	setInterval(function() {
		// move
		g.move();
		// cleat
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

	var leftMove = false;
	var rightMove = false;
	window.addEventListener('keydown', function(event) {
		if (event.key == ("A" || "a")) {
			leftMove = true;
		} else if (event.key == ("D" || "d")) {
			rightMove = true;
		}
	});
	window.addEventListener('keyup', function(event) {
		if (event.key == ("A" || "a")) {
			leftMove = false;
		} else if (event.key == ("D" || "d")) {
			rightMove = false;
		}
	});

	game.move = function () {
		if (leftMove) {
			paddle.leftMove();
		} else if (rightMove) {
			paddle.rightMove();
		}
	}

	game.draw = function() {
		game.ctx.drawImage(paddle.img, paddle.x, paddle.y);
		game.ctx.drawImage(ball.img, ball.x, ball.y);
	}
}

main();