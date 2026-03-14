<template>
  <section
    ref="slideRef"
    class="period-slide"
    @pointerenter="requestModelLoad"
    @focusin="requestModelLoad"
  >
    <div class="period-copy">
      <p class="period-label">{{ label }}</p>
      <h2>{{ title }}</h2>
      <p class="period-summary">{{ summary }}</p>

      <ul>
        <li v-for="point in highlights" :key="point">
          <font-awesome-icon icon="fa-solid fa-lightbulb" />
          <span>{{ point }}</span>
        </li>
      </ul>

      <Button
        icon="fa-solid fa-globe"
        :label="buttonLabel ?? 'Vstoupit do éry'"
        :on-click="onButtonClick"
      />
    </div>
    <div v-if="modelSrc" class="model-shell">
      <Model
        v-if="shouldLoadModel"
        :modelSrc="modelSrc"
        :rotation="modelRotation"
        :model-aria-label="`3D model for ${title}`"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineAsyncComponent, onBeforeUnmount, onMounted, ref } from "vue";
import Button from "./Button.vue";

const Model = defineAsyncComponent(() => import("./Model.vue"));
const slideRef = ref<HTMLElement | null>(null);
const shouldLoadModel = ref(false);
let visibilityObserver: IntersectionObserver | null = null;

const props = defineProps<{
  title: string;
  summary: string;
  highlights: string[];
  label?: string;
  buttonLabel?: string;
  modelSrc?: string;
  modelRotation?: number;
  onButtonClick?: () => void;
}>();

const requestModelLoad = () => {
  if (!props.modelSrc || shouldLoadModel.value) {
    return;
  }

  shouldLoadModel.value = true;
  visibilityObserver?.disconnect();
  visibilityObserver = null;
};

onMounted(() => {
  if (!props.modelSrc) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    requestModelLoad();
    return;
  }

  visibilityObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.35) {
          continue;
        }

        requestModelLoad();
        break;
      }
    },
    {
      threshold: [0.1, 0.35, 0.6],
    },
  );

  if (slideRef.value) {
    visibilityObserver.observe(slideRef.value);
  }
});

onBeforeUnmount(() => {
  visibilityObserver?.disconnect();
  visibilityObserver = null;
});
</script>

<style scoped>
.period-slide {
  width: 100%;
  height: 100%;
  padding: 3rem clamp(1rem, 4vw, 4rem);
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 2rem;
  align-items: center;
}

.period-copy h2 {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-family: "Archivo Black", sans-serif;
  line-height: 1.1;
}

.period-copy {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.period-label {
  color: var(--primary-color);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.85rem;
  margin-bottom: 0.75rem;
}

.period-summary {
  color: #bdbdbd;
  margin-top: 1rem;
  max-width: 58ch;
}

ul {
  list-style: none;
  margin-top: 1.5rem;
  display: grid;
  gap: 0.8rem;
}

li {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-size: 1.05rem;
}

li svg {
  color: var(--primary-color);
}

.model-shell {
  min-height: 500px;
}

@media (max-width: 960px) {
  .period-slide {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 2rem 1rem;
  }
}
</style>
