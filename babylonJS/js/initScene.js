// Global variables
var canvas, engine, scene, camera;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

/**
* Load the scene when the canvas is fully loaded
*/
document.addEventListener("DOMContentLoaded", function () {
    if (BABYLON.Engine.isSupported()) {
        initScene();
    }
}, false);

/**
 * Creates a new BABYLON Engine and initialize the scene
 */
function initScene() {
    // Get canvas
    canvas = document.getElementById("renderCanvas");

    // Create babylon engine
    engine = new BABYLON.Engine(canvas, true);

    // Create scene
    scene = new BABYLON.Scene(engine);

    // Create the camera
    // Creates, angles, distances and targets the camera
    camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);

    // This positions the camera
    camera.setPosition(new BABYLON.Vector3(0, 0, -10));

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // Create light
    var light = new BABYLON.PointLight("light", new BABYLON.Vector3(0, 5, -5), scene);

    engine.runRenderLoop(function () {
        scene.render();
    })
    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });
    engine.isPointerLock = true;
    initGame();

    //Phi
}

/**
 * Initialize the game
 */
function initGame() {
    //var ball = BABYLON.Mesh.CreateSphere("sphere", 16, 1, scene);
    window.addEventListener("keydown", onKeyDown);

    var createwalltb = function (id, position, scene) {
        var onewall = BABYLON.Mesh.CreateBox("lane" + id, 1, scene);
        lane.scaling.y = 0.1; //Size in y
        lane.scaling.x = 800000; //Size in x
        lane.scaling.z = 800000; //Size in z
        lane.position.x = position; //x position
        lane.position.z = position; //z position
    };
    /*  var createwallside2 = function (id, position) {
          var twowall = BABYLON.Mesh.CreateBox("lane" + id, 1, scene);
          lane.scaling.y = 80000 //Size in y
          lane.scaling.x = 0.1; //Size in x
          lane.scaling.z = 80000; //Size in z
          lane.position.y = position; //x position
          lane.position.z = position - 800; //z position
      };
      var createWallside3 = function (id, position) {
          var threewall = BABYLON.mesh.CreateBox("lane" + id, 1, scene);
          lane.scaling.y = 80000 //Size in y
          lane.scaling.x = 80000; //Size in x
          lane.scaling.z = 0.1; //Size in z;
          lane.position.x = position; //x position
          lane.position.y = position; //z position
      };*/

    createwalltb(1, 0)
    //createwalltb(2, 800)

    //createwallside2(3, 0)
    //createwallside2(4, 800)

    //createWallside3(5, 0)
    //createWallside3(6, 800)

}


    
function onKeyDown(event) {
    switch (event.keyCode) {
        case 68:
            camera.position.x += 0.5;
            break;
        case 65:
            camera.position.x -= 0.5;
            break;
        case 87:
            camera.position.y += 0.5;
            break;
        case 83:
            camera.position.y -= 0.5;
            break;
        case 81:
            camera.position.z -= 0.5;
            break;
        case 69:
            camera.position.z += 0.5;

    }
}
