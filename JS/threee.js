//importing THREE to a namespace called 'three'.
import * as THREE from 'three';
import { AxesHelper, BoxGeometry, Light, PerspectiveCamera } from 'three';

//Add and animate all the stuff in a web page space using webgl.
const renderer = new THREE.WebGL1Renderer();

//All over the page.
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

//Creating A scene.
const scene = new THREE.Scene();

const cam = new PerspectiveCamera(75,window.innerWidth,window.innerHeight,0.1,1000);
cam.position.set(0,0,0);

//Defining components of a Box.
BoxGeo = new THREE.BoxGeometry();

Boxmaterial = new THREE.MeshBasicMaterial({color:0x00FF00});

Box = new THREE.Mesh(BoxGeo,Boxmaterial);

scene.add(Box);

renderer.render(scene,cam);


