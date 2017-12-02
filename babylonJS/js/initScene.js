// Global variables
var canvas, engine, scene, camera;
var rotate = 0;
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
    initGame();
}

function initGame() {
    var skybox = BABYLON.Mesh.CreateBox("skyBox", 20.0, scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false; 
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0,0,0);
    skyboxMaterial.alpha = 0.1;
    skyboxMaterial.emissiveColor  = new BABYLON.Color3(0.14,.39,.8);
    skybox.material = skyboxMaterial;

    var ball = BABYLON.Mesh.CreateSphere("sphere", 16, 1, scene);
    var ballMaterial = new BABYLON.StandardMaterial("sphere", scene);
    skyboxMaterial.backFaceCulling = false; 
    ballMaterial.emissiveColor  = new BABYLON.Color3(0.96,1,0);
    ball.material = ballMaterial;

    window.addEventListener("keydown", onKeyDown);
}


function onKeyDown(event) {
    switch (event.keyCode) {
        case 68:
            camera.position.x -= 0.5;
            break;
        case 65:
            camera.position.x += 0.5;
            break;
        case 87:
            camera.position.y -= 0.5;
            break;
        case 83:
            camera.position.y += 0.5;
            break;
        case 81:
            camera.position.z -= 0.5;
            break;
        case 69:
            camera.position.z += 0.5;
            break;
        case 82:
            rotate -= 0.1;
            camera.rotation = new BABYLON.Vector3(0, rotate, 0);
            break;
        case 84:
            rotate += 0.1;
            camera.rotation = new BABYLON.Vector3(0, rotate, 0);
            break;

    }
}

