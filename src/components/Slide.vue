<template>
  <section class="period-slide">
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

      <Button icon="fa-solid fa-globe" label="Vstoupit do éry" />
    </div>
    <Model v-if="modelSrc" :modelSrc="modelSrc" />
  </section>
</template>

<script setup lang="ts">
import Button from "./Button.vue";
import Model from "./Model.vue";

const props = defineProps<{
  title: string;
  summary: string;
  highlights: string[];
  label?: string;
  modelSrc?: string;
}>();
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

@media (max-width: 960px) {
  .period-slide {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 2rem 1rem;
  }
}
</style>
