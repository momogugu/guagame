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
		this.addElement(this.bg)
		this.grounds = []
		for (var i = 0; i < 15; i++) {
			var ground = GuaImage.new('fence', game)
			ground.y = 460
			ground.x = i*22
			this.addElement(ground)
			this.grounds.push(ground)
		}
		this.skipCount = 4
		this.bird = Bird.new(game)
		this.bird.x = 100
		this.bird.y = 150
		this.addElement(this.bird)
		this.pipes = Pipes.new(game)
		this.addElement(this.pipes)
	}
	setupEvents() {
		var game = this.game
		game.registerAction('j', () => {this.bird.jump()})
		game.registerAction('d', () => {this.bird.run(+2)})
		game.registerAction('a', () => {this.bird.run(-2)})
	}
	move() {
		super.move()
		var offset = -5
		this.skipCount --
		if (this.skipCount == 0) {
			this.skipCount = 4
			offset = 15
		}
		for (var i = 0; i < 15; i++) {
			var ground = this.grounds[i]
			ground.x += offset
		}
	}
}