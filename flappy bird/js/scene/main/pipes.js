class Pipes {
	constructor(game) {
		this.game = game
		this.pipes = []
		this.pipeSpaceY = 150
		this.pipeSpaceX = 90
		this.countOfPipes = 4
		for (var i = 0; i < this.countOfPipes; i++) {
			var p1 = GuaImage.new('pipe', game)
			p1.flipY = true
			p1.x = 100 + i*this.pipeSpaceX
			var p2 = GuaImage.new('pipe', game)
			p2.x = p1.x
			this.resetPipePosition(p1, p2)
			this.pipes.push(p1)
			this.pipes.push(p2)
		}
	}
	static new(...args) {
		return new this(...args)
	}
	draw() {
		var canvas = this.game.canvas
		var ctx = this.game.ctx
		for (var i = 0; i < this.pipes.length; i++) {
			var pipe = this.pipes[i]

			ctx.save()

			var w2 = pipe.w/2
			var h2 = pipe.h/2
			ctx.translate(pipe.x + w2, pipe.y + h2)
			var scaleX = pipe.flipX ? -1 : 1
			var scaleY = pipe.flipY ? -1 : 1
			ctx.scale(scaleX, scaleY)
			ctx.rotate(pipe.rotation * Math.PI / 180)
			ctx.translate(-w2-pipe.x, -h2-pipe.y)

			ctx.drawImage(pipe.img, pipe.x, pipe.y)
			
			ctx.restore()
		}
	}
	move() {
		for (var i = 0; i < this.pipes.length; i++) {
			var pipe = this.pipes[i]
			pipe.x -= 5
			if (pipe.x < -60) {
				pipe.x += this.pipeSpaceX * this.countOfPipes
			}
		}
	}
	resetPipePosition(p1, p2) {
		p1.y = randomBetween(-250, -50)
		p2.y = p1.y+p1.h+this.pipeSpaceY
	}
}