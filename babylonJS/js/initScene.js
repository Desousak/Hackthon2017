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
    camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(900, 900, 900), scene);
    camera.setTarget(new BABYLON.Vector3.Zero());
    camera.attachControl(canvas);


    // Create light
    // var light = new BABYLON.PointLight("light", new BABYLON.Vector3(0, 5, -5), scene);
    var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
    var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

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


    scene.enablePhysics();
    scene.collisionsEnabled  = true;

    var greenMat = new BABYLON.StandardMaterial("greenMat", scene);
    greenMat.diffuseColor = new BABYLON.Color3(0.83, 0.83, 0.83);
    greenMat.alpha = 0.5;

    var box = BABYLON.MeshBuilder.CreateBox("box", {height: 1000, width:1000, depth: 1000, sideOrientation: BABYLON.Mesh.BACKSIDE}, scene);
    box.material = greenMat

    var rand = function(min, max){ return Math.floor(Math.random()*(max-min+1)+min)};
    var n = 300;
    var balls = [299];
    var ballMaterial = [299];

    for(var i = 0; i<n; i++){
        var a = rand(1,10);
        var b = rand(1,10);
        var c = rand(0,1);
        var d = rand(0,1);
        var e = rand(0,1);
        var x = rand(0,1);
        var y = rand(0,1);
        var xx = rand(1,10);
        var yy = rand(1,10);
        var zz = rand(1,10);
        //var ax = rand(1,10);
        //var ay = rand(1,10);
        //var az = rand(1,15);
        balls[i] = new BABYLON.Mesh.CreateSphere("ball"+i.toString(), a, b, scene);
        ballMaterial[i] = new BABYLON.StandardMaterial("ball"+i.toString(), scene);
        ballMaterial[i].emissiveColor = new BABYLON.Color3(c,d,e);
        balls[i].material = ballMaterial[i];
        balls[i].position.y = 0;
        balls[i].checkCollisions = true
        balls[i].physicsImpostor = new BABYLON.PhysicsImpostor(balls[i], BABYLON.PhysicsImpostor.SphereImpostor, { mass: x, restitution: y}, scene);
        balls[i].physicsImpostor.setLinearVelocity(new BABYLON.Vector3(xx,yy,zz));
        //balls[i].physicsImpostor.setAngularVelocity(new BABYLON.Vector3(ax,ay,az));
    }

    // var gravityVector = new BABYLON.Vector3(0, 0, 0);
    scene.collisionsEnabled = true
    box.physicsImpostor = new BABYLON.physicsImpostor(box, BABYLON.physicsImpostor.BoxImpostor, {mass: 0, restitution:1}, scene)




    window.addEventListener("keydown", onKeyDown);
}


function onKeyDown(event) {
}

