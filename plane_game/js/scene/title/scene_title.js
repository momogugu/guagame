class SceneTitle extends Scene {
	constructor(game) {
		super(game)
		this.game = game
		// game.registerAction('k', () => {
		// 	var scene = SceneMain.new(game)
		// 	game.replaceScene(scene)
		// })
		var label = GuaLabel.new(this.game)
		this.addElement(label)

		var animation = GuaAnimation.new(this.game)
		animation.x = 100
		animation.y = 100
		this.animation = animation
		this.addElement(animation)
		
		this.setup()
	}
	// init
	draw() {
		super.draw()
		// draw labels
		// this.game.ctx.font = '48px serif';
		// this.game.ctx.fillText('press k to play game', 200, 200)
	}
	setup() {
		this.game.registerAction('a', (keyStatus) => {
			this.animation.run(-2,keyStatus)
		})
		this.game.registerAction('d', (keyStatus) => {
			this.animation.run(+2,keyStatus)
		})
	}
}

class GuaLabel {
	constructor(game) {
		this.game = game
	}
	static new(...args) {
		return new this(...args)
	}
	draw() {
		// log('draw label')
		this.game.ctx.fillText('hello,press k to play game', 200, 200)
	}
}