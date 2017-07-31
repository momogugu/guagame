var Guagame = function() {
	var g = {
		actions: {},
		keys: {}
	}
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	g.canvas = canvas;
	g.ctx = ctx;

	// draw
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
		g.runloop();
	}, 1000 / window.fps)

	return g;
}