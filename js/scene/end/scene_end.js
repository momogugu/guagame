class Scene_end extends Scene {
	constructor(game) {
		super(game);
		game.registerAction('r', () => {
			var scene = Scene_title.new(game)
			game.replaceScene(scene)
		})
	}
	// init
	draw() {
		// draw labels
		this.game.ctx.font = '48px serif';
		this.game.ctx.fillText('game over, press r return to title', 100, 200)
	} 
}