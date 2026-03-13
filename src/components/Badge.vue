<template>
  <div>{{ props.label }}</div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
  color: string;
  backgroundColor: string;
  borderColor: string;
}>();
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  background-color: v-bind("props.backgroundColor");
  color: v-bind("props.color");
  border: 2px solid v-bind("props.borderColor");
  font-weight: 600;
}
</style>
