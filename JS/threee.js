//importing THREE to a namespace called 'three'.
import * as THREE from 'three';
import { AxesHelper, BoxGeometry, Light, PerspectiveCamera } from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import sea from './underwater-background-water-surface-ocean-sea-swimming-pool-transparent-aqua-texture-with-air-bubbles-ripples-sun-rays-falling-template-advertising-realistic-3d-illustration/21034573.jpg';

const fish = new URL('./shiny_fish.glb',import.meta.url);

const sea2 = new URL('./animated_ocean_scene_tutorial_example_1.glb',import.meta.url);

const bubble = new URL('./bubbles.glb',import.meta.url);


//Add and animate all the stuff in a web page space using webgl.
const renderer = new THREE.WebGLRenderer();

//All over the page.
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild(renderer.domElement);



const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 500 );

orbit = new OrbitControls(camera , renderer.domElement);

camera.position.set( 0, 0, 30 );

//Call upadate method every time camera position is changed.
orbit.update();

camera.lookAt( 0, 0, 0 );

//Creating A scene.

const scene1 = new THREE.Scene();

//Defining components of a Box.
textureloader = new THREE.TextureLoader();
scene1.background = textureloader.load(sea);

const loader = new GLTFLoader();

loader.load(fish.href,function(gltf){
    const model = gltf.scene;
    scene1.add(model);
    model.position.set(0,0,0)
},undefined,function(error){
    console.log("error");
})

loader.load(bubble.href,function(gltf){
    const model2 = gltf.scene;
    scene1.add(model2);
    model2.position.set(-5,-10,9)
},undefined,function(error){
    console.log("error");
})


const ambientLight = new THREE.AmbientLight(0x333333);
scene1.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
scene1.add(directionalLight);
directionalLight.position.set(3, 3, 3);
function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene1, camera );
}
animate();





