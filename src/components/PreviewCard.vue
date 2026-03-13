<template>
  <article>
    <h3>{{ props.value }}</h3>
    <p>{{ props.label }}</p>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{
  value: string;
  label: string;
}>();
</script>

<style scoped>
article {
  border: 1px solid #2f4d36;
  border-radius: 12px;
  padding: 1rem;
  background: linear-gradient(
    150deg,
    rgba(30, 48, 34, 0.45),
    rgba(11, 11, 11, 0.92)
  );
}

article h3 {
  margin-bottom: 0.4rem;
  font-family: "Archivo Black", sans-serif;
  font-size: 1.05rem;
}

article p {
  color: #9aa49d;
  font-size: 0.95rem;
}
</style>
