class SceneTitle extends Scene {
	constructor(game) {
		super(game)
		this.game = game
		game.registerAction('k', () => {
			var scene = SceneMain.new(game)
			game.replaceScene(scene)
		})
	}
	// init
	draw() {
		super.draw()
		// draw labels
		this.game.ctx.font = '48px serif';
		this.game.ctx.fillText('press k to play game', 200, 200)
	}
}