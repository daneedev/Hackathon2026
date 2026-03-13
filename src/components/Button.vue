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
  background: none;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  border-radius: 12px;
  padding: 1rem 2rem;
  font-size: 1.25rem;
  font-weight: bold;
  transition: all 0.3s ease;
}

button:hover {
  background: var(--primary-color);
  color: #fff;
  cursor: pointer;
}
</style>
