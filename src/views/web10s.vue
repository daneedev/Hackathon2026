<script setup>
import { RouterLink } from "vue-router";
import ExhibitCard from "../components/exhibitCard.vue";
</script>

<template>
  <nav>
    <header>
      <p>Web 2010. léta</p>
      <p>Interaktivní modely a exponáty</p>
      <section>
        <RouterLink to="/">Domov</RouterLink>
        <RouterLink to="/web90">90. léta</RouterLink>
        <RouterLink to="/web2000">2000. léta</RouterLink>
        <RouterLink to="/web2020">Současnost</RouterLink>
      </section>
    </header>
  </nav>
  <main>
    <article>
      <section class="heroSection">
        <h1>Vítejte na webu 2010. let</h1>
      </section>
      <section></section>
    </article>
  </main>
</template>

<style scoped>
:root {
  --page-bg: #f5f6f7;
  --primary-color: #3498db;
  --text-color: #7f8c8d;
  --primary-dark: #2980b9;
  --header-text: #ffffff;
}

main {
  background-color: var(--page-bg);
}
nav {
  background-color: #2c3e50;
  color: #ffffff;
}
</style>
