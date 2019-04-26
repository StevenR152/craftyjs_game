

var player = ''; // Globalise the player for easy console debugging.

Crafty.defineScene("Game", function() {
	Crafty.viewport.scale(0.5);
	var world = new World(worldGrid);
	world.render();

	player = Crafty.e("Grid, BlockDebug, Keyboard, Collision, characterboy")
		.setPosition(3, 6, 0)
		.setPosition(12, 10, 2)
   		.collision([0, 32, 32, 0, 64, 32, 32, 64])
		.onHit("Ramp", function(hitData, firstTimeHit) {
			// if(!firstTimeHit) return;
			var offset = hitData[0].obj.offset;
			console.log(hitData[0].obj.offset)
			var newPlayerPos = player.getPosition();
			console.log(player.getPosition())
			if(world.isWalkable(newPlayerPos.wl, newPlayerPos.wx + offset.x, newPlayerPos.wy + offset.y)) {
				player.setPosition(newPlayerPos.wx + offset.x, newPlayerPos.wy + offset.y, newPlayerPos.wl - 1)
			}
			console.log(player.getPosition())

		})
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

			if(world.isWalkable(newPlayerPos.wl + 1, newPlayerPos.wx, newPlayerPos.wy)) {
				player.setPosition(newPlayerPos.wx, newPlayerPos.wy, newPlayerPos.wl)
			}
		});
}); 