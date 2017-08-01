class Scene {
	constructor(game) {
		this.game = game
		this.elements = []
	}
	static new(game) {
		return new this(game)
	}
	move() {

	}
	addElement(e) {
		this.elements.push(e)
	}
	draw() {
		var elements = this.elements
		for (var i = 0; i < elements.length; i++) {
			var e = elements[i]
			this.game.drawImage(e)
		}
	}
}