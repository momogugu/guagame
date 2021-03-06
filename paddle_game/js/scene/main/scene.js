class SceneMain extends Scene {
	constructor(game) {
		super(game)
		this.setup()
		this.setupEvents()
	}
	// init
	setup() {
		var game = this.game
		this.paddle = Paddle(game);
		this.ball = Ball(game);
		blocks = levelLoad(game, 1)
		this.score = 0
	}
	setupEvents() {
		var game = this.game
		var ball = this.ball
		var paddle = this.paddle
		game.registerAction('a', paddle.leftMove);
		game.registerAction('d', paddle.rightMove);
		game.registerAction('f', ball.fire);//mouse event
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
	}
	move() {
		var ball = this.ball
		var paddle = this.paddle
		var game = this.game
		if (paused) return false
		ball.move();
		// 判断game over
		if (ball.y > paddle.y) {
			var end = SceneEnd.new(game);
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
				this.score += 10
			}
		}
	}
	draw() {
		var ball = this.ball
		var paddle = this.paddle
		var game = this.game
		var score = this.score
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
}

// var SceneMain = function(game) {
// 	var s = {
// 		g: game
// 	}
// 	var paddle = Paddle(game);
// 	var ball = Ball(game);
// 	log(paddle, ball)

// 	var score = 0
// 	// var blocks = [];
// 	blocks = levelLoad(game, 1)

// 	game.registerAction('a', paddle.leftMove);
// 	game.registerAction('d', paddle.rightMove);
// 	game.registerAction('f', ball.fire);

// 	//mouse event
// 	var draggable = false;
// 	game.canvas.addEventListener('mousedown', function(event) {
// 		// log(event, ball)
// 		var x = event.offsetX
// 		var y = event.offsetY
// 			// log(true)
// 		draggable = ball.hasPoint(x, y)
// 	})
// 	game.canvas.addEventListener('mousemove', function(event) {
// 		var x = event.offsetX
// 		var y = event.offsetY
// 		if (!draggable) return
// 		ball.x = x
// 		ball.y = y
// 	})
// 	game.canvas.addEventListener('mouseup', function(event) {
// 		draggable = false
// 	})

// 	s.move = function() {
// 		if (paused) return false
// 		ball.move();
// 		// 判断game over
// 		if (ball.y > paddle.y) {
// 			var end = SceneEnd.new(game);
// 			game.replaceScene(end);
// 		}
// 		// 判断ball和paddle相撞
// 		if (paddle.collide(ball)) {
// 			ball.bounce();
// 		}
// 		// 判断ball和block相撞
// 		for (var i = 0; i < blocks.length; i++) {
// 			if (blocks[i].collide(ball) && blocks[i].alive) {
// 				blocks[i].kill();
// 				ball.bounce();
// 				score += 10
// 			}
// 		}
// 	}

// 	s.draw = function() {
// 		// game.ctx.fillStyle = "#fdfdfd";
// 		// game.ctx.fillRect(0,0,800,500); 
// 		game.drawImage(paddle);
// 		game.drawImage(ball);
// 		// draw blocks
// 		for (var i = 0; i < blocks.length; i++) {
// 			if (blocks[i].alive) {
// 				game.drawImage(blocks[i]);
// 			}
// 		}
// 		game.ctx.font = '18px serif';
// 		game.ctx.fillText('分数：' + score, 40, 490)
// 	}

// 	return s;
// }