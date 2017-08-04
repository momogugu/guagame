var log = console.log.bind(console);

var imageFromPath = function(path) {
	var img = new Image();
	img.src = path;
	return img;
}

var aInb = function(x, x1, x2) {
	return x>x1 && x<x1+x2
}

//碰撞检测
var collide = function(a, b) {
	if (aInb(b.y, a.y, a.h) || aInb(a.y, b.y, b.h)) {
		if (aInb(b.x, a.x, a.w) || aInb(a.x, b.x, b.w)) {
			return true;
		}
	}
	return false;
}

// 关卡载入
var levelLoad = function(game, n) {
	n = n - 1;
	var level = levels[n];
	var blocks = []
	for (var i = 0; i < level.length; i++) {
		block = Block(game, level[i]);
		blocks.push(block);
	}
	// log(blocks)
	return blocks
}

var randomBetween = function(start, end) {
	var n = Math.random()*(end-start+1)+start
	return Math.floor(n)
}

const config = {
	plane_speed: {
		text: '飞机速度',
		value: 10
	},
	cloud_speed: {
		text: '云朵速度',
		value: 5
	},
	bullet_speed: {
		text: '子弹速度',
		value: 5
	},
	enemy_speed: {
		text: 'enemy速度',
		value: 5
	},
	bullet_cooldown: {
		text: '子弹冷却时间',
		value: 30
	},
}