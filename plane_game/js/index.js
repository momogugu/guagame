var main = function() {
	var images = {
		'bg': './images/bg.png',
		'plane': './images/plane.png',
		'cloud': './images/cloud.png',
		'bullet': './images/bullet.png',
		'enemy0': './images/enemy0.png',
		'enemy1': './images/enemy1.png',
		'enemy2': './images/enemy2.png',
		'enemy3': './images/enemy3.png',
		'enemy4': './images/enemy4.png',
		'fire': './images/fire.png',
		'idle1': './images/idle/Idle (1).png',
		'idle2': './images/idle/Idle (2).png',
		'idle3': './images/idle/Idle (3).png',
		'idle4': './images/idle/Idle (4).png',
		'idle5': './images/idle/Idle (5).png',
		'idle6': './images/idle/Idle (6).png',
		'idle7': './images/idle/Idle (7).png',
		'idle8': './images/idle/Idle (8).png',
		'run1': './images/run/Run (1).png',
		'run2': './images/run/Run (2).png',
		'run3': './images/run/Run (3).png',
		'run4': './images/run/Run (4).png',
		'run5': './images/run/Run (5).png',
		'run6': './images/run/Run (6).png',
		'run7': './images/run/Run (7).png',
		'run8': './images/run/Run (8).png',
	}
	var game = Guagame.instance(images, function(g) {
		return scene = SceneTitle.new(g);
		// return scene = SceneMain.new(g);
	});

	window.fps = 30;
	window.paused = false;
	window.blocks = []
	window.addEventListener('keydown', function(event) {
		// log(event)
		// 关卡载入
		// if ([1, 2, 3, 4, 5, 6, 7].includes(Number(event.key))) {
		// 	// log(event.key)
		// 	blocks = levelLoad(game, Number(event.key));
		// }
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