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
    camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 4, -10), scene);
    camera.setTarget(new BABYLON.Vector3.Zero());
    camera.attachControl(canvas);

    // Create light
    var light = new BABYLON.PointLight("light", new BABYLON.Vector3(0, 5, -5), scene);

    engine.runRenderLoop(function () {
        scene.render();
    })
    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });
    // engine.isPointerLock = true;
    initGame();
}

/**
 * Initialize the game
 */
function initGame() {
    var ball = BABYLON.Mesh.CreateSphere("sphere", 16, 1, scene);
   // document.addEventListener("keydown", keyUpHandler, false);

   
    

    //keyboard events
    // camera.inputs.add(new BABYLON.FreeCamera)

}

function onKeyDown(event) {
    switch(event.keyCode){
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
        
    }
}

window.addEventListener("keydown", onKeyDown);