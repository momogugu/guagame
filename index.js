var console = console.log.bind(console);

var Paddle = function() {
	var img = new Image()
	img.src = './paddle.png'
	var o = {
		x: 400,
		y: 300,
		speed: 10
	}
	o.img = img
	return o;
}

var Guagame = function() {
	var g = {}
	setInterval(function() {
		// move
		g.move();
		// draw
		g.draw();
	}, 1000/30)
	return g;
}

var main = function() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var paddle = Paddle();
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
			paddle.x -= paddle.speed;
		} else if (rightMove) {
			paddle.x += paddle.speed;
		}
	}

	game.draw = function() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(paddle.img, paddle.x, paddle.y);
	}
}

main();