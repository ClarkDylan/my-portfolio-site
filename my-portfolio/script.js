const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
camera.position.z = 1;
camera.position.x = Math.PI / 2
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#background')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera)
const earthTexture = new THREE.TextureLoader().load('earth-2d.png')
const normalTexture = new THREE.TextureLoader().load('normal-texture.jpg')
const geometry = new THREE.SphereGeometry(15, 32, 16);
const material = new THREE.MeshStandardMaterial({ map: earthTexture, normalMap: normalTexture });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(35, 35, 35);

const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight);

// function addStar() {
//   const geometry = new THREE.SphereGeometry(.25, 24, 23);
//   const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
//   const sphere = new THREE.Mesh(geometry, material);

//   const [x, y, z] = Array(3).fill.map(() => THREE.MathUtils.randFloatSpread(100));
//   star.position.set(x, y, z)

//   scene.add(star);
// }

// Array(200).fill().forEach(addStar)

const spaceBG = new THREE.TextureLoader().load('blue-nebula.jpg')
scene.background = spaceBG;

function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.y += .005
  renderer.render(scene, camera);
}

animate();

