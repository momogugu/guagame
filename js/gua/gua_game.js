class Guagame {
	constructor(callback) {
		this.callback = callback
		this.scene = null
		this.actions = {}
		this.keys = {}
		this.canvas = document.getElementById('canvas')
		this.ctx = this.canvas.getContext('2d')

		// events
		window.addEventListener('keydown', (event) => {
			this.keys[event.key] = true;
		});
		window.addEventListener('keyup', (event) => {
			this.keys[event.key] = false;
		});
		this.init()
	}
	static instance(callback) {
		this.i = this.i || new this(callback)
		return this.i
	}
	// drawImage
	drawImage(gua) {
		this.ctx.drawImage(gua.img, gua.x, gua.y)
	}
	// register events
	registerAction(key, callback) {
		this.actions[key] = callback
	}
	// draw
	draw() {
		this.scene.draw()
	}
	// move
	move() {
		this.scene.move()
	}
	replaceScene(scene) {
		this.scene = scene
	}	
	// timer
	runloop() {
		var g = this;
		// events
		var keys = Object.keys(g.actions);
		for (var i = 0; i < keys.length; i++) {
			var key = keys[i];
			if (g.keys[key]) {
				g.actions[key]();
			}
		}
		//move
		g.move();
		// clear
		g.ctx.clearRect(0, 0, g.canvas.width, g.canvas.height);
		// draw
		g.draw();
		setTimeout(function() {
			g.runloop();
		}, 1000/window.fps)
	}
	init() {
		var g = this
		setTimeout(function() {
			g.scene = g.callback(g)
			g.runloop();
		}, 1000 / window.fps)
	}
}