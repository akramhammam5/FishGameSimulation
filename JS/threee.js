//importing THREE to a namespace called 'three'.
import * as THREE from 'three';
import { AxesHelper, BoxGeometry, Light, PerspectiveCamera } from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


const fish = new URL('./shiny_fish.glb',import.meta.url);

const sea = new URL('./anchor_on_the_sea_floor.glb',import.meta.url);
//Add and animate all the stuff in a web page space using webgl.
const renderer = new THREE.WebGLRenderer();

//All over the page.
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild(renderer.domElement);



const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 500 );

orbit = new OrbitControls(camera , renderer.domElement);

camera.position.set( 0, 5, 100 );

//Call upadate method every time camera position is changed.
orbit.update();

camera.lookAt( 0, 0, 0 );

//Creating A scene.

const scene1 = new THREE.Scene();

//Defining components of a Box.


const loader = new GLTFLoader();

loader.load(fish.href,function(gltf){
    const model = gltf.scene;
    scene1.add(model);
    model.position.set(-5,-10,9)
},undefined,function(error){
    console.log("error");
})


loader.load(sea.href,function(gltf){
    const model1 = gltf.scene;
    scene1.add(model1);
    model1.position.set(-12,5,-50)
},undefined,function(error){
    console.log("error");
})


light = new THREE.AmbientLight(0xFFFFFF);
scene1.add(light);
Dlight = new THREE.DirectionalLight(0xFFFFFF, 5);
scene1.add(Dlight);
function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene1, camera );
}
animate();




