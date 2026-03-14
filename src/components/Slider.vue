<template>
  <Swiper
    :modules="[Navigation, Keyboard, Pagination]"
    :direction="'horizontal'"
    :pagination="{
      type: 'progressbar',
      el: '.swiper-pagination',
    }"
    :navigation="true"
    :slides-per-view="1"
    :mousewheel="{ enabled: false }"
    :keyboard="{ enabled: true }"
    :loop="false"
    class="timeline-swiper"
    :style="{
      '--swiper-pagination-progressbar-bg-color': 'rgba(63, 163, 77, 0.25)',
      '--swiper-theme-color': 'var(--primary-color)',
    }"
    @slide-change="playSlideChangeSound"
  >
    <slot>
      <SwiperSlide>
        <div class="slide-content">Pridej slidy pres slot v App.vue</div>
      </SwiperSlide>
    </slot>
    <div class="swiper-pagination"></div>
  </Swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useSoundPlayer } from "../composables/useSoundPlayer";

const { playSound } = useSoundPlayer();

function playSlideChangeSound() {
  playSound("/sounds/whoosh.mp3", 4.5, 4.7);
}
</script>

<style scoped>
.timeline-swiper {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
}

.slide-content {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  font-size: 2rem;
  font-family: "Archivo Black", sans-serif;
}
.swiper-pagination {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
}
</style>
