var Game = {
	map_grid : {
		tile : {
			width : 101,
			height : 81
		}
	}
}

Crafty.c('Grid', {
	init : function () {
		this.requires('2D, DOM')
		this.attr({
			wx : 0,
			wy : 0,
			wl : 0,
			w: Game.map_grid.tile.width,
			h: Game.map_grid.tile.height
		})
	},

	getPosition : function() {
		return {
			wx : this.wx,
			wy : this.wy,
			wl : this.wl
		}
	},

	setPosition : function(x, y, l) {
		this.attr({
			wx : x,
			wy : y,
			wl : l,
			x: x * Game.map_grid.tile.width,
			y: y * Game.map_grid.tile.height + (l - 2) * 40 - 50
		});	
		this.trigger("GridMove", {wx: this.wx, wy: this.wy, wl: this.wl});
		return this;
	}
})

Crafty.c("BlockDebug", {
	init : function () {
		this.requires('Text, Grid')
		this.attr({
			w: Game.map_grid.tile.width,
			h: Game.map_grid.tile.height
		})
		this.bind("GridMove", function (pos) {
			this.text(function () { return "{" + this.wx + "," + this.wy + "," + this.wl + "}" });
		})
		this.textFont({ size: '20px'});
	}
})

Crafty.c("Block", {
	init : function () {
		this.requires('BlockDebug, Grid')
		this.attr({
			w: Game.map_grid.tile.width,
			h: Game.map_grid.tile.height
		})
	}
});