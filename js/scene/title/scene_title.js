class SceneTitle extends Scene {
	constructor(game) {
		super(game)
		this.game = game
		// game.registerAction('k', () => {
		// 	var scene = SceneMain.new(game)
		// 	game.replaceScene(scene)
		// })
		// var ps = GuaParticleSystem.new(this.game)
		// this.addElement(ps)
	}
	// init
	draw() {
		super.draw()
		// draw labels
		// this.game.ctx.font = '48px serif';
		// this.game.ctx.fillText('press k to play game', 200, 200)
	}
}

// class GuaLabel {
// 	constructor(game) {
// 		this.game = game
// 	}
// 	static new(...args) {
// 		return new this(...args)
// 	}
// 	draw() {
// 		log('draw label')
// 		this.game.ctx.fillText('press k to play game', 200, 200)
// 	}
// }

// class GuaParticleSystem {
// 	constructor(game) {
// 		this.game = game
// 		this.particles = []
// 		this.numberOfParticles = 20
// 		this.setup()
// 	}
// 	static new(...args) {
// 		return new this(...args)
// 	}
// 	setup() {
// 		this.x = 200
// 		this.y = 200
// 		this.duration = 30
// 	}
// 	move() {
// 		this.duration --
// 		if (this.particles.length < this.numberOfParticles) {
// 			var p = Particle.new(this.game)
// 			var vx = randomBetween(-2, 2)
// 			var vy = randomBetween(-2, 2)
// 			p.init(this.x, this.y, vx, vy)
// 			this.particles.push(p)
// 		}
// 		for (var i = 0; i < this.particles.length; i++) {
// 			var p = this.particles[i]
// 			p.move()
// 		}
// 		this.particles = this.particles.filter(p => p.life>0)
// 	}
// 	draw() {
// 		if (this.duration < 0) {
// 			return 
// 		}
// 		for (var i = 0; i < this.particles.length; i++) {
// 			var p = this.particles[i]
// 			p.draw()
// 		}
// 	}
// }
// class Particle extends GuaImage {
// 	constructor(game) {
// 		super('fire', game)
// 		this.game = game
// 	}
// 	static new(...args) {
// 		return new this(...args)
// 	}
// 	init(x, y, vx, vy) {
// 		this.x = x
// 		this.y = y
// 		this.vx = vx
// 		this.vy = vy
// 		this.life = 10
// 	}
// 	draw() {
// 		super.draw()
// 	}
// 	move() {
// 		this.life --
// 		this.x += this.vx
// 		this.y += this.vy
// 		var factor = 0.01
// 		this.vx += factor*this.vx
// 		this.vy += factor*this.vy
// 	}
// }