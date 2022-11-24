//importing THREE to a namespace called 'three'.
import * as THREE from 'three';
import { AxesHelper, BoxGeometry, Light, PerspectiveCamera } from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
fishimport = new URL('./uploads_files_2454913_Carp.fbx', import.meta.url);

//Add and animate all the stuff in a web page space using webgl.
const renderer = new THREE.WebGLRenderer();

//All over the page.
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild(renderer.domElement);



const camera = new THREE.PerspectiveCamera( 5, window.innerWidth / window.innerHeight, 1, 500 );

//orbit = new OrbitControls(camera , renderer.domElement);

camera.position.set( 0, 2, 125 );

//Call upadate method every time camera position is changed.
//orbit.update();

camera.lookAt( 0, 0, 0 );

//Creating A scene.

const scene1 = new THREE.Scene();

//Defining components of a Box.

BoxGeo = new THREE.BoxGeometry(); //Geometry 

Material = new THREE.MeshStandardMaterial({color:0x0FF00F}); //Material

Box = new THREE.Mesh(BoxGeo,Material); //Geometry + material

scene1.add(Box);

fbxload = new FBXLoader();
const path = require('./uploads_files_2454913_Carp.fbx');
fbxload.load(path,function(fbx)
{
    const model = fbx.scene1;
    scene1.add(model);
    model.position.set(0,0,0);
},undefined);

//Rotating the shape with animation
function Animate()
{
    //Rotating the shape with 0.01 rads.
    
    Box.rotation.y += 0.01;
    Box.rotation.x += 0.01;
    renderer.render(scene1,camera);
}

light = new THREE.AmbientLight(0x555555);

scene1.add(light);

dLight= new THREE.DirectionalLight(0xFFFFFF,0.8);
scene1.add(dLight);



renderer.setAnimationLoop(Animate);



