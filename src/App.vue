<script setup lang="ts">
import Button from "./components/Button.vue";
import Navbar from "./components/Navbar.vue";
import TextGradient from "./components/TextGradient.vue";
</script>

<template>
  <Navbar>
    <a class="nav-link" href="#">90.léta</a>
    <a class="nav-link" href="#">2000.léta</a>
    <a class="nav-link" href="#">2010.léta</a>
    <a class="nav-link" href="#">2020.léta</a>
  </Navbar>
  <section class="hero-section">
    <h1 class="hero-text">
      Vítejte v muzeu
      <TextGradient primaryColor="#3FA34D" secondaryColor="#137547"
        >internetu</TextGradient
      >
    </h1>
    <p>
      Prozkoumejte historii internetu a jeho vývoj od 90. let až po současnost.
    </p>
    <Button icon="fa-solid fa-eye" label="Začít prozkoumávat" />
  </section>
</template>

<style scoped>
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hero-text {
  font-size: 3rem;
  font-family: "Archivo Black", sans-serif;
}
p {
  font-size: 1.25rem;
  color: #777;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.3s ease;
}
</style>
