class World {

	constructor(world, idToEntityDef) {
		this._world = world;
		this._idToEntityDev = idToEntityDef;
	} 

	isWalkable (layer, x, y) {
		var isWalkable = true;
		
		var isBaseWalkable = false;
		var baseSq = this._world[layer]["base"][y][x];
		if(typeof tileIdToImage[baseSq] !== 'undefined') {
			isBaseWalkable = tileIdToImage[baseSq].canStandOn;
		}

		var isLayerUpWalkable = false;
		var layerUpSq = this._world[layer - 1]["base"][y][x];
		if(layerUpSq == 0) {
			isLayerUpWalkable = true;
		} else if(typeof tileIdToImage[layerUpSq] !== 'undefined') {
			isLayerUpWalkable = !tileIdToImage[layerUpSq].isSolid;
		}

		// Check for objects
		var isObjectNotInWay = true;
		var layerUpObj = this._world[layer - 1]["object"][y][x];
		if(typeof objectIdToImage[layerUpObj] !== 'undefined') {
			isObjectNotInWay = !objectIdToImage[layerUpObj].isSolid;
		}

		return isBaseWalkable && isLayerUpWalkable && isObjectNotInWay;
	}

	renderLayer (layerIndex, layerName, idToEntityDef) {
		for(var rowIndex = 0; rowIndex < this._world[layerIndex][layerName].length; rowIndex++) {
			for(var colIndex = 0; colIndex < this._world[layerIndex][layerName][rowIndex].length; colIndex++) {
				var tileId = this._world[layerIndex][layerName][rowIndex][colIndex];
				var entityDef = idToEntityDef[tileId];
				if(typeof entityDef !== 'undefined') {
					var tileType = entityDef.image;
					if(tileType.startsWith("ramp")) {
						tileType = "Ramp, " + tileType;
						console.log("Ramp Appended")
					}
					if(tileId == 0 && layerIndex != this._world.length - 1) {
						tileType = ""; // Water should only be on base layer.
					}
					 Crafty.e('Grid, Collision, ' + tileType)
					 .setPosition(colIndex, rowIndex, layerIndex)
						// .attr({x: colIndex * 101, y: rowIndex * 81 + layerIndex * 40 - 41, w: 101, h: 171})	
				}
			}
		}
	}

	renderShadows (layerIndex, idToEntityDef) {
		var layerName = "base";
		for(var rowIndex = 0; rowIndex < this._world[layerIndex][layerName].length; rowIndex++) {
			for(var colIndex = 0; colIndex < this._world[layerIndex][layerName][rowIndex].length; colIndex++) {
				var tileId = this._world[layerIndex][layerName][rowIndex][colIndex];
				var tileType = "";
				if(
					tileId == 0 &&
					rowIndex != 0 &&
					colIndex != 0 &&
					rowIndex != this._world[layerIndex][layerName].length - 1 &&
					colIndex != this._world[layerIndex][layerName][rowIndex].length - 1
					 ) 
				{ 
					// South
					var tileIdNorth1Sq = this._world[layerIndex][layerName][rowIndex + 1][colIndex]
					if(tileIdNorth1Sq != 0) {
						tileType = "shadowSouth";
						Crafty.e('Block, ' + tileType)
						.setPosition(colIndex, rowIndex, layerIndex)
					}

					// West
					var tileIdNorth1Sq = this._world[layerIndex][layerName][rowIndex][colIndex - 1]
					if(tileIdNorth1Sq != 0) {
						tileType = "shadowWest";
						Crafty.e('Block, ' + tileType)
						.setPosition(colIndex, rowIndex, layerIndex)

					}

					// East
					var tileIdNorth1Sq = this._world[layerIndex][layerName][rowIndex][colIndex + 1]
					if(tileIdNorth1Sq != 0) {
						tileType = "shadowEast";						
						Crafty.e('Block, ' + tileType)
						.setPosition(colIndex, rowIndex, layerIndex)	
					}
				}
			
			}
		}
	}

	render() {
		for(var layerIndex = this._world.length -1; layerIndex >= 0; layerIndex--){
			this.renderLayer(layerIndex, "base", tileIdToImage);
			if(layerIndex < this._world.length -1) {
				// this.renderShadows(layerIndex, decorationIdToImage)
			}
			this.renderLayer(layerIndex, "object", objectIdToImage)
			this.renderLayer(layerIndex, "decorative", decorationIdToImage)
		}
	}
}