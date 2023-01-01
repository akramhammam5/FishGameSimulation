//importing THREE to a namespace called 'three'.
import * as THREE from 'three';
import { AxesHelper, BoxGeometry, Light, PerspectiveCamera } from 'three'; //kol elhagat elmabein el braces dol bn3mlhom import mn threejs library
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';//orbitcontrol ashan n3rf nstkhdm elmouse input
import { GLTFLoader, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';//ashan ykhliny a3rf anzl el gltf wnzlha ka objects
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils';

import sea from './WhatsApp Image 2022-12-22 at 10.07.39 PM.jpeg'; 

const fish = new URL('./clown_fish.glb',import.meta.url); //constant variables bn3mlha create ashan n2dr nnady 3aliha taht fel code

//const sea2 = new URL('./animated_ocean_scene_tutorial_example_1.glb',import.meta.url);

const octopus = new URL('./happy_octopus.glb',import.meta.url);

const goldfish = new URL('./Goldfish.glb',import.meta.url);

const particle = new URL('./the_fish_particle.glb',import.meta.url);

const kingfish = new URL('./Kingfish.glb',import.meta.url);



const loading = new THREE.LoadingManager();

const progressBar = document.getElementById('progress');


/*loading.onStart = function(url, item , total)
{
    console.log(`Started loading: ${url}`);
}*/

loading.onProgress = function(url, loaded, total)
{
    progressBar.value = (loaded / total ) * 100;
}

const progressBarContainer = document.querySelector('.progress-bar');
loading.onLoad = function(url, item, total)
{
    progressBarContainer.style.display = 'none';
}


/*loading.onError = function(url)
{
    console.log(`Got a problem loading: ${url}`);
}*/





//Add and animate all the stuff in a web page space using webgl.
const renderer = new THREE.WebGLRenderer(); //ben-create render ashan kol mab3ml function baktb b3dha render ashan yrsm el object

//All over the page.
renderer.setSize( window.innerWidth, window.innerHeight ); // de bta3t window kolha

document.body.appendChild(renderer.domElement);// da byshghl elcanvas nfso 



const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 500 );//75 da el angle 1 wel 500 dol near wel far w elwindow.innerWidth da el aspectRatio

//orbit = new OrbitControls(camera , renderer.domElement);

camera.position.set( 0, 0, 30 );//.set btb2a function gahza bgbly el x,y,z 

//Call upadate method every time camera position is changed.
//orbit.update();

//camera.lookAt( 0, 0, 0 );

//Creating A scene.

const scene1 = new THREE.Scene();//bnhot gwa el objects

//Defining components of a Box.
textureloader = new THREE.TextureLoader();
scene1.background = textureloader.load(sea);

const loader = new GLTFLoader(loading);//da ashan nhot el objects nfsha

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
// const cube = new THREE.Mesh( geometry, material );
// scene1.add( cube )
// mixer=new THREE.AnimationMixer(scene1);
// firstClip = Object.values(cube.animations)[0];
// action=mixer.clipAction(cube.animations)[0];
// action.play();
//action.play();
// Save this mixer somewhere

loader.load(fish.href,function(gltf){//load de function gahza btakhod aktr mn perameter el fish.href ashan ageib refrence bta3 object whoto wfunction(gltf) bnstkhdmo ashan nhot el object gwa elscene w nzboto
    model = gltf.scene;
    scene1.add(model);//bthotly el object fel scene
    model.position.set(0,0,-20);
    //model.rotation.x = 150;
    //model.rotation.y = 100;
},function(error){
    console.log("error");
})


loader.load(octopus.href,function(gltf){
    model1 = gltf.scene;
    scene1.add(model1);
    model1.position.set(10,20,-30 );
//    // Save this mixer somewhere
// mixer = new THREE.AnimationMixer(model1 );
//  animation = THREE.AnimationClipCreator.CreateRotationAnimation(100, "y");
// mixer.clipAction(animation ).play();
// clock = new THREE.Clock();
 
// //In the animation block of your scene:
// var delta = 0.75 * clock.getDelta();
// mixer.update( delta );

//    mixer= new THREE.AnimationMixer(gltf.scene1);
//    animationAciton=mixer.clipAction(gltf.animations[0]).play();
    //animationActions.push(animationAction);

    // var clip = new THREE.AnimationClip( 'Action', 3, [ scaleKF, positionKF, quaternionKF, colorKF, opacityKF ] );

    // // setup the AnimationMixer
    // mixer = new THREE.AnimationMixer( mesh );

    // // create a ClipAction and set it to play
    // var clipAction = mixer.clipAction( clip );
    // clipAction.play();


},function(error){
    console.log("error");
})




