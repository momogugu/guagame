class Bird {
	constructor(game) {
		this.game = game
		this.img = game.imageByName('birds')
		this.w = this.img.width/3
		this.h = this.img.height
		// 图片数量
		this.countOfImg = 3
		// 当前图片index
		this.imgOfIndex = 0
		// 剪裁位置x坐标
		this.sx = 0
		// 剪裁位置y坐标
		this.sy = 0
		// 重力加速度
		this.gy = 10
		// y方向加的速度
		this.vy = 0
		// x方向翻转
		this.flipX = false
		// 旋转角度
		this.rotation = 0
	}
	static new(...args) {
		return new this(...args)
	}
	draw() {
		var canvas = this.game.canvas
		var ctx = this.game.ctx
		ctx.save()

		var w2 = this.w/2
		var h2 = this.h/2
		ctx.translate(this.x + w2, this.y + h2)
		if (this.flipX) {
			ctx.scale(-1, 1)
		}
		ctx.rotate(this.rotation * Math.PI / 180)
		ctx.translate(-w2-this.x, -h2-this.y)

		ctx.drawImage(this.img, this.sx, this.sy, this.w, this.h, this.x, this.y, this.w, this.h)
		
		ctx.restore()
	}
	move() {
		if (this.imgOfIndex >= this.countOfImg) {
			this.imgOfIndex = 0
		}
		this.y += this.vy
		this.vy += this.gy * 0.1
		if (this.y > 430) {
			this.y = 430
		}
		if(this.rotation < 45) {
			this.rotation += 5
		}
		this.sx = this.imgOfIndex*this.w
		this.imgOfIndex ++
	}
	jump() {
		this.vy = -10
		this.rotation = -45
	}
	run(x) {
		this.flipX = x<0
		this.x += x
	}
}