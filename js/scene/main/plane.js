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
		this.speed = config.plane_speed
		this.x -= this.speed
	}
	rightMove() {
		this.speed = config.plane_speed
		this.x += this.speed
	}
	upMove() {
		this.speed = config.plane_speed
		this.y -= this.speed
	}
	downMove() {
		this.speed = config.plane_speed
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
			this.cooldown = config.bullet_cooldown
			var bullet = Bullet.new(this.game)
			bullet.x = this.x+this.w/2-10
			bullet.y = this.y-15
			this.scene.addElement(bullet)
		}
	}
}