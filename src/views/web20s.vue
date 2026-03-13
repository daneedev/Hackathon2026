<template>
  <main>
    <section class="hero-section">
      <h1>
        Internet
        <TextGradient primaryColor="#3083DC" secondaryColor="#1B5A9D"
          >dneška</TextGradient
        >
      </h1>
    </section>
  </main>
</template>

<script setup lang="ts">
import TextGradient from "../components/TextGradient.vue";
</script>

<style scoped>
main {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: hsl(222 47% 11%);
  cursor: default;
}
.hero-section {
  display: flex;
}
</style>
