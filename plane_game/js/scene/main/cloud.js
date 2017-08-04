class Cloud extends GuaImage {
	constructor(game) {
		super('cloud', game)
		this.setup()
	}
	setup() {
		this.x = randomBetween(0, 300)
		this.y = -randomBetween(0, 500)
		// log(this.x, this.y)
		this.speed = 5
	}
	move() {
		this.speed = config.cloud_speed.value
		this.y += this.speed
		if (this.y > 600) {
			this.setup()
		}
	}
}