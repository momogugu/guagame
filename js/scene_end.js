var Scene_end = function(game) {
	var s = {
		g: game
	}
	s.move = function() {

	}
	// init
	s.draw = function() {
		// draw labels
		game.ctx.font = '48px serif';
		game.ctx.fillText('game over', 300, 200)
	}
	return s
}