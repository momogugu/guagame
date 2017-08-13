var main = function() {
	var images = {
		'bg': './images/bg.jpeg',
		'birds': './images/birds.png',
		'fence': './images/fence.png',
		'splash': './images/splash.png',
		'pipe': './images/pipe.png'
	}
	var game = Guagame.instance(images, function(g) {
		return scene = SceneTitle.new(g);
		// return scene = SceneMain.new(g);
	});

	window.fps = 30;
	
	// 运动帧率变化
	var range = document.getElementById('range')
	range.addEventListener('input', function(event) {
		window.fps = event.target.value
	})
}

main();