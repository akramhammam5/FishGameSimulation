//importing THREE to a namespace called 'three'.
import * as THREE from 'three';
import { AxesHelper, BoxGeometry, Light, PerspectiveCamera } from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import sea from './underwater/WhatsApp Image 2022-11-28 at 2.38.57 AM.jpeg';

const fish = new URL('./shiny_fish.glb',import.meta.url);

const sea2 = new URL('./animated_ocean_scene_tutorial_example_1.glb',import.meta.url);

const octopus = new URL('./happy_octopus.glb',import.meta.url);


//Add and animate all the stuff in a web page space using webgl.
const renderer = new THREE.WebGLRenderer();

//All over the page.
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild(renderer.domElement);



const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 500 );

//orbit = new OrbitControls(camera , renderer.domElement);

camera.position.set( 0, 0, 30 );

//Call upadate method every time camera position is changed.
//orbit.update();

camera.lookAt( 0, 0, 0 );

//Creating A scene.

const scene1 = new THREE.Scene();

//Defining components of a Box.
textureloader = new THREE.TextureLoader();
scene1.background = textureloader.load(sea);

const loader = new GLTFLoader();

loader.load(fish.href,function(gltf){
    model = gltf.scene;
    scene1.add(model);
    model.scale.set(1,1,1);
    model.position.set(0,0,0);
},undefined,function(error){
    console.log("error");
})


loader.load(octopus.href,function(gltf){
    model1 = gltf.scene;
    scene1.add(model1);
    
    model1.position.set(-20,-5,-30 )
},undefined,function(error){
    console.log("error");
})

	 
const ambientLight = new THREE.AmbientLight(0x333333);
scene1.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
scene1.add(directionalLight);
directionalLight.position.set(3, 3, 3);
var y=1;
var z=1;
var x=1;
	document.onkeydown = function(e) {
		if(e.keyCode == '38')//Up
            model.position.y+=1;
		else if(e.keyCode == '39')//Right
		    model.position.x+=1;
		else if(e.keyCode == '37')//Left
            model.position.x-=1;
		else if(e.keyCode == '40')//Down
            model.position.y-=1;
        else if(e.keyCode == '73')//i 
        {   
            //x+=0.1;
        //     y+=0.1;
        //     z+=0.1;
        //     model.scale.set(x,y,z);
        model.visible=false;

        }
        else if(e.keyCode == '68')//d
        {   
            //x-=0.1;
        //     y-=0.1;
        //     z-=0.1;
        //     model.scale.set(x,y,z);
            model.visible=true;
        }
        
        // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(changes), gl.STATIC_DRAW);

        // color = [Math.random(), Math.random(), Math.random(), 1];
        // var colorLocation = gl.getUniformLocation(shaderProgram, "u_color");
        // gl.uniform4fv(colorLocation, color);

        // gl.clearColor(0.0, 0.0, 0.0, 1.0);
        // gl.clear(gl.COLOR_BUFFER_BIT);
        // gl.drawArrays(gl.POINTS, 0, 1);
        
      };

function animate() {
    
    requestAnimationFrame( animate );
    // z+=0.0001;
    // if(z>=0){
    //     z=-30;
    // }

    // model1.translateZ(z);
    
    renderer.render( scene1, camera );
}
var rotateOctpus = function(){
    requestAnimationFrame(rotateOctpus);
    model1.translateZ(-1);
    model1.rotateX(0.05);
    model1.translateZ(+1);
    renderer.render(scene1, camera);
    };
//rotateOctpus();
animate();
