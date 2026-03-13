<template>
  <div>
    <main>
      <div class="start">
        <h1>Start</h1>
        <div class="start-section">
          <div class="run-cta">
            <img src="/right-green-arrow.png" alt="Arrow" />
            <button type="button" class="run-button" @click="enterWebsite">
              Run RetroNet.exe
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (event: "enter"): void;
}>();

function enterWebsite() {
  emit("enter");
}
</script>

<style scoped lang="css">
@import url("https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap");

main {
  font-family: "Pixelify Sans", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-image: url(/crt-monitor.png);
  background-size: cover;
}
.start-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 15em;
  height: 10em;
  border: 1px solid var(--primary-color);
  background-color: black;
  color: var(--primary-color);
}
.start h1 {
  font-size: 1.5em;
  background-color: var(--primary-color);
  color: black;
  width: 100%;
  display: flex;
  justify-content: center;
}
.run-button {
  font: inherit;
  border: 0;
  background: transparent;
  cursor: pointer;
  color: var(--primary-color);
  text-decoration: none;
  padding: 0;
}
.run-cta {
  display: flex;
  align-items: center;
  gap: 0.5em;
}
.run-cta img {
  width: 1.5em;
  height: 1.5em;
}
.run-button:hover,
.run-button:focus-visible {
  text-decoration: underline;
  outline: none;
}
</style>
