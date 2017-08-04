class SceneMain extends Scene {
	constructor(game) {
		super(game)
		this.setup()
		this.setupEvents()
	}
	// init
	setup() {
		var game = this.game
		this.bg = GuaImage.new('bg', game)
		this.cloud = Cloud.new(game)

		this.plane = Plane.new(game)
		this.plane.x = 100
		this.plane.y = 200

		this.addElement(this.bg)
		this.addElement(this.cloud)
		this.addElement(this.plane)
		this.numberOfEnemies = 10
		this.addEnemies()
		var ps = GuaParticleSystem.new(this.game)
		this.addElement(ps)
	}
	setupEvents() {
		var game = this.game
		game.registerAction('a', () => {this.plane.leftMove()})
		game.registerAction('d', () => {this.plane.rightMove()})
		game.registerAction('w', () => {this.plane.upMove()})
		game.registerAction('s', () => {this.plane.downMove()})
		game.registerAction('f', () => {this.plane.fire()})
	}
	addEnemies() {
		var es = []
		for (var i = 0; i < this.numberOfEnemies; i++) {
			var e = Enemy.new(this.game)
			es.push(e)
			this.addElement(e)
		}
		this.enemies = es
	}
}

// var Scene_main = function(game) {
// 	var s = {
// 		g: game
// 	}
// 	var paddle = Paddle(game);
// 	var ball = Ball(game);

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