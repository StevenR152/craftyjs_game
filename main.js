var GAME_SCREEN_WIDTH = 800;
var GAME_SCREEN_HEIGHT = 500;

var Game = {
	map_grid : {
		tile : {
			width : 101,
			height : 81
		}
	}
}

Crafty.init(GAME_SCREEN_WIDTH,GAME_SCREEN_HEIGHT, document.getElementById('game'));

Crafty.scene("Loading");