loader.load(goldfish.href,function(gltf){
    model2 = gltf.scene;
    //scene1.add(model2);
    
   // model2.position.set(-100,50,-200)

   //const clips = gltf.animations;
   const fishes = new THREE.AnimationObjectGroup();
   mixer = new THREE.AnimationMixer(fishes);
   //const clip = THREE.AnimationClip.findByName(clips,'Fish_001_animate_preview');
   //const action = mixer.clipAction(clip);
   //action.play();
    for(let i=0; i<50; i++)
    {
        const clone = SkeletonUtils.clone(model2);
        clone.matrixAutoUpdate = false;
        scene1.add(clone);
        fishes.add(clone);

    }
}
,
function(error){
    console.log("error");
})

const clock = new THREE.Clock(); 

function animate()
{
    const clockDelta = clock.getDelta();
    if(mixer)
        mixer.update(clockDelta);
    const delta = time.update().getDelta();
    entityManager.update(delta);
    renderer.render(scene1,camera);
}
renderer.setAnimationLoop(animate);


loader.load(particle.href,function(gltf){
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

const directionalLight = new THREE.PointLight(0xFFFFFF, 1);
scene1.add(directionalLight);
directionalLight.position.set(3, 3, 3);
var y=1;
var z=1;
var x=1;



function removeOctopus(){
    //remove the red cube when the sphere collides with the red cube

      if(Math.abs(model.position.x - model1.position.x)<5 && Math.abs(model.position.y - model1.position.y)<5){
   
          scene1.remove(model1);
          console.log("hello");
        }
       
     console.log(Math.abs(model.position.x - model1.position.x)<45 && Math.abs(model.position.z - model1.position.z)<45)
       renderer.render(scene1,camera);
       
   };
   function init() {
    
    skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
    skybox = new THREE.Mesh(skyboxGeo);
    scene1.add(skybox);
  
    animate();
   }
   function animate() {

    skybox.rotation.x += 0.005;

    skybox.rotation.y += 0.005;

    renderer.render(scene1, camera);

    requestAnimationFrame(animate);

}
createMaterialArray();
skyboxGeo=new THREE.BoxGeometry(10000,10000,10000);
skybox=new THREE.Mesh(skyboxGeo,materialArray);

       scene1.add(skybox);

       			
     animate();
 
 
 function createMaterialArray(filename) {
     const skyBoxImagepaths=[
                           filename +'./'+filename+ '1-2640955885.jpg',
                           filename +'./'+filename+ '172898-3351646972.jpg',
                           filename +'./'+filename+ 'underwater-background-under-sea-surface-water-texture-unusual-backdrop-37742852.jpg',
                           filename +'./'+filename+ 'th-2059325924.jpg',
                           filename +'./'+filename+ 'sand-under-sea-abstract-marine-design-template-blue-deep-ocean-180905891.jpg',
                           filename +'./'+filename+ 'empty-underwater-blue-shine-abstract-background-light-bright-clean-ocean-sea_1284-42065.webp'];
materialArray=new Array();
for (i=0;i<skyBoxImagepaths.length;i++){
   texture=new THREE.TextureLoader().load(skyBoxImagepaths[i]);
   materialArray[i]=new THREE.MeshBasicMaterial({map: texture,side: THREE.BackSide});


}
return materialArray;
}
createMaterialArray();

/*function init() {




  const materialArray = createMaterialArray(skyboxImage);

  skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);

  skybox = new THREE.Mesh(skyboxGeo, materialArray);

  scene1.add(skybox);


  animate();

}*/
	document.onkeydown = function(e) {
		if(e.keyCode == '38')//Up
            model.position.y+=0.5;
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
        removeOctopus();
        
      };
    
    

var rotateGoldfish = function(){
    requestAnimationFrame(rotateGoldfish);
    //model2.translateZ(+2);
    //model2.rotateY(0.05);
    //model2.rotateX(0.02);
    //action.play();
//     mixer = new THREE.AnimationMixer(octopus );
// animation = THREE.AnimationClipCreator.CreateRotationAnimation(100, "y");
// mixer.clipAction(animation ).play();
// clock = new THREE.Clock();
// //In the animation block of your scene:
// var delta = 0.75 * clock.getDelta();
// mixer.update( delta );
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
init();

//sky();
//rotateStarfish()
