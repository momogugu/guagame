var log = console.log.bind(console);

var imageFromPath = function(path) {
	var img = new Image();
	img.src = path;
	return img;
}

//碰撞检测
var collide = function(a, b) {
	if (b.y>a.y && b.y< a.y+a.img.height) {
		if (b.x > a.x && b.x < a.x + a.img.width) {
			return true;
		}
	}
	return false;
}