class SceneMain extends Scene {
	constructor(game) {
		super(game)
		this.setup()
		this.setupEvents()
	}
	// init
	setup() {
		var game = this.game
		this.bg = GuaImage.new('bg', game)
		this.cloud = Cloud.new(game)

		this.plane = Plane.new(game)
		this.plane.x = 100
		this.plane.y = 200

		this.addElement(this.bg)
		this.addElement(this.cloud)
		this.addElement(this.plane)
		this.numberOfEnemies = 10
		this.addEnemies()
		var ps = GuaParticleSystem.new(this.game)
		this.addElement(ps)
	}
	setupEvents() {
		var game = this.game
		game.registerAction('a', () => {this.plane.leftMove()})
		game.registerAction('d', () => {this.plane.rightMove()})
		game.registerAction('w', () => {this.plane.upMove()})
		game.registerAction('s', () => {this.plane.downMove()})
		game.registerAction('f', () => {this.plane.fire()})
	}
	addEnemies() {
		var es = []
		for (var i = 0; i < this.numberOfEnemies; i++) {
			var e = Enemy.new(this.game)
			es.push(e)
			this.addElement(e)
		}
		this.enemies = es
	}
}