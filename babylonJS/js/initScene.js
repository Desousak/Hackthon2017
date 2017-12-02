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
    scene.clearColor = new BABYLON.Color3(0, 0, 0);

    // Create the camera
    camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 10, -40), scene);
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
    var floor = BABYLON.Mesh.CreateBox("floor", 1, scene);
    floor.scaling.y = 0.1;
    floor.scaling.x = 50;
    floor.scaling.z = 50;

    var ball = BABYLON.Mesh.CreateSphere("ball", 16, 2, scene);
    var ballMaterial = new BABYLON.StandardMaterial("ball", scene);
    ballMaterial.emissiveColor = new BABYLON.Color3(0.96, 1, 0);
    ball.material = ballMaterial;
    ball.position.y = 10;

    var gravityVector = new BABYLON.Vector3(0, -9.81, 0);
    scene.enablePhysics(gravityVector);
    ball.physicsImpostor = new BABYLON.PhysicsImpostor(ball, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 1, restitution: 1}, scene);
    floor.physicsImpostor = new BABYLON.PhysicsImpostor(floor, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);
    window.addEventListener("keydown", onKeyDown);
}


function onKeyDown(event) {
}

