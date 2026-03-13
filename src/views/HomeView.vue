<script setup lang="ts">
import { useRouter } from "vue-router";
import Button from "../components/Button.vue";
import TextGradient from "../components/TextGradient.vue";
import Slider from "../components/Slider.vue";
import { SwiperSlide } from "swiper/vue";
import Slide from "../components/Slide.vue";
import PreviewCard from "../components/PreviewCard.vue";
import "../assets/main.css";
import { useI18n } from "vue-i18n";
const { t, tm, locale } = useI18n();

const router = useRouter();

const goToTimeline = () => {
  document.getElementById("timeline")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const openWeb90 = () => {
  router.push("/web90");
};
const openWeb2000 = () => {
  router.push("/web2000");
};
const openWeb2020 = () => {
  router.push("/web2020");
};

const openWeb2010 = () => {
  router.push("/web2010");
};
function changeLocale() {
  if (locale.value === "cs") {
    locale.value = "en";
  } else {
    locale.value = "cs";
  }
}

const getHighlights = (key: string) => tm(key) as string[];
</script>

<template>
  <main>
    <section class="lang-switcher">
      <Button
        icon="fa-solid fa-globe"
        :label="
          locale === 'cs'
            ? t('homepage.langSwitcher.toEn')
            : t('homepage.langSwitcher.toCs')
        "
        :on-click="changeLocale"
      />
    </section>
    <section class="hero-section">
      <div class="hero-content">
        <p class="hero-kicker">{{ t("homepage.heroKicker") }}</p>
        <h1 class="hero-text">
          {{ t("homepage.welcomeText") }} <br />
          <TextGradient primaryColor="#3FA34D" secondaryColor="#137547">
            {{ t("homepage.internet") }}
          </TextGradient>
        </h1>
        <p class="hero-subtitle">
          {{ t("homepage.heroSubtitle") }}
        </p>
        <div class="hero-actions">
          <Button
            icon="fa-solid fa-eye"
            :label="t('homepage.heroButton')"
            :on-click="goToTimeline"
          />
        </div>
        <div class="hero-stats">
          <PreviewCard
            :value="t('homepage.heroStats.erasValue')"
            :label="t('homepage.heroStats.erasLabel')"
          />
          <PreviewCard
            :value="t('homepage.heroStats.modelsValue')"
            :label="t('homepage.heroStats.modelsLabel')"
          />
          <PreviewCard
            :value="t('homepage.heroStats.exhibitsValue')"
            :label="t('homepage.heroStats.exhibitsLabel')"
          />
        </div>
      </div>
      <aside
        class="hero-preview"
        :aria-label="t('homepage.heroPreview.ariaLabel')"
      >
        <PreviewCard
          :value="t('homepage.heroPreview.ninetiesValue')"
          :label="t('homepage.heroPreview.ninetiesLabel')"
        />
        <PreviewCard
          :value="t('homepage.heroPreview.twoThousandsValue')"
          :label="t('homepage.heroPreview.twoThousandsLabel')"
        />
        <PreviewCard
          :value="t('homepage.heroPreview.twoTensValue')"
          :label="t('homepage.heroPreview.twoTensLabel')"
        />
        <PreviewCard
          :value="t('homepage.heroPreview.twoTwentiesValue')"
          :label="t('homepage.heroPreview.twoTwentiesLabel')"
        />
      </aside>
    </section>
    <section id="timeline">
      <Slider>
        <SwiperSlide>
          <Slide
            :title="t('homepage.timeline.slide90s.title')"
            :label="t('homepage.timeline.slide90s.label')"
            :summary="t('homepage.timeline.slide90s.summary')"
            :button-label="t('homepage.timeline.slide90s.buttonLabel')"
            :on-button-click="openWeb90"
            :highlights="getHighlights('homepage.timeline.slide90s.highlights')"
            model-src="/models/CRT.glb"
            :model-rotation="Math.PI - 0.5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            :title="t('homepage.timeline.slide2000s.title')"
            :label="t('homepage.timeline.slide2000s.label')"
            :summary="t('homepage.timeline.slide2000s.summary')"
            :button-label="t('homepage.timeline.slide2000s.buttonLabel')"
            :on-button-click="openWeb2000"
            :highlights="
              getHighlights('homepage.timeline.slide2000s.highlights')
            "
            model-src="/models/TV.glb"
            :model-rotation="Math.PI + 1.25"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            :title="t('homepage.timeline.slide2010s.title')"
            :label="t('homepage.timeline.slide2010s.label')"
            :summary="t('homepage.timeline.slide2010s.summary')"
            :highlights="
              getHighlights('homepage.timeline.slide2010s.highlights')
            "
            :button-label="t('homepage.timeline.slide2010s.buttonLabel')"
            :on-button-click="openWeb2010"
            model-src="/models/Phone.glb"
            :model-rotation="Math.PI * 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            :title="t('homepage.timeline.slidePresent.title')"
            :label="t('homepage.timeline.slidePresent.label')"
            :summary="t('homepage.timeline.slidePresent.summary')"
            :highlights="
              getHighlights('homepage.timeline.slidePresent.highlights')
            "
            :button-label="t('homepage.timeline.slidePresent.buttonLabel')"
            :on-button-click="openWeb2020"
            model-src="/models/headset.glb"
            :model-rotation="Math.PI"
          />
        </SwiperSlide>
      </Slider>
    </section>
  </main>
</template>

<style scoped>
main {
  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: "Archivo", sans-serif;
  min-height: 100vh;
}
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
