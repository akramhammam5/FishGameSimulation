//importing THREE to a namespace called 'three'.
import * as THREE from 'three';

//Add and animate all the stuff in a web page space using webgl.
const render = new THREE.WebGL1Renderer();

//All over the page.
render.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(render.domElement);


