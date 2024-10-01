import * as THREE from 'three'

const canvas = document.querySelector('canvas.canvas');

//scene
const scene = new THREE.Scene();

//objects
const cubegeo= new THREE.BoxGeometry(2,2,2);
const material=new THREE.MeshStandardMaterial({color:'red'});
const cube=new THREE.Mesh(cubegeo,material);
cube.rotation.y=3;
scene.add(cube);

//lights
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(2,2,2);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight);

 //Helpers

 /* const lightHelper = new THREE.PointLightHelper(pointLight)
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
renderer.setClearColor( 0xffffff, 0);
renderer.setSize(sizes.width,sizes.height);
renderer.render(scene,camera);

//animation function 
function animate(){
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01;



    renderer.render(scene,camera)
};
animate();