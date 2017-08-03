class Enemy extends GuaImage {
	constructor(game) {
		var name = 'enemy' + randomBetween(0,4)
		super(name, game)
		this.setup()
	}
	setup() {
		this.x = randomBetween(0, 300)
		this.y = -randomBetween(0, 500)
		// log(this.x, this.y)
		this.speed = 10
	}
	move() {
		this.y += this.speed
		if (this.y > 600) {
			this.setup()
		}
	}
}