

var player = ''; // Globalise the player for easy console debugging.

Crafty.defineScene("Game", function() {
	Crafty.viewport.scale(0.5);
	var world = new World(worldGrid);
	world.render();

	player = Crafty.e("Grid, BlockDebug, Keyboard, characterboy")
		.setPosition(2, 6, 1)
		.bind('KeyDown', function(e) {
			var newPlayerPos = player.getPosition();

			if (e.key == Crafty.keys.RIGHT_ARROW) {
				newPlayerPos.wx += 1;
		    } 
		    else if (e.key == Crafty.keys.LEFT_ARROW) {
				newPlayerPos.wx -= 1;
		    } else if (e.key == Crafty.keys.UP_ARROW) {
				newPlayerPos.wy -= 1;
		    } else if (e.key == Crafty.keys.DOWN_ARROW) {
				newPlayerPos.wy += 1;
		    }

			if(world.isWalkable(2, newPlayerPos.wx, newPlayerPos.wy)) {
				player.setPosition(newPlayerPos.wx, newPlayerPos.wy, newPlayerPos.wl)
			}
		});
}); 