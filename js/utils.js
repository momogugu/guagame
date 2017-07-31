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
	if (aInb(b.y, a.y, a.img.height) || aInb(a.y, b.y, b.img.height)) {
		if (aInb(b.x, a.x, a.img.width) || aInb(a.x, b.x, b.img.width)) {
			return true;
		}
	}
	return false;
}