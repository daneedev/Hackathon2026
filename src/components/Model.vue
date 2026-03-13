<template>
  <div ref="container" class="viewer"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const container = ref(null);

const props = defineProps({
  modelSrc: String,
  rotation: Number,
  scale: Number,
});

onMounted(() => {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    30,
    container.value.clientWidth / container.value.clientHeight,
    0.1,
    1000,
  );
  camera.position.set(1, 1, 3);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true, // transparent background
  });

  renderer.setSize(container.value.clientWidth, container.value.clientHeight);

  container.value.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  const swiperElement = container.value.closest(".swiper");
  const swiperInstance = swiperElement?.swiper;

  const lockSwiper = () => {
    if (swiperInstance) {
      swiperInstance.allowTouchMove = false;
    }
  };

  const unlockSwiper = () => {
    if (swiperInstance) {
      swiperInstance.allowTouchMove = true;
    }
  };

  controls.addEventListener("start", lockSwiper);
  controls.addEventListener("end", unlockSwiper);

  renderer.domElement.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
  });

  renderer.domElement.addEventListener("wheel", (event) => {
    event.stopPropagation();
  });

  const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
  scene.add(light);

  const loader = new GLTFLoader();

  loader.load(props.modelSrc, (gltf) => {
    gltf.scene.rotation.y = props.rotation;
    const modelScale = props.scale ?? 1;
    gltf.scene.scale.setScalar(modelScale);

    scene.add(gltf.scene);
  });

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }

  animate();
});
</script>

<style>
.viewer {
  width: 100%;
  height: 500px;
}
</style>
