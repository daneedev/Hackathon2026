<template>
  <button :class="props.variant" @click="props.onClick">
    <font-awesome-icon v-if="props.icon" :icon="props.icon" /> {{ props.label }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
  icon?: string;
  variant?: "home" | "retro90s" | "web2000s" | "web2010s" | "web2020s";
  onClick?: () => void;
}>();
</script>

<style scoped>
button {
  border: 1px solid var(--primary-color);
  background: linear-gradient(120deg, #1b2d1d, #111);
  color: #eaffec;
  font-family: "Archivo", sans-serif;
  padding: 0.8rem 1.25rem;
  border-radius: 10px;
  font-weight: 700;
  letter-spacing: 0.02em;
  cursor: var(--btn-cursor, url("/cursor-32.png") 3 3, pointer);
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 0 rgba(63, 163, 77, 0);
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    filter 0.22s ease;
}

button:hover {
  cursor: var(
    --btn-cursor-hover,
    var(--btn-cursor, url("/cursor-32.png") 3 3, pointer)
  );
  transform: translateY(-2px) scale(1.01);
  box-shadow: 0 10px 24px rgba(63, 163, 77, 0.28);
  filter: brightness(1.08);
}

button.home {
  --btn-cursor: url("/cursor-32.png") 3 3, pointer;
  --btn-cursor-hover: url("/cursor-32.png") 3 3, pointer;
}

button.retro90s {
  --btn-cursor: url("/cursor90s.png") 3 3, pointer;
  --btn-cursor-hover: url("/cursor90s.png") 3 3, pointer;
  font-family: "Bitcount Single", monospace;
  background: linear-gradient(180deg, #f8f8f8, #cbcbcb);
  border: 2px solid #000;
  color: #001dff;
  border-radius: 0;
  box-shadow: 3px 3px 0 #000;
}

button.retro90s:hover {
  transform: translate(-1px, -1px);
  box-shadow: 4px 4px 0 #000;
  filter: none;
}

button.web2000s {
  --btn-cursor: pointer;
  --btn-cursor-hover: pointer;
  font-family: "Inter", sans-serif;
  background: linear-gradient(#bfc3c8, #7c8288);
  border: 1px solid #4f5459;
  color: #fff;
  border-radius: 6px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.35);
}

button.web2000s:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.22);
  filter: brightness(1.05);
}

button.web2010s {
  --btn-cursor: pointer;
  --btn-cursor-hover: pointer;
  font-family: "Archivo", sans-serif;
  background: linear-gradient(180deg, #3498db, #2980b9);
  border: 1px solid #1f5f8d;
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 6px 14px rgba(41, 128, 185, 0.35);
}

button.web2010s:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 20px rgba(41, 128, 185, 0.45);
}

button.web2020s {
  --btn-cursor:
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Ccircle cx='10' cy='10' r='8' fill='none' stroke='%2338BDF8' stroke-width='1.5'/%3E%3Ccircle cx='10' cy='10' r='2' fill='%2338BDF8'/%3E%3C/svg%3E")
      10 10,
    pointer;
  --btn-cursor-hover:
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 22 22'%3E%3Ccircle cx='11' cy='11' r='9' fill='none' stroke='%2349B8F3' stroke-width='1.6'/%3E%3Ccircle cx='11' cy='11' r='2.4' fill='%2349B8F3'/%3E%3C/svg%3E")
      11 11,
    pointer;
  font-family: "Archivo", sans-serif;
  background: linear-gradient(
    120deg,
    rgba(73, 184, 243, 0.28),
    rgba(27, 90, 157, 0.28)
  );
  border: 1px solid rgba(73, 184, 243, 0.55);
  color: #dff4ff;
  border-radius: 999px;
  box-shadow: 0 8px 20px rgba(27, 90, 157, 0.35);
}

button.web2020s:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 26px rgba(27, 90, 157, 0.5);
  filter: brightness(1.07);
}
</style>
