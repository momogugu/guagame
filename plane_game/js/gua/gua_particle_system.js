class GuaParticleSystem {
	constructor(game) {
		this.game = game
		this.particles = []
		this.numberOfParticles = 20
		this.setup()
	}
	static new(...args) {
		return new this(...args)
	}
	setup() {
		this.x = 200
		this.y = 200
		this.duration = 20
	}
	move() {
		this.duration --
		// 生成小火花
		if (this.particles.length < this.numberOfParticles) {
			var p = Particle.new(this.game)
			var vx = randomBetween(-10, 10)
			var vy = randomBetween(-10, 10)
			p.init(this.x, this.y, vx, vy)
			this.particles.push(p)
		}
		for (var i = 0; i < this.particles.length; i++) {
			var p = this.particles[i]
			p.move()
		}
		// 过滤掉死掉的小火花
		this.particles = this.particles.filter(p => p.life>0)
	}
	draw() {
		if (this.duration < 0) {
			return 
		}
		for (var i = 0; i < this.particles.length; i++) {
			var p = this.particles[i]
			p.draw()
		}
	}
}