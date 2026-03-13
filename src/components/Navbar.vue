<template>
  <nav>
    <h1>
      <TextGradient primaryColor="#3FA34D" secondaryColor="#137547"
        >Retro</TextGradient
      >
      Net
    </h1>
    <slot></slot>
  </nav>
</template>

<script setup lang="ts">
import TextGradient from "./TextGradient.vue";
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 2rem;
  border-radius: 12px;
  margin: 1rem;
  box-shadow: 0px 0px 12px var(--primary-color);
}
</style>
