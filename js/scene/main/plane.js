class Plane extends GuaImage {
	constructor(game) {
		super('plane', game)
		this.setup()
	}
	setup() {
		this.speed = 10
		this.cooldown = 0
	}
	leftMove() {
		this.x -= this.speed
	}
	rightMove() {
		this.x += this.speed
	}
	upMove() {
		this.y -= this.speed
	}
	downMove() {
		this.y += this.speed
	}
	move() {
		if (this.cooldown) {
			this.cooldown -- 
		}
	}
	fire() {
		// log(this)
		if (this.cooldown == 0) {
			this.cooldown = 50
			var bullet = Bullet.new(this.game)
			bullet.x = this.x+this.w/2-10
			bullet.y = this.y-15
			this.scene.addElement(bullet)
		}
	}
}