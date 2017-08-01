var main = function() {
	var game = Guagame.instance(function(g) {
		return scene = Scene_title.new(g);
	});

	window.fps = 30;
	window.paused = false;
	window.blocks = []
	window.addEventListener('keydown', function(event) {
		// log(event)
		if ([1, 2, 3, 4, 5, 6, 7].includes(Number(event.key))) {
			// log(event.key)
			blocks = levelLoad(Number(event.key));
		}
		//暂停
		if (event.keyCode == 32) {
			paused = !paused
		}
	})
	
	// 运动帧率变化
	var range = document.getElementById('range')
	range.addEventListener('input', function(event) {
		window.fps = event.target.value
	})
}

main();