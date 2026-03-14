<template>
  <div
    ref="container"
    class="viewer"
    role="img"
    :aria-label="props.modelAriaLabel || 'Interactive 3D model'"
  ></div>
  <p v-if="loadError" class="viewer-error">Model could not be loaded.</p>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const container = ref(null);
const loadError = ref(false);
let animationFrameId = 0;
let cleanupFn = null;

const props = defineProps({
  modelSrc: String,
  rotation: Number,
  scale: Number,
  modelAriaLabel: String,
});

onMounted(() => {
  if (!container.value) {
    return;
  }

  const host = container.value;
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    30,
    host.clientWidth / host.clientHeight,
    0.1,
    1000,
  );
  camera.position.set(1, 1, 3);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true, // transparent background
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(host.clientWidth, host.clientHeight);

  host.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  const swiperElement = host.closest(".swiper");
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

  const stopPointerPropagation = (event) => {
    event.stopPropagation();
  };

  renderer.domElement.addEventListener("pointerdown", stopPointerPropagation);
  renderer.domElement.addEventListener("wheel", stopPointerPropagation);

  const resizeRenderer = () => {
    const width = Math.max(host.clientWidth, 1);
    const height = Math.max(host.clientHeight, 1);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  };

  const resizeObserver = new ResizeObserver(() => {
    resizeRenderer();
  });
  resizeObserver.observe(host);
  resizeRenderer();

  const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
  scene.add(light);

  const loader = new GLTFLoader();

  if (props.modelSrc) {
    loader.load(
      props.modelSrc,
      (gltf) => {
        gltf.scene.rotation.y = props.rotation ?? 0;
        const modelScale = props.scale ?? 1;
        gltf.scene.scale.setScalar(modelScale);
        scene.add(gltf.scene);
      },
      undefined,
      () => {
        loadError.value = true;
      },
    );
  }

  function animate() {
    animationFrameId = requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }

  animate();

  cleanupFn = () => {
    cancelAnimationFrame(animationFrameId);
    resizeObserver.disconnect();
    controls.removeEventListener("start", lockSwiper);
    controls.removeEventListener("end", unlockSwiper);
    controls.dispose();
    renderer.domElement.removeEventListener(
      "pointerdown",
      stopPointerPropagation,
    );
    renderer.domElement.removeEventListener("wheel", stopPointerPropagation);

    scene.traverse((object) => {
      if (!object.isMesh) {
        return;
      }

      object.geometry?.dispose();

      if (Array.isArray(object.material)) {
        object.material.forEach((material) => material.dispose());
      } else {
        object.material?.dispose();
      }
    });

    renderer.dispose();
    if (host.contains(renderer.domElement)) {
      host.removeChild(renderer.domElement);
    }
  };
});

onBeforeUnmount(() => {
  cleanupFn?.();
  cleanupFn = null;
});
</script>

<style>
.viewer {
  width: 100%;
  height: 500px;
}

.viewer-error {
  margin-top: 0.75rem;
  color: #d16b6b;
  font-size: 0.9rem;
}
</style>
