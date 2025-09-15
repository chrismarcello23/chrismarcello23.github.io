$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "crimson"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(100, 700, 200, 100, "gold")
    createPlatform(500, 500, 69, 250, "gold")
    createPlatform(400, 600, 10, 10, "gold")
    createPlatform(900, 500, 100, 10, "gold")
    createPlatform(350, 500, 20, 20, "gold")
    createPlatform(100, 400, 100, 20, "gold")
    createPlatform(100, 0, 15, 500, "gold")
    createPlatform(350, 350, 100, 25, "gold")
    createPlatform(525, 300, 100, 25, "gold")
    createPlatform(750, 200, 100, 25, "gold", 750, 950, 1)
    createPlatform(900, 400, 100, 5, "gold")
    createPlatform(1000, 400, 5, 110, "gold")


    // TODO 3 - Create Collectables
    createCollectable("database", 950, 450, 0.1, 1)
    createCollectable("database", 120, 355, 0.1, 1)
    createCollectable("database", 800, 150, 0.1, 1, 800, 1000, 1)

    
    // TODO 4 - Create Cannons
    createCannon("top", 610, 1000)
    createCannon("top", 225, 1050)
    createCannon("right", 700, 1500)
    createCannon("left", 100, 777)
    createCannon("bottom", 925, 500)
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
