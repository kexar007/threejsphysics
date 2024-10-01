import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js';

const canvas = document.querySelector('canvas.canvas');

//scene
const scene = new THREE.Scene();

//objects
const object= new THREE.IcosahedronGeometry(2,2);
const material=new THREE.MeshStandardMaterial({

    color:'white',
    flatShading:true

});
const obj=new THREE.Mesh(object,material);


const wiremat= new THREE.MeshBasicMaterial({
    color:'white',
    wireframe:true
})
const wireframe = new THREE.Mesh(object,wiremat)
wireframe.scale.setScalar(1.001)
obj.add(wireframe)


scene.add(obj);

//lights
const mainLight = new THREE.HemisphereLight('blue','orange')

scene.add(mainLight);

 //Helpers

 /* const lightHelper = new THREE.PointLightHelper(mainLight)
 const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper) */

//camera
const sizes = {
    width:innerWidth,
    height:innerHeight
}
const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height);
camera.position.z=6;
scene.add(camera);

//renderer
const renderer=new THREE.WebGLRenderer({
    canvas:canvas,
    antialias:true
});
/* renderer.setClearColor( 0xffffff, 0); */
renderer.setSize(sizes.width,sizes.height);
renderer.render(scene,camera);

//control
const control = new OrbitControls(camera,renderer.domElement)

//animation function 
function animate(){
    requestAnimationFrame(animate)
    obj.rotation.y += 0.002;



    renderer.render(scene,camera)
};
animate();