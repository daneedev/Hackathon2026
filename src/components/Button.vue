<template>
  <button @click="props.onClick">
    <font-awesome-icon v-if="props.icon" :icon="props.icon" /> {{ props.label }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
  icon?: string;
  onClick?: () => void;
}>();
</script>

<style scoped>
button {
  border: 1px solid var(--primary-color);
  background: linear-gradient(120deg, #1b2d1d, #111);
  color: #eaffec;
  padding: 0.8rem 1.25rem;
  border-radius: 10px;
  font-weight: 700;
  letter-spacing: 0.02em;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 0 rgba(63, 163, 77, 0);
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    filter 0.22s ease;
}

button:hover {
  transform: translateY(-2px) scale(1.01);
  box-shadow: 0 10px 24px rgba(63, 163, 77, 0.28);
  filter: brightness(1.08);
}
</style>
