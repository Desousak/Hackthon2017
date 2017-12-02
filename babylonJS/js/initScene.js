// Global variables
var canvas, engine, scene, camera, score = 0;
var TOAD_MODEL;

// An array to store each ending of the lane
var ENDINGS = [];

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
    initGame();
}

/**
 * Initialize the game
 */
function initGame() {
    var ball = BABYLON.Mesh.CreateSphere("sphere", 16, 1, scene);
    camera.position.x = ball.position.x - 3;

       
        // Function to create lanes
        var createwalltb = function (id, position, scene) {
            var  onewall = BABYLON.Mesh.CreateBox("lane"+id, 1, scene);
            lane.scaling.y = 0.1; //Size in y
            lane.scaling.x = 80000; //Size in x
            lane.scaling.z = 80000; //Size in z
            lane.position.x = position; //x position
            lane.position.z = position; //z position
        };
        var createwallside2 = function (id, position) {
            var  twowall = BABYLON.Mesh.CreateBox("lane"+id, 1, scene);
            lane.scaling.y = 80000 //Size in y
            lane.scaling.x = 0.1; //Size in x
            lane.scaling.z = 80000; //Size in z
            lane.position.y = position; //x position
            lane.position.z = position - 800; //z position
        };
        var createWallside3 = function (id, position) {
            var  threewall = BABYLON.mesh.CreateBox("lane"+id, 1, scene);
            lane.scaling.y = 80000 //Size in y
            lane.scaling.x = 80000; //Size in x
            lane.scaling.z = 0.1; //Size in z;
            lane.position.x = position; //x position
            lane.position.y = position; //z position
        };

        createwalltb(1,0)
        createwalltb(2,800)

        createwallside2(3,0)
        createwallside2(4,800)

        createWallside3(5,0)
        createWallside3(6,800)
        
        }

    //keyboard events
   // camera.inputs.add(new BABYLON.FreeCamera)
   //test
    }