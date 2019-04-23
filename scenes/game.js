


Crafty.defineScene("Game", function() {
	Crafty.viewport.scale(0.5);
	var world = new World(worldGrid);
	world.render();

	var player = Crafty.e("2D, DOM, Keyboard, characterboy")
		.attr({x: 10 * 101, y: 10 * 81, w: 101, h: 171})	
		.bind('KeyDown', function(e) {
			if (e.key == Crafty.keys.LEFT_ARROW) {
				var newX = this.x / 101 - 1;
				if(world.isWalkable(2, newX, this.y / 81)) {
					this.x = newX * 101;
				}
		    } else if (e.key == Crafty.keys.RIGHT_ARROW) {
				this.x += 1 * 101;
		    } else if (e.key == Crafty.keys.UP_ARROW) {
				this.y -= 1 * 81;
		    } else if (e.key == Crafty.keys.DOWN_ARROW) {
				this.y += 1 * 81;
		    }
		});
}); 