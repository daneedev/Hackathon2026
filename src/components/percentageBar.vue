<script setup lang="ts">
const props = defineProps<{
    title: string;
    percentage: number;
}>();
</script>
<template>
<div>
    <div class="stats-desc">
        <p>{{title }}</p>
        <p>{{percentage}}%</p>
    </div>
    <div class="percentage-bar"></div>
</div>
</template>
<style scoped>
.percentage-bar{
  width: 100%; height: 0.5rem;
  background: linear-gradient(
  to right,
  blue,
  orange v-bind(percentage + '%'),
  gray v-bind(percentage + '%'),
  gray 100%
  );
  border-radius: 1rem;
}
.stats-desc
{
  display: flex;
  width: 100%;
}
.stats-desc p:nth-child(1)
{
  width: 100%;
  display: flex;
  justify-content: flex-start
}
.stats-desc p:nth-child(2)
{
  width: 100%;
  display: flex;
  justify-content: flex-end
}
</style>