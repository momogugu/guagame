class SceneTitle extends Scene {
	constructor(game) {
		super(game)
		this.game = game
		this.setup()
		this.setupEvents()
	}
	// init
	draw() {
		super.draw()
	}
	setup() {
		var game = this.game
		this.ready = GuaImage.new('splash', game)
		this.ready.x = 50
		this.ready.y = 150
		this.addElement(this.ready)
	}
	setupEvents() {
		var game = this.game
		game.registerAction(' ', event => {
			var main = SceneMain.new(game)
			game.replaceScene(main)
		})
	}
}