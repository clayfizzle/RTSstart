RTS.MainMenu = function(game) {
	font48px = null;
	buttonStart = null;
	depth = 0;
	starsCount = 0;
	SCREEN_NORMX = DEVICE_W/1278; //bgImgWidth;
	SCREEN_NORMY = DEVICE_H/901;  //bgImgHeight;
};
RTS.MainMenu.prototype = {
	create: function() {
		console.log("In Main menu, heading to Game");
		//this.game.state.start('Game');
		
		var bg = this.add.sprite(0, 0, 'mainMenuBG');
 		bg.scale.setTo(SCREEN_NORMX,SCREEN_NORMY);
		startButton = this.add.button((DEVICE_W/2 - 96), (DEVICE_H-300), 'startButton', this.clickStart, this);

	},
	clickStart: function() {
		this.game.state.start('Game');
	}, 
	clickFutureProof: function() {
		window.top.open('http://playfutureproof.com/');
	}
};