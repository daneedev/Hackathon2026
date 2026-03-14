<script setup lang="ts">
import Model from './Model.vue';

const props = defineProps<{
    title: string;
    content: string;
    comments: string;
    modelSrc: string;
}>();
</script>
<template>
    <section class="news-card">
        <h1>{{title}}</h1>
        <p>{{content}}</p>
        <div class="buttons">
        <a class="readMore">Číst dál →</a>
        <p class="comments">💬 {{comments}} Komentářů</p>
        </div>
        <!--<img :src="img">-->
    </section>
</template>
<style scoped lang="css">
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Pixelify+Sans:wght@400..700&display=swap');
.btn
{
  display: flex;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  border: none;
  background: linear-gradient(#014cfc, #0198fc);
  color: white;
}
.buttons{
  display: flex;
  gap: 1em;
}
.news-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  background-color: white;
}
.news-card h1 {
  font-size: 1.5rem;
  font-weight: bold;
}
.readMore {
  color: #0198fc;
  text-decoration: underline;
  cursor: pointer;
}
.comments {
  color: #777;
}
</style>