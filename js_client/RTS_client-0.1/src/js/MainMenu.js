RTS.MainMenu = function(game) {
	font48px = null;
	buttonStart = null;
	depth = 0;
	starsCount = 0;
};
RTS.MainMenu.prototype = {
	create: function() {
		console.log("In Main menu, heading to Game");
		this.game.state.start('Game');

	},
	clickStart: function() {
		this.game.state.start('Game');
	}
};