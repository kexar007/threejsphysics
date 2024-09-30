import * as THREE from 'three'

const canvas = document.querySelector('canvas.canvas');

//scene
const scene = new THREE.Scene();

//objects
const cubegeo= new THREE.BoxGeometry(1,1,1);
const material=new THREE.MeshBasicMaterial({color:'red'});
const cube=new THREE.Mesh(cubegeo,material);
scene.add(cube);

//camera
const sizes = {
    width:800,
    height:600
}
const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height);
camera.position.z=3;
scene.add(camera);

//renderer
const renderer=new THREE.WebGLRenderer({
    canvas:canvas
});
renderer.setSize(sizes.width,sizes.height);
renderer.render(scene,camera);

//animation function 
function animate(){
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01;



    renderer.render(scene,camera)
};
animate();