var Guagame = function(callback) {
	var g = {
		scene: null,
		actions: {},
		keys: {}
	}
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	g.canvas = canvas;
	g.ctx = ctx;

	// drawImage
	g.drawImage = function(gua) {
		g.ctx.drawImage(gua.img, gua.x, gua.y);
	}

	// events
	window.addEventListener('keydown', function(event) {
		g.keys[event.key] = true;
	});
	window.addEventListener('keyup', function(event) {
		g.keys[event.key] = false;
	});
	g.registerAction = function(key, callback) {
		g.actions[key] = callback;
	}

	// draw
	g.draw = function() {
		g.scene.draw()
	}

	//move
	g.move = function() {
		g.scene.move()
	}

	g.replaceScene = function(scene) {
		g.scene = scene
	}
	
	// timer
	g.runloop = function() {
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

	setTimeout(function() {
		g.scene = callback(g)
		g.runloop();
	}, 1000 / window.fps)

	return g;
}