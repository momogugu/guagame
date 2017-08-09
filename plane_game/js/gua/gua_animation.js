class GuaAnimation {
	constructor(game) {
		this.game = game
		this.animation = {
			'run': [],
			'idle': []
		}
		for (var i = 1; i < 9; i++) {
			var name = `run${i}`
			var t = game.imageByName(name)
			this.animation.run.push(t)
		}
		for (var i = 1; i < 9; i++) {
			var name = `idle${i}`
			var t = game.imageByName(name)
			this.animation.idle.push(t)
		}
		this.animationState = 'idle'
		this.img = this.frames()[0]
		this.w = this.img.width
		this.h = this.img.height
		this.frameOfIndex = 0
		this.countOfFrame = 3
		this.flipX = false
	}
	static new(...args) {
		return new this(...args)
	}
	frames() {
		return this.animation[this.animationState]
	}
	draw() {
		var ctx = this.game.ctx
		var canvas = this.game.canvas
		if (this.flipX) {
			// 水平“翻转”画布
			ctx.translate(canvas.width, 0);
			ctx.scale(-1, 1);
			// 下面画的图片是水平翻转的
			ctx.drawImage(this.img, canvas.width - this.w - this.x, this.y);
			// 画布恢复正常
			ctx.translate(canvas.width, 0);
			ctx.scale(-1, 1)
			// 图片翻转方法二
			// ctx.save()
			// var x = this.x + this.w/2
			// ctx.translate(x, 0);
		 //    ctx.scale(-1, 1);
		 //    ctx.translate(-x, 0);
		 //    ctx.drawImage(this.img, this.x, this.y);
		 //    ctx.restore();
		} else {
			ctx.drawImage(this.img, this.x, this.y)
		}
	}
	move() {
		if (this.countOfFrame == 0) {
			this.countOfFrame = 3
		}
		this.countOfFrame --
		this.frameOfIndex = (this.frameOfIndex+1) % this.frames().length
		this.img = this.frames()[this.frameOfIndex]
	}
	run(x, keyStatus) {
		this.flipX = x<0
		this.x += x
		var animationsNames = {
			'up': 'idle',
			'down': 'run'
		}
		this.animationState = animationsNames[keyStatus]
	}
}