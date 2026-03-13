<template>
  <span><slot></slot></span>
</template>

<script setup lang="ts">
const props = defineProps<{
  primaryColor: string;
  secondaryColor: string;
}>();
</script>

<style scoped>
span {
  background: linear-gradient(
    90deg,
    v-bind(primaryColor),
    v-bind(secondaryColor)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
