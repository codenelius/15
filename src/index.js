const canvasSketch = require("canvas-sketch");

// Import ThreeJS and assign it to global scope
// This way examples/ folder can use it too
const THREE = require("three");
global.THREE = THREE;

// Import extra THREE plugins
require("three/examples/js/controls/OrbitControls");
require("three/examples/js/geometries/RoundedBoxGeometry.js");
require("three/examples/js/loaders/GLTFLoader.js");
require("three/examples/js/loaders/RGBELoader.js");
require("three/examples/js/postprocessing/EffectComposer.js");
require("three/examples/js/postprocessing/RenderPass.js");
require("three/examples/js/postprocessing/ShaderPass.js");
require("three/examples/js/postprocessing/UnrealBloomPass.js");
require("three/examples/js/shaders/LuminosityHighPassShader.js");
require("three/examples/js/shaders/CopyShader.js");

const { GUI } = require("dat.gui");

const settings = {
  animate: true,
  context: "webgl",
  resizeCanvas: false,
};

const sketch = ({ context, canvas, width, height }) => {

  const gui = new GUI();
  const options = {
    enableSwoopingCamera: false,
    enableRotation: false,
    color: 0xff8e00,
    metalness: 0.01,
    roughness: 0.1,
    transmission: 1,
    ior: 1.3,
    reflectivity: 0.2,
    thickness: 5,
    envMapIntensity: 1.5,
    clearcoat: 0.1,
    clearcoatRoughness: 0.1,
    normalScale: 0.05,
    clearcoatNormalScale: 0.2,
    normalRepeat: 3,
    bloomThreshold: 0.0,
    bloomStrength: 0.0,
    bloomRadius: 0.0,
  };

  const swirlOptions = {
    enableSwoopingCamera: false,
    enableRotation: false,
    color: 0xff8e00,
    metalness: 0.01,
    roughness: 0.1,
    transmission: 1,
    ior: 1.3,
    reflectivity: 0.2,
    thickness: 5,
    envMapIntensity: 1.5,
    clearcoat: 0.1,
    clearcoatRoughness: 0.1,
    normalScale: 0.05,
    clearcoatNormalScale: 0.2,
    normalRepeat: 3,
    bloomThreshold: 0.0,
    bloomStrength: 0.0,
    bloomRadius: 0.0,
  };

  const arrowOptions = {
    enableSwoopingCamera: false,
    enableRotation: false,
    color: 0xff8e00,
    metalness: 0.01,
    roughness: 0.1,
    transmission: 1,
    ior: 1.3,
    reflectivity: 0.2,
    thickness: 5,
    envMapIntensity: 1.5,
    clearcoat: 0.1,
    clearcoatRoughness: 0.1,
    normalScale: 0.05,
    clearcoatNormalScale: 0.2,
    normalRepeat: 3,
    bloomThreshold: 0.0,
    bloomStrength: 0.0,
    bloomRadius: 0.0,
  };

  const pebble_aOptions = {
    enableSwoopingCamera: false,
    enableRotation: false,
    color: 0xff8e00,
    metalness: 0.01,
    roughness: 0.1,
    transmission: 1,
    ior: 1.3,
    reflectivity: 0.2,
    thickness: 5,
    envMapIntensity: 1.5,
    clearcoat: 0.1,
    clearcoatRoughness: 0.1,
    normalScale: 0.05,
    clearcoatNormalScale: 0.2,
    normalRepeat: 3,
    bloomThreshold: 0.0,
    bloomStrength: 0.0,
    bloomRadius: 0.0,
  };

  const pebble_bOptions = {
    enableSwoopingCamera: false,
    enableRotation: false,
    color: 0xff8e00,
    metalness: 0.01,
    roughness: 0.1,
    transmission: 1,
    ior: 1.3,
    reflectivity: 0.2,
    thickness: 5,
    envMapIntensity: 1.5,
    clearcoat: 0.1,
    clearcoatRoughness: 0.1,
    normalScale: 0.05,
    clearcoatNormalScale: 0.2,
    normalRepeat: 3,
    bloomThreshold: 0.0,
    bloomStrength: 0.0,
    bloomRadius: 0.0,
  };

  const pebble_cOptions = {
    enableSwoopingCamera: false,
    enableRotation: false,
    color: 0xff8e00,
    metalness: 0.01,
    roughness: 0.1,
    transmission: 1,
    ior: 1.3,
    reflectivity: 0.2,
    thickness: 5,
    envMapIntensity: 1.5,
    clearcoat: 0.1,
    clearcoatRoughness: 0.1,
    normalScale: 0.05,
    clearcoatNormalScale: 0.2,
    normalRepeat: 3,
    bloomThreshold: 0.0,
    bloomStrength: 0.0,
    bloomRadius: 0.0,
  };

  const pebbleAOptions = {
    enableSwoopingCamera: false,
    enableRotation: false,
    color: 0xff8e00,
    metalness: 0.01,
    roughness: 0.1,
    transmission: 1,
    ior: 1.3,
    reflectivity: 0.2,
    thickness: 5,
    envMapIntensity: 1.5,
    clearcoat: 0.1,
    clearcoatRoughness: 0.1,
    normalScale: 0.05,
    clearcoatNormalScale: 0.2,
    normalRepeat: 3,
    bloomThreshold: 0.0,
    bloomStrength: 0.0,
    bloomRadius: 0.0,
  };

  const pebbleBOptions = {
    enableSwoopingCamera: false,
    enableRotation: false,
    color: 0xff8e00,
    metalness: 0.01,
    roughness: 0.1,
    transmission: 1,
    ior: 1.3,
    reflectivity: 0.2,
    thickness: 5,
    envMapIntensity: 1.5,
    clearcoat: 0.1,
    clearcoatRoughness: 0.1,
    normalScale: 0.05,
    clearcoatNormalScale: 0.2,
    normalRepeat: 3,
    bloomThreshold: 0.0,
    bloomStrength: 0.0,
    bloomRadius: 0.0,
  };

  const soundwaveOptions = {
    enableSwoopingCamera: false,
    enableRotation: false,
    color: 0xff8e00,
    metalness: 0.01,
    roughness: 0.1,
    transmission: 1,
    ior: 1.3,
    reflectivity: 0.2,
    thickness: 5,
    envMapIntensity: 1.5,
    clearcoat: 0.1,
    clearcoatRoughness: 0.1,
    normalScale: 0.05,
    clearcoatNormalScale: 0.2,
    normalRepeat: 3,
    bloomThreshold: 0.0,
    bloomStrength: 0.0,
    bloomRadius: 0.0,
  };
  // Setup
  const renderer = new THREE.WebGLRenderer({
    context,
    antialias: false,
  });
  renderer.setClearColor(0xffffff, 1);

  const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 100);
  camera.position.set(0, 0, 5);

  const controls = new THREE.OrbitControls(camera, canvas);
  controls.enabled = !options.enableSwoopingCamera;
  controls.enableZoom = false;
  controls.enableRotate = false;
  controls.enablePan = false;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xffffff );
  const renderPass = new THREE.RenderPass(scene, camera);
  const bloomPass = new THREE.UnrealBloomPass(
    new THREE.Vector2(width, height),
    options.bloomStrength,
    options.bloomRadius,
    options.bloomThreshold
  );

  const composer = new THREE.EffectComposer(renderer);
  composer.addPass(renderPass);
  composer.addPass(bloomPass);

  // Content
  const textureLoader = new THREE.TextureLoader();
  const bgTexture = textureLoader.load("src/texture.png");
  const bgGeometry = new THREE.PlaneGeometry(10.6666, 6); // asoect ration for the background image containined the h1 text
  const bgMaterial = new THREE.MeshBasicMaterial({ map: bgTexture });
  const bgMesh = new THREE.Mesh(bgGeometry, bgMaterial);
  bgMesh.position.set(0, 0, -2);
  scene.add(bgMesh);

  const hdrEquirect = new THREE.RGBELoader().load(
    "src/empty_warehouse_01_2k.hdr",
    () => {
      hdrEquirect.mapping = THREE.EquirectangularReflectionMapping;
    }
  );

  const normalMapTexture = textureLoader.load("src/normal.jpg");
  normalMapTexture.wrapS = THREE.RepeatWrapping;
  normalMapTexture.wrapT = THREE.RepeatWrapping;
  normalMapTexture.repeat.set(options.normalRepeat, options.normalRepeat);

  const heartMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: options.metalness,
    roughness: options.roughness,
    transmission: options.transmission,
    ior: options.ior,
    reflectivity: options.reflectivity,
    thickness: options.thickness,
    envMap: hdrEquirect,
    envMapIntensity: options.envMapIntensity,
    clearcoat: options.clearcoat,
    clearcoatRoughness: options.clearcoatRoughness,
    normalScale: new THREE.Vector2(options.normalScale),
    normalMap: normalMapTexture,
    clearcoatNormalMap: normalMapTexture,
    clearcoatNormalScale: new THREE.Vector2(options.clearcoatNormalScale),
  });

  const swirlMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: swirlOptions.metalness,
    roughness: swirlOptions.roughness,
    transmission: swirlOptions.transmission,
    ior: swirlOptions.ior,
    reflectivity: swirlOptions.reflectivity,
    thickness: swirlOptions.thickness,
    envMap: hdrEquirect,
    envMapIntensity: swirlOptions.envMapIntensity,
    clearcoat: swirlOptions.clearcoat,
    clearcoatRoughness: swirlOptions.clearcoatRoughness,
    normalScale: new THREE.Vector2(swirlOptions.normalScale),
    normalMap: normalMapTexture,
    clearcoatNormalMap: normalMapTexture,
    clearcoatNormalScale: new THREE.Vector2(swirlOptions.clearcoatNormalScale),
  });

  const arrowMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: arrowOptions.metalness,
    roughness: arrowOptions.roughness,
    transmission: arrowOptions.transmission,
    ior: arrowOptions.ior,
    reflectivity: arrowOptions.reflectivity,
    thickness: arrowOptions.thickness,
    envMap: hdrEquirect,
    envMapIntensity: arrowOptions.envMapIntensity,
    clearcoat: arrowOptions.clearcoat,
    clearcoatRoughness: arrowOptions.clearcoatRoughness,
    normalScale: new THREE.Vector2(arrowOptions.normalScale),
    normalMap: normalMapTexture,
    clearcoatNormalMap: normalMapTexture,
    clearcoatNormalScale: new THREE.Vector2(arrowOptions.clearcoatNormalScale),
  });

  const pebble_aMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: pebble_aOptions.metalness,
    roughness: pebble_aOptions.roughness,
    transmission: pebble_aOptions.transmission,
    ior: pebble_aOptions.ior,
    reflectivity: pebble_aOptions.reflectivity,
    thickness: pebble_aOptions.thickness,
    envMap: hdrEquirect,
    envMapIntensity: pebble_aOptions.envMapIntensity,
    clearcoat: pebble_aOptions.clearcoat,
    clearcoatRoughness: pebble_aOptions.clearcoatRoughness,
    normalScale: new THREE.Vector2(pebble_aOptions.normalScale),
    normalMap: normalMapTexture,
    clearcoatNormalMap: normalMapTexture,
    clearcoatNormalScale: new THREE.Vector2(pebble_aOptions.clearcoatNormalScale),
  });

  const pebble_bMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: pebble_bOptions.metalness,
    roughness: pebble_bOptions.roughness,
    transmission: pebble_bOptions.transmission,
    ior: pebble_bOptions.ior,
    reflectivity: pebble_bOptions.reflectivity,
    thickness: pebble_bOptions.thickness,
    envMap: hdrEquirect,
    envMapIntensity: pebble_bOptions.envMapIntensity,
    clearcoat: pebble_bOptions.clearcoat,
    clearcoatRoughness: pebble_bOptions.clearcoatRoughness,
    normalScale: new THREE.Vector2(pebble_bOptions.normalScale),
    normalMap: normalMapTexture,
    clearcoatNormalMap: normalMapTexture,
    clearcoatNormalScale: new THREE.Vector2(pebble_bOptions.clearcoatNormalScale),
  });

  const pebble_cMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: pebble_cOptions.metalness,
    roughness: pebble_cOptions.roughness,
    transmission: pebble_cOptions.transmission,
    ior: pebble_cOptions.ior,
    reflectivity: pebble_cOptions.reflectivity,
    thickness: pebble_cOptions.thickness,
    envMap: hdrEquirect,
    envMapIntensity: pebble_cOptions.envMapIntensity,
    clearcoat: pebble_cOptions.clearcoat,
    clearcoatRoughness: pebble_cOptions.clearcoatRoughness,
    normalScale: new THREE.Vector2(pebble_cOptions.normalScale),
    normalMap: normalMapTexture,
    clearcoatNormalMap: normalMapTexture,
    clearcoatNormalScale: new THREE.Vector2(pebble_cOptions.clearcoatNormalScale),
  });

  const pebbleAMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: pebbleAOptions.metalness,
    roughness: pebbleAOptions.roughness,
    transmission: pebbleAOptions.transmission,
    ior: pebbleAOptions.ior,
    reflectivity: pebbleAOptions.reflectivity,
    thickness: pebbleAOptions.thickness,
    envMap: hdrEquirect,
    envMapIntensity: pebbleAOptions.envMapIntensity,
    clearcoat: pebbleAOptions.clearcoat,
    clearcoatRoughness: pebbleAOptions.clearcoatRoughness,
    normalScale: new THREE.Vector2(pebbleAOptions.normalScale),
    normalMap: normalMapTexture,
    clearcoatNormalMap: normalMapTexture,
    clearcoatNormalScale: new THREE.Vector2(pebbleAOptions.clearcoatNormalScale),
  });

  const pebbleBMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: pebbleBOptions.metalness,
    roughness: pebbleBOptions.roughness,
    transmission: pebbleBOptions.transmission,
    ior: pebbleBOptions.ior,
    reflectivity: pebbleBOptions.reflectivity,
    thickness: pebbleBOptions.thickness,
    envMap: hdrEquirect,
    envMapIntensity: pebbleBOptions.envMapIntensity,
    clearcoat: pebbleBOptions.clearcoat,
    clearcoatRoughness: pebbleBOptions.clearcoatRoughness,
    normalScale: new THREE.Vector2(pebbleBOptions.normalScale),
    normalMap: normalMapTexture,
    clearcoatNormalMap: normalMapTexture,
    clearcoatNormalScale: new THREE.Vector2(pebbleBOptions.clearcoatNormalScale),
  });

  const soundwaveMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: soundwaveOptions.metalness,
    roughness: soundwaveOptions.roughness,
    transmission: soundwaveOptions.transmission,
    ior: soundwaveOptions.ior,
    reflectivity: soundwaveOptions.reflectivity,
    thickness: soundwaveOptions.thickness,
    envMap: hdrEquirect,
    envMapIntensity: soundwaveOptions.envMapIntensity,
    clearcoat: soundwaveOptions.clearcoat,
    clearcoatRoughness: soundwaveOptions.clearcoatRoughness,
    normalScale: new THREE.Vector2(soundwaveOptions.normalScale),
    normalMap: normalMapTexture,
    clearcoatNormalMap: normalMapTexture,
    clearcoatNormalScale: new THREE.Vector2(soundwaveOptions.clearcoatNormalScale),
  });
  
  // Define variables to store the translation values
  let rotationX = 0;
  let rotationY = 0;
  let translationX = 0;
  let translationY = -10;

  // Add mousemove event listener to the document
  document.addEventListener("mousemove", updateModelPosition);

  // Function to handle mouse movement and update the model's position
  function updateModelPosition(event) {
    // Get the mouse position relative to the viewport
    const mouse = {
      x: (event.clientX / window.innerWidth) * 1 - 0.5,
      y: -(event.clientY / window.innerHeight) * 1 + 0.5,
    };

    // Update translation based on mouse position
    rotationX = Math.PI / 2 + mouse.y * 1;
    rotationY = Math.PI / 2 + mouse.x * 1;
    rotationZ = Math.PI / 2 + mouse.x * 2;
    translationX = mouse.x * 6;
    translationY = 0 + mouse.y * 2;

    swirlrotationX = Math.PI / 2 + mouse.y * 1;

    // Apply the new translation to the model
    heartMesh.rotation.x = rotationX;
    // heartMesh.rotation.y = rotationY;
    heartMesh.rotation.z = rotationZ;
    heartMesh.position.x = translationX / 2;
    heartMesh.position.y = translationY / 2;
    
    swirlMesh.rotation.y = swirlrotationX * 10;

    arrowMesh.rotation.x = rotationX;
    arrowMesh.rotation.y = rotationY;
    arrowMesh.rotation.z = rotationZ;
    arrowMesh.position.x = translationX / 2;
    arrowMesh.position.y = translationY / 2;

    pebble_aMesh.rotation.x = rotationX;
    pebble_aMesh.rotation.y = rotationY;
    pebble_aMesh.rotation.z = rotationZ;
    pebble_aMesh.position.x = translationX / 2;
    pebble_aMesh.position.y = translationY / 2;

    pebble_bMesh.rotation.x = rotationX;
    pebble_bMesh.rotation.y = rotationY;
    pebble_bMesh.rotation.z = rotationZ;
    pebble_bMesh.position.x = translationX / 2;
    pebble_bMesh.position.y = translationY / 2;

    pebble_cMesh.rotation.x = rotationX;
    pebble_cMesh.rotation.y = rotationY;
    pebble_cMesh.rotation.z = rotationZ;
    pebble_cMesh.position.x = translationX / 2;
    pebble_cMesh.position.y = translationY / 2;

    pebbleAMesh.rotation.x = rotationX;
    pebbleAMesh.rotation.y = rotationY;
    pebbleAMesh.rotation.z = rotationZ;
    pebbleAMesh.position.x = translationX / 2;
    pebbleAMesh.position.y = translationY / 2;

    pebbleBMesh.rotation.x = rotationX;
    pebbleBMesh.rotation.y = rotationY;
    pebbleBMesh.rotation.z = rotationZ;
    pebbleBMesh.position.x = translationX / 2;
    pebbleBMesh.position.y = translationY / 2;

    soundwaveMesh.rotation.x = rotationX;
    soundwaveMesh.rotation.y = rotationY;
    soundwaveMesh.rotation.z = rotationZ;
    soundwaveMesh.position.x = translationX / 2;
    soundwaveMesh.position.y = translationY / 2;

  }

  let heartMeshName = "";
  let swirlMeshName = "";
  let arrowMeshName = "";
  let pebble_aMeshName = "";
  let pebble_bMeshName = "";
  let pebble_cMeshName = "";
  let pebbleAMeshName = "";
  let pebbleBMeshName = "";
  let soundwaveMeshName = "";

  // Load GLTF heart model
  new THREE.GLTFLoader().load("src/heart.glb", (gltf) => {
    
    const heartModel = gltf.scene.children.find((mesh) => mesh.name === "Heart");
    const heartMeshName = heartModel.name; // Store the mesh name in a variable
    console.log(heartMeshName);
    // Just copy the geometry from the loaded model
    const heartGeometry = heartModel.geometry.clone();

    // Adjust geometry to suit our scene
    heartGeometry.rotateX(Math.PI / 0.5);
    heartGeometry.rotateY(Math.PI / 0.5);
    heartGeometry.rotateZ(Math.PI / 0.65);
    heartGeometry.translate(5, -10, 0);

    // Create a new mesh and place it in the scene
    heartMesh = new THREE.Mesh(heartGeometry, heartMaterial);
    heartMesh.scale.set(0.1, 0.1, 0.1);
    scene.add(heartMesh);
    

    // Discard the loaded model
    heartGeometry.dispose();
    heartMaterial.dispose();

    heartMesh.rotation.x = rotationX;
    heartMesh.position.x = translationX;
    heartMesh.position.y = translationY;
    let heartVis = heartMesh.visible = true;
  });

  // Load GLTF swirl model
  new THREE.GLTFLoader().load("src/swirl.glb", (gltf) => {
    const swirlModel = gltf.scene.children.find((mesh) => mesh.name === "swirl");
    const swirlMeshName = swirlModel.name; // Store the mesh name in a variable
    console.log(swirlMeshName);
    // Just copy the geometry from the loaded model
    const swirlGeometry = swirlModel.geometry.clone();

    // Adjust geometry to suit our scene
    swirlGeometry.rotateX(Math.PI / 0.4);
    swirlGeometry.rotateY(Math.PI / 0.5);
    swirlGeometry.translate(0, 10, 5);

    // Create a new mesh and place it in the scene
    swirlMesh = new THREE.Mesh(swirlGeometry, swirlMaterial);
    swirlMesh.scale.set(0.02, 0.02, 0.02);
    scene.add(swirlMesh);
    

    // Discard the loaded model
    gltf.scene.children.forEach((child) => {
      child.swirlGeometry.dispose();
      child.swirlMaterial.dispose();
    });

    swirlMesh.rotation.x = rotationX;
    swirlMesh.position.x = translationX;
    swirlMesh.position.y = translationY;
    let swirlVis = swirlMesh.visible = true;
  });

  // Load GLTF arrow model
  new THREE.GLTFLoader().load("src/arrow.glb", (gltf) => {
    const arrowModel = gltf.scene.children.find((mesh) => mesh.name === "arrow");
    const arrowMeshName = arrowModel.name; // Store the mesh name in a variable
    console.log(arrowMeshName);
    // Just copy the geometry from the loaded model
    const arrowGeometry = arrowModel.geometry.clone();

    // Adjust geometry to suit our scene
    arrowGeometry.rotateX(Math.PI / 0.4);
    arrowGeometry.rotateY(Math.PI / 0.5);
    arrowGeometry.translate(0, 10, 5);

    // Create a new mesh and place it in the scene
    arrowMesh = new THREE.Mesh(arrowGeometry, arrowMaterial);
    arrowMesh.scale.set(0.02, 0.02, 0.02);
    scene.add(arrowMesh);
    

    // Discard the loaded model
    gltf.scene.children.forEach((child) => {
      child.arrowGeometry.dispose();
      child.arrowMaterial.dispose();
    });

    arrowMesh.rotation.x = rotationX;
    arrowMesh.position.x = translationX;
    arrowMesh.position.y = translationY;
    let arrowVis = arrowMesh.visible = true;
  });

  // Load GLTF pebble_a model
  new THREE.GLTFLoader().load("src/pebble_a.glb", (gltf) => {
    const pebble_aModel = gltf.scene.children.find((mesh) => mesh.name === "pebble_a_remesh");
    const pebble_aMeshName = pebble_aModel.name; // Store the mesh name in a variable
    console.log(pebble_aMeshName);
    // Just copy the geometry from the loaded model
    const pebble_aGeometry = pebble_aModel.geometry.clone();

    // Adjust geometry to suit our scene
    pebble_aGeometry.rotateX(Math.PI / 0.4);
    pebble_aGeometry.rotateY(Math.PI / 0.5);
    pebble_aGeometry.translate(0, 10, 5);

    // Create a new mesh and place it in the scene
    pebble_aMesh = new THREE.Mesh(pebble_aGeometry, pebble_aMaterial);
    pebble_aMesh.scale.set(0.02, 0.02, 0.02);
    scene.add(pebble_aMesh);
    

    // Discard the loaded model
    gltf.scene.children.forEach((child) => {
      child.pebble_aGeometry.dispose();
      child.pebble_aMaterial.dispose();
    });

    pebble_aMesh.rotation.x = rotationX;
    pebble_aMesh.position.x = translationX;
    pebble_aMesh.position.y = translationY;
    let pebble_aVis = pebble_aMesh.visible = true;
  });

  // Load GLTF pebble_b model
  new THREE.GLTFLoader().load("src/pebble_b.glb", (gltf) => {
    const pebble_bModel = gltf.scene.children.find((mesh) => mesh.name === "pebble_a_remesh");
    const pebble_bMeshName = pebble_bModel.name; // Store the mesh name in a variable
    console.log(pebble_bMeshName);
    // Just copy the geometry from the loaded model
    const pebble_bGeometry = pebble_bModel.geometry.clone();

    // Adjust geometry to suit our scene
    pebble_bGeometry.rotateX(Math.PI / 0.4);
    pebble_bGeometry.rotateY(Math.PI / 0.5);
    pebble_bGeometry.translate(0, 10, 5);

    // Create a new mesh and place it in the scene
    pebble_bMesh = new THREE.Mesh(pebble_bGeometry, pebble_bMaterial);
    pebble_bMesh.scale.set(0.02, 0.02, 0.02);
    scene.add(pebble_bMesh);
    

    // Discard the loaded model
    gltf.scene.children.forEach((child) => {
      child.pebble_bGeometry.dispose();
      child.pebble_bMaterial.dispose();
    });

    pebble_bMesh.rotation.x = rotationX;
    pebble_bMesh.position.x = translationX;
    pebble_bMesh.position.y = translationY;
    let pebble_bVis = pebble_bMesh.visible = true;
  });

  // Load GLTF pebble_c model
  new THREE.GLTFLoader().load("src/pebble_c.glb", (gltf) => {
    const pebble_cModel = gltf.scene.children.find((mesh) => mesh.name === "pebble_c_remesh");
    const pebble_cMeshName = pebble_cModel.name; // Store the mesh name in a variable
    console.log(pebble_cMeshName);
    // Just copy the geometry from the loaded model
    const pebble_cGeometry = pebble_cModel.geometry.clone();

    // Adjust geometry to suit our scene
    pebble_cGeometry.rotateX(Math.PI / 0.4);
    pebble_cGeometry.rotateY(Math.PI / 0.5);
    pebble_cGeometry.translate(0, 10, 5);

    // Create a new mesh and place it in the scene
    pebble_cMesh = new THREE.Mesh(pebble_cGeometry, pebble_cMaterial);
    pebble_cMesh.scale.set(0.02, 0.02, 0.02);
    scene.add(pebble_cMesh);
    

    // Discard the loaded model
    gltf.scene.children.forEach((child) => {
      child.pebble_cGeometry.dispose();
      child.pebble_cMaterial.dispose();
    });

    pebble_cMesh.rotation.x = rotationX;
    pebble_cMesh.position.x = translationX;
    pebble_cMesh.position.y = translationY;
    let pebble_cVis = pebble_cMesh.visible = true;
  });

  // Load GLTF pebbleA model
  new THREE.GLTFLoader().load("src/pebbleA.glb", (gltf) => {
    const pebbleAModel = gltf.scene.children.find((mesh) => mesh.name === "Metaball.1_remesh");
    const pebbleAMeshName = pebbleAModel.name; // Store the mesh name in a variable
    console.log(pebbleAMeshName);
    // Just copy the geometry from the loaded model
    const pebbleAGeometry = pebbleAModel.geometry.clone();

    // Adjust geometry to suit our scene
    pebbleAGeometry.rotateX(Math.PI / 0.4);
    pebbleAGeometry.rotateY(Math.PI / 0.5);
    pebbleAGeometry.translate(0, 10, 5);

    // Create a new mesh and place it in the scene
    pebbleAMesh = new THREE.Mesh(pebbleAGeometry, pebbleAMaterial);
    pebbleAMesh.scale.set(0.02, 0.02, 0.02);
    scene.add(pebbleAMesh);
    

    // Discard the loaded model
    gltf.scene.children.forEach((child) => {
      child.pebbleAGeometry.dispose();
      child.pebbleAMaterial.dispose();
    });

    pebbleAMesh.rotation.x = rotationX;
    pebbleAMesh.position.x = translationX;
    pebbleAMesh.position.y = translationY;
    let pebbleAVis = pebbleAMesh.visible = true;
  });

  // Load GLTF pebbleB model
  new THREE.GLTFLoader().load("src/pebbleB.glb", (gltf) => {
    const pebbleBModel = gltf.scene.children.find((mesh) => mesh.name === "Metaball.2_remesh");
    const pebbleBMeshName = pebbleBModel.name; // Store the mesh name in a variable
    console.log(pebbleBMeshName);
    // Just copy the geometry from the loaded model
    const pebbleBGeometry = pebbleBModel.geometry.clone();

    // Adjust geometry to suit our scene
    pebbleBGeometry.rotateX(Math.PI / 0.4);
    pebbleBGeometry.rotateY(Math.PI / 0.5);
    pebbleBGeometry.translate(0, 10, 5);

    // Create a new mesh and place it in the scene
    pebbleBMesh = new THREE.Mesh(pebbleBGeometry, pebbleBMaterial);
    pebbleBMesh.scale.set(0.02, 0.02, 0.02);
    scene.add(pebbleBMesh);
    

    // Discard the loaded model
    gltf.scene.children.forEach((child) => {
      child.pebbleBGeometry.dispose();
      child.pebbleBMaterial.dispose();
    });

    pebbleBMesh.rotation.x = rotationX;
    pebbleBMesh.position.x = translationX;
    pebbleBMesh.position.y = translationY;
    let pebbleBVis = pebbleBMesh.visible = true;
  });

  // Load GLTF soundwave model
  new THREE.GLTFLoader().load("src/soundwave.glb", (gltf) => {
    const soundwaveModel = gltf.scene.children.find((mesh) => mesh.name === "soundwave");
    const soundwaveMeshName = soundwaveModel.name; // Store the mesh name in a variable
    console.log(soundwaveMeshName);
    // Just copy the geometry from the loaded model
    const soundwaveGeometry = soundwaveModel.geometry.clone();

    // Adjust geometry to suit our scene
    soundwaveGeometry.rotateX(Math.PI / 0.4);
    soundwaveGeometry.rotateY(Math.PI / 0.5);
    soundwaveGeometry.translate(0, 10, 5);

    // Create a new mesh and place it in the scene
    soundwaveMesh = new THREE.Mesh(soundwaveGeometry, soundwaveMaterial);
    soundwaveMesh.scale.set(0.02, 0.02, 0.02);
    scene.add(soundwaveMesh);
    

    // Discard the loaded model
    gltf.scene.children.forEach((child) => {
      child.soundwaveGeometry.dispose();
      child.soundwaveMaterial.dispose();
    });

    soundwaveMesh.rotation.x = rotationX;
    soundwaveMesh.position.x = translationX;
    soundwaveMesh.position.y = translationY;
    let soundwaveVis = soundwaveMesh.visible = true;
  });
  // Create six sections and append them to the body

  // Add the canvas with fixed position
  const canvasStyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: -1, // Ensure the canvas stays above other elements
  };

  Object.assign(canvas.style, canvasStyles);
  document.body.appendChild(canvas);

  // Set body display to block
  document.body.style.display = 'block';

  const modelOne = 'src/pebble_a.glb';
  const modelTwo = 'src/pebble_b.glb';
  const modelThree = 'src/pebble_c.glb';
  const modelFour = 'src/swirl.glb';
  const modelFive = 'src/soundwave.glb';
  const modelSix = 'src/arrow.glb';
  const modelSeven = 'src/heart.glb';
  const modelEight = 'src/brain.glb';
  const meshOne = 'Heart';
  const meshTwo = 'pebble_a_remesh';
  const meshThree = 'swirl';
  const meshFour = 'soundwave';
  const meshFive = 'soundwave';
  const meshSix = 'arrow';
  const meshSeven = 'Heart';
  // const meshEight = 'brain' d;

  // Create sections below the canvas
  const models = [modelOne, modelTwo, modelThree, modelFour, modelFive, modelSix];
  const meshes = [meshOne, meshTwo, meshThree, meshFour, meshFive, meshSix];

  for (let i = 0; i < 6; i++) {
    const section = document.createElement("div");
    section.className = "section";
    section.style.height = "100vh"; // Set the section's height to 100vh
    section.id = `section-${i}`; // Assign a unique ID to each section

    // Add data attributes with values from the corresponding variables
    section.setAttribute('data-model', models[i]);
    section.setAttribute('data-mesh', meshes[i]);

    document.body.appendChild(section);
  }

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.bottom > 0 &&
    rect.top < window.innerHeight
  );
}

