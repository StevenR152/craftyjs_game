Crafty.defineScene("Loading", function() {
    Crafty.background("#EEE");
    Crafty.e("2D, DOM, Text")
          .attr({ w: 200, h: 50, x: 200, y: 280 })
          .text("Loading")
          .textAlign("center")
          .textColor("#111");
 	
    var gameAssets = {};
  	Crafty.load(gameAssets, function(){
       setTimeout(function () {
         Crafty.scene('Game');
       }, 1000);
    },  function () {
      console.log("Crafty Load Issue");
    },  function (e) {
      console.log("Crafty Load Error", e);
    });
  });