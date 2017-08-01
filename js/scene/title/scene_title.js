class Scene_title extends Scene {
	constructor(game) {
		super(game);
		game.registerAction('k', () => {
			var scene = Scene_main(game);
			game.replaceScene(scene);
		})
	}
	// init
	draw() {
		// draw labels
		this.game.ctx.font = '48px serif';
		this.game.ctx.fillText('press k to play game', 200, 200)
	} 
}