// Function to log the data-mesh attribute if a section is in the viewport
function logVisibleSections() {
  const sections = document.querySelectorAll('[data-mesh]');
  sections.forEach(section => {
      if (isInViewport(section)) {
          const meshValue = section.getAttribute('data-mesh');
          if (meshValue === heartMeshName) {
            // console.log(`Section "${meshValue}" is in the viewport and matches heartMeshName.`);
           }
          if (meshValue === swirlMeshName) {
           // console.log(`Section "${meshValue}" is in the viewport and matches swirlMeshName.`);
        }

      }
  });
}

// Call the logVisibleSections function when the page loads or when scrolling
document.addEventListener('DOMContentLoaded', logVisibleSections);
window.addEventListener('scroll', logVisibleSections);

  // GUI
  // ---

  gui.add(options, "enableSwoopingCamera").onChange((val) => {
    controls.enabled = !val;
    controls.reset();
  });

  gui.add(options, "enableRotation").onChange(() => {
    if (heartMesh) heartMesh.rotation.set(0, 0, 0);
    if (swirlMesh) swirlMesh.rotation.set(0, 0, 0);
    if (arrowMesh) arrowMesh.rotation.set(0, 0, 0);
    if (pebble_aMesh) pebble_aMesh.rotation.set(0, 0, 0);
    if (pebble_bMesh) pebble_bMesh.rotation.set(0, 0, 0);
    if (pebble_cMesh) pebble_cMesh.rotation.set(0, 0, 0);
    if (pebbleAMesh) pebbleAMesh.rotation.set(0, 0, 0);
    if (pebbleBMesh) pebbleBMesh.rotation.set(0, 0, 0);
    if (soundwaveMesh) soundwaveMesh.rotation.set(0, 0, 0);
  });

  gui.addColor(options, "color").onChange((val) => {
    heartMaterial.color.set(val);
    swirlMaterial.color.set(val);
    arrowMaterial.color.set(val);
    pebble_aMaterial.color.set(val);
    pebble_bMaterial.color.set(val);
    pebble_cMaterial.color.set(val);
    pebbleAMaterial.color.set(val);
    pebbleBMaterial.color.set(val);
    soundwaveMaterial.color.set(val);
  });

  gui.add(options, "roughness", 0, 1, 0.01).onChange((val) => {
    heartMaterial.roughness = val;
    swirlMaterial.roughness = val;
    arrowMaterial.roughness = val;
    pebble_aMaterial.roughness = val;
    pebble_bMaterial.roughness = val;
    pebble_cMaterial.roughness = val;
    pebbleAMaterial.roughness = val;
    pebbleBMaterial.roughness = val;
    soundwaveMaterial.roughness = val;
  });

  gui.add(options, "metalness", 0, 1, 0.01).onChange((val) => {
    heartMaterial.metalness = val;
    swirlMaterial.metalness = val;
    arrowMaterial.metalness = val;
    pebble_aMaterial.metalness = val;
    pebble_bMaterial.metalness = val;
    pebble_cMaterial.metalness = val;
    pebbleAMaterial.metalness = val;
    pebbleBMaterial.metalness = val;
    soundwaveMaterial.metalness = val;
   
  });

  gui.add(options, "transmission", 0, 1, 0.01).onChange((val) => {
    heartMaterial.transmission = val;
    swirlMaterial.transmission = val;
    arrowMaterial.transmission = val;
    pebble_aMaterial.transmission = val;
    pebble_bMaterial.transmission = val;
    pebble_cMaterial.transmission = val;
    pebbleAMaterial.transmission = val;
    pebbleBMaterial.transmission = val;
    soundwaveMaterial.transmission = val;
  });

  gui.add(options, "ior", 1, 2.33, 0.01).onChange((val) => {
    heartMaterial.ior = val;
    swirlMaterial.ior = val;
    arrowMaterial.ior = val;
    pebble_aMaterial.ior = val;
    pebble_bMaterial.ior = val;
    pebble_cMaterial.ior = val;
    pebbleAMaterial.ior = val;
    pebbleBMaterial.ior = val;
    soundwaveMaterial.ior = val;
  });

  gui.add(options, "reflectivity", 0, 1, 0.01).onChange((val) => {
    heartMaterial.reflectivity = val;
    swirlMaterial.reflectivity = val;
    arrowMaterial.reflectivity = val;
    pebble_aMaterial.reflectivity = val;
    pebble_bMaterial.reflectivity = val;
    pebble_cMaterial.reflectivity = val;
    pebbleAMaterial.reflectivity = val;
    pebbleBMaterial.reflectivity = val;
    soundwaveMaterial.reflectivity = val;
  });

  gui.add(options, "thickness", 0, 5, 0.1).onChange((val) => {
    heartMaterial.thickness = val;
    swirlMaterial.thickness = val;
    arrowMaterial.thickness = val;
    pebble_aMaterial.thickness = val;
    pebble_bMaterial.thickness = val;
    pebble_cMaterial.thickness = val;
    pebbleAMaterial.thickness = val;
    pebbleBMaterial.thickness = val;
    soundwaveMaterial.thickness = val;
  });

  gui.add(options, "envMapIntensity", 0, 3, 0.1).onChange((val) => {
    heartMaterial.envMapIntensity = val;
    swirlMaterial.envMapIntensity = val;
    arrowMaterial.envMapIntensity = val;
    pebble_aMaterial.envMapIntensity = val;
    pebble_bMaterial.envMapIntensity = val;
    pebble_cMaterial.envMapIntensity = val;
    pebbleAMaterial.envMapIntensity = val;
    pebbleBMaterial.envMapIntensity = val;
    soundwaveMaterial.envMapIntensity = val;
  });

  gui.add(options, "clearcoat", 0, 1, 0.01).onChange((val) => {
    heartMaterial.clearcoat = val;
    swirlMaterial.clearcoat = val;
    arrowMaterial.clearcoat = val;
    pebble_aMaterial.clearcoat = val;
    pebble_bMaterial.clearcoat = val;
    pebble_cMaterial.clearcoat = val;
    pebbleAMaterial.clearcoat = val;
    pebbleBMaterial.clearcoat = val;
    soundwaveMaterial.clearcoat = val;
  });

  gui.add(options, "clearcoatRoughness", 0, 1, 0.01).onChange((val) => {
    heartMaterial.clearcoatRoughness = val;
    swirlMaterial.clearcoatRoughness = val;
    arrowMaterial.clearcoatRoughness = val;
    pebble_aMaterial.clearcoatRoughness = val;
    pebble_bMaterial.clearcoatRoughness = val;
    pebble_cMaterial.clearcoatRoughness = val;
    pebbleAMaterial.clearcoatRoughness = val;
    pebbleBMaterial.clearcoatRoughness = val;
    soundwaveMaterial.clearcoatRoughness = val;
  });

  gui.add(options, "normalScale", 0, 5, 0.01).onChange((val) => {
    heartMaterial.normalScale.set(val, val);
    swirlMaterial.normalScale.set(val, val);
    arrowMaterial.normalScale.set(val, val);
    pebble_aMaterial.normalScale.set(val, val);
    pebble_bMaterial.normalScale.set(val, val);
    pebble_cMaterial.normalScale.set(val, val);
    pebbleAMaterial.normalScale.set(val, val);
    pebbleBMaterial.normalScale.set(val, val);
    soundwaveMaterial.normalScale.set(val, val);
  });

  gui.add(options, "clearcoatNormalScale", 0, 5, 0.01).onChange((val) => {
    heartMaterial.clearcoatNormalScale.set(val, val);
    swirlMaterial.clearcoatNormalScale.set(val, val);
    arrowMaterial.clearcoatNormalScale.set(val, val);
    pebble_aMaterial.clearcoatNormalScale.set(val, val);
    pebble_bMaterial.clearcoatNormalScale.set(val, val);
    pebble_cMaterial.clearcoatNormalScale.set(val, val);
    pebbleAMaterial.clearcoatNormalScale.set(val, val);
    pebbleBMaterial.clearcoatNormalScale.set(val, val);
    soundwaveMaterial.clearcoatNormalScale.set(val, val);
  });

  gui.add(options, "normalRepeat", 1, 4, 1).onChange((val) => {
    normalMapTexture.repeat.set(val, val);
    swirlMaterial.repeat.set(val, val);
    
  });
  
  // Update
  // ------

  const update = (time, deltaTime) => {
    const ROTATE_TIME = 10; // Time in seconds for a full rotation
    const xAxis = new THREE.Vector3(1, 0, 0);
    const yAxis = new THREE.Vector3(0, 1, 0);
    const rotateX = (deltaTime / ROTATE_TIME) * Math.PI * 2;
    const rotateY = (deltaTime / ROTATE_TIME) * Math.PI * 2;

    if (options.enableRotation && mesh) {
      mesh.rotateOnWorldAxis(xAxis, rotateX);
      mesh.rotateOnWorldAxis(yAxis, rotateY);
    }

    if (options.enableSwoopingCamera) {
      camera.position.x = Math.sin((time / 10) * Math.PI * 2) * 2;
      camera.position.y = Math.cos((time / 10) * Math.PI * 2) * 2;
      camera.position.z = 4;
      camera.lookAt(scene.position);
    }
  };

  // Lifecycle
  return {
    resize({canvas, pixelRatio, viewportWidth, viewportHeight }) {
      const dpr = Math.min(pixelRatio, 2); // Cap DPR scaling to 2x

      canvas.width = viewportWidth * dpr;
      canvas.height = viewportHeight * dpr;
      canvas.style.width = viewportWidth + "px";
      canvas.style.height = viewportHeight + "px";

      renderer.setPixelRatio(dpr);
      renderer.setSize(viewportWidth, viewportHeight);

      composer.setPixelRatio(dpr);
      composer.setSize(viewportWidth, viewportHeight);

      camera.aspect = viewportWidth / viewportHeight;
      camera.updateProjectionMatrix();
    },
    render({ time, deltaTime }) {
      controls.update();
      update(time, deltaTime);

        //heartMesh.visible = heartVis; // Update heart mesh visibility
        //swirlMesh.visible = swirlVis; // Update swirl mesh visibility

      composer.render();
    },
    unload() {
      heartMesh.geometry.dispose();
      heartMaterial.dispose();
      swirlMesh.geometry.dispose();
      swirlMaterial.dispose();
      arrowMesh.geometry.dispose();
      arrowMaterial.dispose();
      pebble_aMesh.geometry.dispose();
      pebble_aMaterial.dispose();
      pebble_bMesh.geometry.dispose();
      pebble_bMaterial.dispose();
      pebble_cMesh.geometry.dispose();
      pebble_cMaterial.dispose();
      pebbleAMesh.geometry.dispose();
      pebbleAMaterial.dispose();
      pebbleBMesh.geometry.dispose();
      pebbleBMaterial.dispose();
      soundwaveMesh.geometry.dispose();
      soundwaveMaterial.dispose();
      hdrEquirect.dispose();
      controls.dispose();
      renderer.dispose();
    },
  };
};



canvasSketch(sketch, settings);
