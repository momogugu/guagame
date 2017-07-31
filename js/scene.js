var Scene = function(game) {
	var s = {
		g: game
	}
	var paddle = Paddle();
	var ball = Ball();

	var score = 0
	var blocks = [];
	var paused = false;
	blocks = levelLoad(1)

	game.registerAction('a', paddle.leftMove);
	game.registerAction('d', paddle.rightMove);
	game.registerAction('f', ball.fire);

	//mouse event
	var draggable = false;
	game.canvas.addEventListener('mousedown', function(event) {
		// log(event, ball)
		var x = event.offsetX
		var y = event.offsetY
		// log(true)
		draggable = ball.hasPoint(x, y)
	})
	game.canvas.addEventListener('mousemove', function(event) {
		var x = event.offsetX
		var y = event.offsetY
		if (!draggable) return
		ball.x = x
		ball.y = y
	})
	game.canvas.addEventListener('mouseup', function(event) {
		draggable = false
	})

	// 运动帧率变化
	var range = document.getElementById('range')
	range.addEventListener('input', function(event) {
		window.fps = event.target.value
	})

	s.move = function() {
		if (paused) return false
		ball.move();
		// 判断game over
		if (ball.y > paddle.y) {
			var end = Scene_end(game);
			game.replaceScene(end);
		}
		// 判断ball和paddle相撞
		if (paddle.collide(ball)) {
			ball.bounce();
		}
		// 判断ball和block相撞
		for (var i = 0; i < blocks.length; i++) {
			if (blocks[i].collide(ball) && blocks[i].alive) {
				blocks[i].kill();
				ball.bounce();
				score += 10
			}
		}
	}

	s.draw = function() {
		game.drawImage(paddle);
		game.drawImage(ball);
		// draw blocks
		for (var i = 0; i < blocks.length; i++) {
			if (blocks[i].alive) {
				game.drawImage(blocks[i]);
			}
		}
		game.ctx.font = '18px serif';
		game.ctx.fillText('分数：' + score, 40, 490)
	}

	return s;
}