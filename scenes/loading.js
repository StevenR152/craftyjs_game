var assetsObj = {
    "audio": {
    },
    "images": [],
    "sprites": {
        "images/tiles/GrassBlock.png": {
            "tile": 101,
            "tileh": 171,
            "map": { "grassblock": [0,0] }
        },
        "images/tiles/Water Block.png": {
            "tile": 101,
            "tileh": 171,
            "map": { "waterblock": [0,0] }
        },
        "images/tiles/Dirt Block.png": {
            "tile": 101,
            "tileh": 171,
            "map": { "sandblock": [0,0] }
        },
        "images/tiles/Stone Block.png": {
            "tile": 101,
            "tileh": 171,
            "map": { "stoneblock": [0,0] }
        },
        "images/tiles/Ramp South.png": {
            "tile": 101,
            "tileh": 171,
            "map": { "rampsouth": [0,0] }
        },
        "images/tiles/Ramp East.png": {
            "tile": 101,
            "tileh": 171,
            "map": { "rampeast": [0,0] }
        },
        "images/tiles/Ramp West.png": {
            "tile": 101,
            "tileh": 171,
            "map": { "rampwest": [0,0] }
        },
        "images/tiles/Ramp North.png": {
            "tile": 101,
            "tileh": 171,
            "map": { "rampnorth": [0,0] }
        },
        "images/tiles/Tree Short.png": {
            "tile": 101,
            "tileh": 171,
            "map": { "tree": [0,0] }
        },
        "images/tiles/Rock.png": {
            "tile": 101,
            "tileh": 171,
            "map": { "rock": [0,0] }
        },
    },
};

function presentLoadingScreen() {
    Crafty.background("#AAA");
    Crafty.e("2D, DOM, Text")
          .attr({ w: 200, h: 50, x: 300, y: 280 })
          .text("Loading...")
          .textFont({ size: '20px', weight: 'bold' })
          .textAlign("center")
          .textColor("#111");
}

Crafty.defineScene("Loading", function() {
 	  presentLoadingScreen();

  	Crafty.load(assetsObj, function(){
      console.log("Assets loaded, starting game.");
         Crafty.scene('Game');
    },  function (e) {
      console.log("Crafty Load Issue");
    },  function (e) {
      console.log("Crafty Load Error", e);

    });
  });