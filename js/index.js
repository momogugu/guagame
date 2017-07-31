var blocks = [];
window.fps = 30;

var levelLoad = function(n) {
	n = n - 1;
	var level = levels[n];
	var blocks = []
	for (var i = 0; i < level.length; i++) {
		block = Block(level[i]);
		log(block);
		blocks.push(block);
	}
	return blocks
}

var main = function() {
	var paused = false;
	var paddle = Paddle();
	var ball = Ball();
	var game = Guagame();

	blocks = levelLoad(1)

	game.registerAction('a', paddle.leftMove);
	game.registerAction('d', paddle.rightMove);
	game.registerAction('f', ball.fire);

	window.addEventListener('keydown', function(event) {
		if ([1,2,3,4,5,6,7].includes(Number(event.key))) {
			levelLoad(Number(event.key));
		}
		if (event.keyCode == 32) {
			paused = !paused
		}
	})

	// 运动桢率变化
	var range = document.getElementById('range')
	range.addEventListener('input', function(event) {
		window.fps = event.target.value
	})

	game.move = function() {
		if (paused) return false
		ball.move();
		if (paddle.collide(ball)) {
			ball.bounce();
		}
		for (var i = 0; i < blocks.length; i++) {
			if(blocks[i].collide(ball) && blocks[i].alive) {
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