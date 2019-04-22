class World {

	constructor(world) {
		this._world = world;
	} 

	renderLayer (layerIndex, layerName, idToEntityDef) {
		for(var rowIndex = 0; rowIndex < world[layerIndex][layerName].length; rowIndex++) {
			for(var colIndex = 0; colIndex < world[layerIndex][layerName][rowIndex].length; colIndex++) {
				var tileId = world[layerIndex][layerName][rowIndex][colIndex];
				var entityDef = idToEntityDef[tileId];
				if(typeof entityDef !== 'undefined') {
					var tileType = entityDef.image;
					if(tileId == 0 && layerIndex != world.length - 1) {
						tileType = ""; // Water should only be on base layer.
					}
					 Crafty.e('2D, DOM, ' + tileType)
						.attr({x: colIndex * 101, y: rowIndex * 81 + layerIndex * 40 - 121, w: 101, h: 171})	
				}
			}
		}
	}

	renderShadows (layerIndex) {

	}
	
	render() {
		for(var layerIndex = world.length -1; layerIndex >= 0; layerIndex--){
			this.renderLayer(layerIndex, "base", tileIdToImage);
			this.renderLayer(layerIndex, "object", objectIdToImage)
			this.renderLayer(layerIndex, "decorative", decorationIdToImage)
		}
	}
}