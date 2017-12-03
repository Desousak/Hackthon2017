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
    camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(3000, 3000, 100), scene);
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
    redWireframeMaterial.emissiveColor = new BABYLON.Color3(1.0, 0.0, 0.0);
    redWireframeMaterial.wireframe = true;

    var floor = BABYLON.Mesh.CreateBox("floor", 1, scene);
    floor.scaling.y = 0.1;
    floor.scaling.x = 2000;
    floor.scaling.z = 2000;
    floor.position.y = -1000;
    floor.position.x = 0;
    floor.material = redWireframeMaterial

    var wall1 = BABYLON.Mesh.CreateBox("wall1", 1, scene); //left
    wall1.scaling.y = 2000;
    wall1.scaling.x = 0.5;
    wall1.scaling.z = 2000;
    wall1.position.x = -1000;
    wall1.material = redWireframeMaterial

    var wall2 = BABYLON.Mesh.CreateBox("wall2", 1, scene); //right
    wall2.scaling.y = 2000;
    wall2.scaling.x = 0.5;
    wall2.scaling.z = 2000;
    wall2.position.x = 1000;

    wall2.material = redWireframeMaterial
    var wall3 = BABYLON.Mesh.CreateBox("wall2", 1, scene); //right
    wall3.scaling.y = 2000;
    wall3.scaling.z = 0.5;
    wall3.scaling.x = 2000;
    wall3.position.z = 1000;

    wall3.material = redWireframeMaterial
    var wall4 = BABYLON.Mesh.CreateBox("wall2", 1, scene); //right
    wall4.scaling.y = 2000;
    wall4.scaling.z = 0.5;
    wall4.scaling.x = 2000;
    wall4.position.z = -1000;
    wall4.material = redWireframeMaterial

    var ceiling = BABYLON.Mesh.CreateBox("ceiling", 1, scene);
    ceiling.scaling.y = 0.5;
    ceiling.scaling.x = 2000;
    ceiling.scaling.z = 2000;
    ceiling.position.y = 1000;
    ceiling.position.x = 0;
    ceiling.material = redWireframeMaterial

    var rand = function(min, max){ return Math.floor(Math.random()*(max-min+1)+min)};
    var n = 500;
    var balls = [499];
    var ballMaterial = [499];
    scene.enablePhysics();
    for(var i = 0; i<n; i++){
        var a = rand(1,10);
        var b = rand(1,10);
        var c = rand(0,1);
        var d = rand(0,1);
        var e = rand(0,1);
        var x = rand(1,10);
        var y = rand(1,10)*x;
        var xx = rand(1,10);
        var yy = rand(1,2);
        var zz = rand(1,10);
        //var ax = rand(1,10);
        //var ay = rand(1,10);
        //var az = rand(1,15);
        balls[i] = new BABYLON.Mesh.CreateSphere("ball"+i.toString(), a, b, scene);
        ballMaterial[i] = new BABYLON.StandardMaterial("ball"+i.toString(), scene);
        ballMaterial[i].emissiveColor = new BABYLON.Color3(c,d,e);
        balls[i].material = ballMaterial[i];
        balls[i].position.y = 0;
        balls[i].physicsImpostor = new BABYLON.PhysicsImpostor(balls[i], BABYLON.PhysicsImpostor.SphereImpostor, { mass: x, restitution: y}, scene);
        balls[i].physicsImpostor.setLinearVelocity(new BABYLON.Vector3(xx,yy,zz));
        //balls[i].physicsImpostor.setAngularVelocity(new BABYLON.Vector3(ax,ay,az));
    }

    var gravityVector = new BABYLON.Vector3(0, 0, 0);
    floor.physicsImpostor = new BABYLON.PhysicsImpostor(floor, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);
    wall1.physicsImpostor = new BABYLON.PhysicsImpostor(wall1, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);
    wall2.physicsImpostor = new BABYLON.PhysicsImpostor(wall2, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);
    wall3.physicsImpostor = new BABYLON.PhysicsImpostor(wall3, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);
    wall4.physicsImpostor = new BABYLON.PhysicsImpostor(wall4, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);
    ceiling.physicsImpostor = new BABYLON.PhysicsImpostor(ceiling, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);




    window.addEventListener("keydown", onKeyDown);
}


function onKeyDown(event) {
}

