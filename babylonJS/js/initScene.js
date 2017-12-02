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
    var skybox = BABYLON.Mesh.CreateBox("skyBox", 100.0, scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skybox.material = skyboxMaterial;

    var ball = BABYLON.Mesh.CreateSphere("sphere", 16, 0.1, scene);
    window.addEventListener("keydown", onKeyDown);
<<<<<<< HEAD

    var createwalltb = function (id, position, scene) {
        var onewall = BABYLON.Mesh.CreateBox("lane" + id, 1, scene);
        lane.scaling.y = 0.1; //Size in y
        lane.scaling.x = 8; //Size in x
        lane.scaling.z = 8; //Size in z
        lane.position.x = position; //x position
        lane.position.z = position; //z position
    };
  /*  var createwallside2 = function (id, position) {
=======
    /*// document.addEventListener("keydown", keyUpHandler, false);

    var createwalltb = function (id, position) {
        var onewall = BABYLON.Mesh.CreateBox("lane" + id, 1, scene);
        onewall.mesh.setEnabled(false);
        camera.setPosition(onewall.position.x, onewall.position.y, onewall.position.z);
        lane.scaling.y = 0.1; //Size in y
        lane.scaling.x = 80000; //Size in x
        lane.scaling.z = 80000; //Size in z
        lane.position.x = position; //x position
        lane.position.z = position; //z position
    };
    var createwallside2 = function (id, position) {
>>>>>>> efc06b4b6290efd56aedcbde4397a77af2ab6c8e
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
<<<<<<< HEAD
    };*/

    createwalltb(1, 0)
    //createwalltb(2, 800)

    //createwallside2(3, 0)
    //createwallside2(4, 800)

    //createWallside3(5, 0)
    //createWallside3(6, 800)
=======

        
    };

    createwalltb(1, 0)*/
    /*createwalltb(2, 800)

    createwallside2(3, 0)
    createwallside2(4, 800)

    createWallside3(5, 0)
    createWallside3(6, 800)
    */
    // working on collisions and gravity and random object spawning
    var rand = function (min, max) { return Math.floor(Math.random() * (max - min + 1) + min) };


    return scene;

    var clone = sphere
>>>>>>> efc06b4b6290efd56aedcbde4397a77af2ab6c8e

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

