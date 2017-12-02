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
    camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(200, 200, 500), scene);
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

    var redWireframeMaterial = new BABYLON.StandardMaterial("redWireframeMaterial", scene);
    redWireframeMaterial.emissiveColor = new BABYLON.Color3(.0, 0.0, 0.0);
    redWireframeMaterial.wireframe = true;


    var floor = BABYLON.Mesh.CreateBox("floor", 1, scene);
    floor.scaling.y = 0.1;
    floor.scaling.x = 8000;
    floor.scaling.z = 8000;
    floor.position.y = -4000;
    floor.material = redWireframeMaterial
    
    var wall1 = BABYLON.Mesh.CreateBox("wall1", 1, scene); //left
    wall1.scaling.y = 8000;
    wall1.scaling.x = 0.5;
    wall1.scaling.z = 8000;
    wall1.position.x = -4000;
    wall1.material = redWireframeMaterial
    var wall2 = BABYLON.Mesh.CreateBox("wall2", 1, scene); //right
    wall2.scaling.y = 8000;
    wall2.scaling.x = 0.5;
    wall2.scaling.z = 8000;
    wall2.position.x = 4000;
    
    wall2.material = redWireframeMaterial
    var wall3 = BABYLON.Mesh.CreateBox("wall2", 1, scene); //right
    wall3.scaling.y = 8000;
    wall3.scaling.z = 0.5;
    wall3.scaling.x = 8000;
    wall3.position.x = 0;
    wall3.position.z = 4000;
    
    wall3.material = redWireframeMaterial
    var wall4 = BABYLON.Mesh.CreateBox("wall2", 1, scene); //right
    wall4.scaling.y = 8000;
    wall4.scaling.z = 0.5;
    wall4.scaling.x = 8000;
    wall4.position.x = 0;
    wall4.position.z = -4000;
    
    wall4.material = redWireframeMaterial

    var ceiling = BABYLON.Mesh.CreateBox("ceiling", 1, scene);
    ceiling.scaling.y = 0.5;
    ceiling.scaling.x = 8000;
    ceiling.scaling.z = 8000;
    ceiling.position.y = 4000;
    ceiling.material = redWireframeMaterial

    var ball = BABYLON.Mesh.CreateSphere("ball", 16, 2, scene);
    var ballMaterial = new BABYLON.StandardMaterial("ball", scene);
    ballMaterial.emissiveColor = new BABYLON.Color3(0.96, 1, 0);
    ball.material = ballMaterial;
    ball.position.y = 13;

    var ball2 = BABYLON.Mesh.CreateSphere("ball2", 12, 2, scene);
    var ballMaterial2 = new BABYLON.StandardMaterial("ball2", scene);
    ballMaterial2.emissiveColor = new BABYLON.Color3(0.5,3, 0);
    ball.material = ballMaterial2;
    ball.position.y = 10;

    var gravityVector = new BABYLON.Vector3(0, 0, 0);
    scene.enablePhysics(gravityVector);
    ball.physicsImpostor = new BABYLON.PhysicsImpostor(ball, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 1, restitution: 1}, scene);
    ball2.physicsImpostor = new BABYLON.PhysicsImpostor(ball2, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 1, restitution: 1}, scene);
    floor.physicsImpostor = new BABYLON.PhysicsImpostor(floor, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);
    wall1.physicsImpostor = new BABYLON.PhysicsImpostor(wall1, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);
    wall2.physicsImpostor = new BABYLON.PhysicsImpostor(wall2, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);
    wall3.physicsImpostor = new BABYLON.PhysicsImpostor(wall3, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);
    wall4.physicsImpostor = new BABYLON.PhysicsImpostor(wall4, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);
    ceiling.physicsImpostor = new BABYLON.PhysicsImpostor(ceiling, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);

    ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0,0,0));
    // ball2.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(20,15,3));

    ball.physicsImpostor.setAngularVelocity(new BABYLON.Vector3(10,0,0))


    window.addEventListener("keydown", onKeyDown);
}


function onKeyDown(event) {
}

