class GuaImage {
	constructor(name, game) {
		this.game = game
		this.x = 0
		this.y = 0
		this.img = game.imageByName(name)
		this.w = this.img.width
		this.h = this.img.height
		this.flipY = false
		this.flipX = false
		this.rotation = 0
	}
	static new(...args) {
		return new this(...args)
	}
	draw() {
		this.game.drawImage(this)
	}
}