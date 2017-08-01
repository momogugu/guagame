class GuaImage {
	constructor(name, game) {
		this.x = 0
		this.y = 0
		this.img = game.imageByName(name)
		this.w = this.img.width
		this.h = this.img.height
	}
	static new(...args) {
		return new this(...args)
	}
}