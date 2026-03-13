<script setup lang="ts">
import Button from "./components/Button.vue";
import Navbar from "./components/Navbar.vue";
import TextGradient from "./components/TextGradient.vue";
import Slider from "./components/Slider.vue";
import { SwiperSlide } from "swiper/vue";
import Slide from "./components/Slide.vue";
</script>

<!--<template>
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
  <Slider>
    <SwiperSlide>
      <Slide
        title="90. léta"
        label="První krůčky"
        summary="Internet byl pomalejší, ale každé pripojení bylo malé dobrodružství. Rodily se první weby, chaty i online komunity."
        :highlights="[
          'Dial-up připojení a zvuk modemu',
          'První diskuzní fora a emailové seznamy',
          'ICQ, GeoCities a Yahoo éra',
        ]"
        model-src="/models/CRT.glb"
        :model-rotation="Math.PI - 0.5"
      />
    </SwiperSlide>
    <SwiperSlide>
      <Slide
        title="2000. léta"
        summary="Web se zrychlil, přišel broadband a sociální sítě. Internet se z nadšeneckého prostoru stal běžnou součástí každého dne."
        :highlights="[
          'Nástup broadbandu a Wi-Fi',
          'Blogy, fora a záčatky sociálních siti',
          'YouTube, Wikipedia a první viralní obsah',
        ]"
        model-src="/models/TV.glb"
        :model-rotation="Math.PI + 1.25"
      />
    </SwiperSlide>
  </Slider>
</template>

<style scoped>
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.hero-text {
  font-size: 3rem;
  font-family: "Archivo Black", sans-serif;
}
p {
  font-size: 1.25rem;
  color: #777;
  margin-bottom: 1rem;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.3s ease;
}
</style>-->