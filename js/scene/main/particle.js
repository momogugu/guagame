class Particle extends GuaImage {
	constructor(game) {
		super('fire', game)
		this.game = game
	}
	static new(...args) {
		return new this(...args)
	}
	init(x, y, vx, vy) {
		this.x = x
		this.y = y
		this.vx = vx
		this.vy = vy
		this.life = 5
	}
	draw() {
		super.draw()
	}
	move() {
		this.life --
		this.x += this.vx
		this.y += this.vy
		var factor = 0.01
		this.vx += factor*this.vx
		this.vy += factor*this.vy
	}
}