class Bullet extends GuaImage {
	constructor(game) {
		super('bullet', game)
		this.setup()
	}
	setup() {
		this.speed = -5
	}
	move() {
		this.y += this.speed
		if (this.y > 600) {
			this.setup()
		}
	}
}