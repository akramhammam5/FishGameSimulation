//importing THREE to a namespace called 'three'.
import * as THREE from 'three';
import { AxesHelper, BoxGeometry, Light, PerspectiveCamera } from 'three'; //kol elhagat elmabein el braces dol bn3mlhom import mn threejs library
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';//orbitcontrol ashan n3rf nstkhdm elmouse input
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';//ashan ykhliny a3rf anzl el gltf wnzlha ka objects

import sea from './underwater-world-ocean-corals-light-11570012516i3q0gtwkal.jpeg'; 

const fish = new URL('./shiny_fish.glb',import.meta.url); //constant variables bn3mlha create ashan n2dr nnady 3aliha taht fel code

//const sea2 = new URL('./animated_ocean_scene_tutorial_example_1.glb',import.meta.url);

const octopus = new URL('./happy_octopus.glb',import.meta.url);

const goldfish = new URL('./Goldfish.glb',import.meta.url);

const starfish = new URL('./Starfish.glb',import.meta.url);

const kingfish = new URL('./Kingfish.glb',import.meta.url);





const renderer = new THREE.WebGLRenderer(); //ben-create render ashan kol mab3ml function baktb b3dha render ashan yrsm el object

//All over the page.
renderer.setSize( window.innerWidth, window.innerHeight ); // de bta3t window kolha

document.body.appendChild(renderer.domElement);// da byshghl elcanvas nfso 



const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 500 );//75 da el angle 1 wel 500 dol near wel far w elwindow.innerWidth da el aspectRatio

orbit = new OrbitControls(camera , renderer.domElement);

camera.position.set( 0, 0, 30 );//.set btb2a function gahza bgbly el x,y,z 

//Call upadate method every time camera position is changed.
orbit.update();

//camera.lookAt( 0, 0, 0 );

//Creating A scene.

const scene1 = new THREE.Scene();//bnhot gwa el objects

//Defining components of a Box.
textureloader = new THREE.TextureLoader();
scene1.background = textureloader.load(sea);

const loader = new GLTFLoader();//da ashan nhot el objects nfsha

loader.load(fish.href,function(gltf){//load de function gahza btakhod aktr mn perameter el fish.href ashan ageib refrence bta3 object whoto wfunction(gltf) bnstkhdmo ashan nhot el object gwa elscene w nzboto
    model = gltf.scene;
    scene1.add(model);//bthotly el object fel scene
    model.position.set(0,0,0);
},function(error){
    console.log("error");
})


loader.load(octopus.href,function(gltf){
    model1 = gltf.scene;
    scene1.add(model1);
    model1.position.set(-10,-10,-30 );
    mixer= new THREE.AnimationMixer(gltf.scene);
    animationAciton=mixer.clipAction(gltf.animations[0]).play();
    animationActions.push(animationAction);

},function(error){
    console.log("error");
})


loader.load(goldfish.href,function(gltf){
    model2 = gltf.scene;
    scene1.add(model2);
    
    model2.position.set(-100,50,-200)
},function(error){
    console.log("error");
})

loader.load(starfish.href,function(gltf){
    model3 = gltf.scene;
    scene1.add(model3);
    
    model3.position.set(-30,-10,-20)
},function(error){
    console.log("error");
})

loader.load(kingfish.href,function(gltf){
    model4 = gltf.scene;
    scene1.add(model4);
    
    model4.position.set(80,60,-150)
},function(error){
    console.log("error");
})


	 
const ambientLight = new THREE.AmbientLight(0x333333); //create ambientLight
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
            x+=0.1;
            y+=0.1;
            z+=0.1;
         model.scale.set(x,y,z);
        //model.visible=false;

        }
        else if(e.keyCode == '68')//d
        {   
            x-=0.1;
             y-=0.1;
            z-=0.1;
            model.scale.set(x,y,z);
            //model.visible=true;
        }

        
      };

    

var rotateGoldfish = function(){
    requestAnimationFrame(rotateGoldfish);
    model2.translateZ(-2);
    model2.rotateY(0.05);
    model2.rotateX(0.02);
    model2.translateZ(+0.09);
    renderer.render(scene1, camera);
};

/*var rotateStarfish = function(){
    requestAnimationFrame(rotateStarfish);
    model3.translateZ(-2);
    model3.rotateY(0.5);
    model3.translateZ(+2);
    renderer.render(scene1, camera);

}; */
rotateGoldfish();
//rotateStarfish();
