<script setup lang="ts">
import Button from "./components/Button.vue";
import Navbar from "./components/Navbar.vue";
import TextGradient from "./components/TextGradient.vue";
import Slider from "./components/Slider.vue";
import { SwiperSlide } from "swiper/vue";
import Slide from "./components/Slide.vue";
import PreviewCard from "./components/PreviewCard.vue";

const goToTimeline = () => {
  document.getElementById("timeline")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
</script>

<template>
  <section class="hero-section">
    <div class="hero-content">
      <p class="hero-kicker">Digitalni expozice</p>
      <h1 class="hero-text">
        Vítejte v muzeu
        <TextGradient primaryColor="#3FA34D" secondaryColor="#137547">
          internetu
        </TextGradient>
      </h1>
      <p class="hero-subtitle">
        Interaktivní prohlídka od modemového pískotu 90. let po AI současnost.
        Každou éru otevřes přes vlastní model a dobový obsah.
      </p>
      <div class="hero-actions">
        <Button
          icon="fa-solid fa-eye"
          label="Spustit prohlidku"
          :on-click="goToTimeline"
        />
      </div>
      <div class="hero-stats">
        <PreviewCard value="4 éry" label="90s, 2000s, 2010s, současnost" />
        <PreviewCard value="3D" label="Interaktivní modely" />
        <PreviewCard value="10+" label="modelů a exponátů" />
      </div>
    </div>
    <aside class="hero-preview" aria-label="Nahled er">
      <PreviewCard value="90. léta" label="CRT, modem, první komunity." />
      <PreviewCard value="2000s" label="Broadband, fora, socialni boom." />
      <PreviewCard value="2010s" label="Smartphony a streaming kultura." />
      <PreviewCard value="2020s" label="AI nastroje a hyper-propojeny web." />
    </aside>
  </section>
  <section id="timeline">
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
          label="Každodenní využití"
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
      <SwiperSlide>
        <Slide
          title="2010. léta"
          label="Mobilní revoluce"
          summary="Mobilní revoluce a sociální sítě změnily způsob, jakým komunikujeme a konzumujeme obsah. Internet se stal všudypřítomným."
          :highlights="[
            'Nástup smartphonů a mobilního internetu',
            'Boom sociálních sítí a influencerů',
            'Streaming, cloud',
          ]"
          model-src="/models/Phone.glb"
          :model-rotation="Math.PI * 2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          title="Současnost"
          label="AI a metaverse"
          summary="Internet je rychlejší, chytřejší a propojenější než kdy dřív. AI, metaverse a nové technologie formují budoucnost online světa."
          :highlights="[
            'AI a strojové učení v každodenním životě',
            'Metaverse a virtuální světy',
            'Zvýšené zaměření na soukromí a bezpečnost',
          ]"
          model-src="/models/headset.glb"
          :model-rotation="Math.PI"
        />
      </SwiperSlide>
    </Slider>
  </section>
</template>

<style scoped>
.hero-section {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2rem;
  align-items: center;
  height: 100vh;
  padding: 2rem clamp(1rem, 4vw, 3rem);
}

.hero-content {
  max-width: 700px;
}

.hero-kicker {
  text-transform: uppercase;
  color: var(--primary-color);
  letter-spacing: 0.14em;
  font-size: 0.8rem;
  margin-bottom: 0.75rem;
}

.hero-text {
  font-size: clamp(2.2rem, 6vw, 4.25rem);
  font-family: "Archivo Black", sans-serif;
  line-height: 1.05;
}
.hero-subtitle {
  font-size: 1.25rem;
  color: #a5a5a5;
  margin: 1rem 0 1.25rem;
  max-width: 56ch;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.hero-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.hero-preview {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.3s ease;
}

@media (max-width: 980px) {
  .hero-section {
    grid-template-columns: 1fr;
    height: auto;
    min-height: 100vh;
    padding-top: 1rem;
  }

  .hero-preview {
    grid-template-columns: 1fr;
  }

  .hero-actions {
    flex-wrap: wrap;
  }
}
</style>
