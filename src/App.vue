<script setup lang="ts">
import Button from "./components/Button.vue";
import Navbar from "./components/Navbar.vue";
import TextGradient from "./components/TextGradient.vue";
import Slider from "./components/Slider.vue";
import { SwiperSlide } from "swiper/vue";
import Slide from "./components/Slide.vue";
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
  <Slider>
    <SwiperSlide>
      <Slide
        title="90. léta"
        label="První krůčky"
        summary="Internet byl pomalejsi, ale kazde pripojeni bylo male dobrodruzstvi. Rodily se prvni weby, chaty i online komunity."
        :highlights="[
          'Dial-up pripojeni a zvuk modemu',
          'Prvni diskuzni fora a emailove seznamy',
          'ICQ, GeoCities a Yahoo era',
        ]"
        model-src="/models/CRT.glb"
      />
    </SwiperSlide>
    <SwiperSlide>
      <Slide
        title="2000. leta"
        summary="Web se zrychlil, prisel broadband a socialni site. Internet se z nadseneckeho prostoru stal beznou soucasti kazdeho dne."
        :highlights="[
          'Nastup broadbandu a Wi-Fi',
          'Blogy, fora a zacatky socialnich siti',
          'YouTube, Wikipedia a prvni viralni obsah',
        ]"
        :websites="[
          {
            name: 'YouTube 2006 (Web Archive)',
            url: 'https://web.archive.org/web/20060701000000*/youtube.com',
          },
          {
            name: 'Wikipedia 2004 (Web Archive)',
            url: 'https://web.archive.org/web/20040801000000*/wikipedia.org',
          },
          {
            name: 'MySpace 2005 (Web Archive)',
            url: 'https://web.archive.org/web/20050901000000*/myspace.com',
          },
        ]"
      />
    </SwiperSlide>
    <SwiperSlide>
      <Slide
        title="90. leta"
        summary="Internet byl pomalejsi, ale kazde pripojeni bylo male dobrodruzstvi. Rodily se prvni weby, chaty i online komunity."
        :highlights="[
          'Dial-up pripojeni a zvuk modemu',
          'Prvni diskuzni fora a emailove seznamy',
          'ICQ, GeoCities a Yahoo era',
        ]"
        :websites="[
          { name: 'Space Jam 1996', url: 'https://www.spacejam.com/1996/' },
          {
            name: 'CNN 1998 (Web Archive)',
            url: 'https://web.archive.org/web/19981212015610/http://www.cnn.com/',
          },
          {
            name: 'Yahoo 1997 (Web Archive)',
            url: 'https://web.archive.org/web/19970110121110/http://www.yahoo.com/',
          },
        ]"
      />
    </SwiperSlide>
    <SwiperSlide>
      <Slide
        title="90. leta"
        summary="Internet byl pomalejsi, ale kazde pripojeni bylo male dobrodruzstvi. Rodily se prvni weby, chaty i online komunity."
        :highlights="[
          'Dial-up pripojeni a zvuk modemu',
          'Prvni diskuzni fora a emailove seznamy',
          'ICQ, GeoCities a Yahoo era',
        ]"
        :websites="[
          { name: 'Space Jam 1996', url: 'https://www.spacejam.com/1996/' },
          {
            name: 'CNN 1998 (Web Archive)',
            url: 'https://web.archive.org/web/19981212015610/http://www.cnn.com/',
          },
          {
            name: 'Yahoo 1997 (Web Archive)',
            url: 'https://web.archive.org/web/19970110121110/http://www.yahoo.com/',
          },
        ]"
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
</style>
