<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Button from "../components/Button.vue";
import TextGradient from "../components/TextGradient.vue";
import Slider from "../components/Slider.vue";
import { SwiperSlide } from "swiper/vue";
import Slide from "../components/Slide.vue";
import PreviewCard from "../components/PreviewCard.vue";
import "../assets/main.css";
import { useI18n } from "vue-i18n";
import { useSoundPlayer } from "../composables/useSoundPlayer";
import { useCursorEffects } from "../composables/useCursorEffects";
const { t, tm } = useI18n();
const { playSound } = useSoundPlayer();
import "../assets/animations.css";

const { trailCanvas, cursorStyle } = useCursorEffects();
void trailCanvas;

const pageRef = ref<HTMLElement | null>(null);
let revealObserver: IntersectionObserver | null = null;

const router = useRouter();

const goToTimeline = () => {
  playSound("/sounds/whoosh.mp3", 4.5, 4.7);
  document.getElementById("timeline")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const openWeb90 = () => {
  playSound("/sounds/mouse-click.mp3", 0.7, 0.9);
  router.push("/web90");
};
const openWeb2000 = () => {
  playSound("/sounds/mouse-click.mp3", 0.7, 0.9);
  router.push("/web2000");
};
const openWeb2020 = () => {
  playSound("/sounds/mouse-click.mp3", 0.7, 0.9);
  router.push("/web2020");
};

const openWeb2010 = () => {
  playSound("/sounds/mouse-click.mp3", 0.7, 0.9);
  router.push("/web2010");
};

const getHighlights = (key: string) => tm(key) as string[];

const museumReasons = computed(
  () =>
    tm("homepage.museumReasons.items") as Array<{
      title: string;
      description: string;
    }>,
);

const footerLinks = computed(
  () =>
    tm("homepage.footer.links") as Array<{
      id: string;
      label: string;
    }>,
);

const navigateFromId = (id: string) => {
  switch (id) {
    case "timeline":
      goToTimeline();
      break;
    case "web90":
      openWeb90();
      break;
    case "web2000":
      openWeb2000();
      break;
    case "web2010":
      openWeb2010();
      break;
    case "web2020":
      openWeb2020();
      break;
    case "top":
      window.scrollTo({ top: 0, behavior: "smooth" });
      break;
  }
};

onMounted(() => {
  const revealElements =
    pageRef.value?.querySelectorAll<HTMLElement>(".scroll-reveal");

  if (!revealElements?.length) {
    return;
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        revealObserver?.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  revealElements.forEach((element) => revealObserver?.observe(element));
});

onBeforeUnmount(() => {
  revealObserver?.disconnect();
  revealObserver = null;
});
</script>

<template>
  <main ref="pageRef" :style="cursorStyle">
    <div class="cursor-glow" aria-hidden="true"></div>
    <canvas ref="trailCanvas" class="cursor-trail" aria-hidden="true"></canvas>
    <section class="hero-section">
      <div class="hero-content">
        <p class="hero-kicker">{{ t("homepage.heroKicker") }}</p>
        <vue-typed-js
          :strings="[t('homepage.heroTitle')]"
          :type-speed="50"
          :cursor-char="'|'"
          class="hero-text"
        />

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
    <section
      class="section-shell museum-intro"
      aria-labelledby="museum-intro-title"
    >
      <div class="section-heading scroll-reveal">
        <p class="section-kicker">{{ t("homepage.museumReasons.eyebrow") }}</p>
        <h2 id="museum-intro-title" class="section-title">
          {{ t("homepage.museumReasons.title") }}
        </h2>
        <p class="section-description">
          {{ t("homepage.museumReasons.description") }}
        </p>
      </div>
      <div class="museum-grid">
        <article
          v-for="(item, index) in museumReasons"
          :key="item.title"
          class="content-card scroll-reveal"
          :style="{ '--reveal-delay': `${index * 120}ms` }"
        >
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </article>
      </div>
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
    <footer class="home-footer">
      <div class="footer-copy scroll-reveal">
        <p class="section-kicker">{{ t("homepage.footer.title") }}</p>
        <p class="footer-description">
          {{ t("homepage.footer.description") }}
        </p>
      </div>
      <div class="footer-links scroll-reveal" style="--reveal-delay: 140ms">
        <p class="footer-links-title">{{ t("homepage.footer.linksTitle") }}</p>
        <div class="footer-link-list">
          <button
            v-for="link in footerLinks"
            :key="link.id"
            class="footer-link"
            type="button"
            @click="navigateFromId(link.id)"
          >
            {{ link.label }}
          </button>
        </div>
      </div>
    </footer>
  </main>
</template>

<style scoped>
main {
  position: relative;
  isolation: isolate;
  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: "Archivo", sans-serif;
  min-height: 100vh;
}

.cursor-glow {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background: radial-gradient(
    circle 50px at var(--cursor-x) var(--cursor-y),
    rgba(63, 163, 77, 0.26) 0%,
    rgba(63, 163, 77, 0.12) 55%,
    rgba(63, 163, 77, 0) 100%
  );
}

.cursor-trail {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 0;
}

.hero-section {
  position: relative;
  z-index: 1;
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
  animation: fadeInLeft 0.8s ease-out;
}

.hero-text {
  font-size: clamp(2.2rem, 6vw, 4.25rem);
  font-family: "Archivo Black", sans-serif;
  line-height: 1.05;
  animation: fadeInDown 0.8s ease-out;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #a5a5a5;
  margin: 1rem 0 1.25rem;
  max-width: 56ch;
  animation: fadeInDown 0.8s ease-out;
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
  animation: fadeInLeft 0.8s ease-out;
}

.hero-preview {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  animation: fadeInDown 0.8s ease-out;
}

.section-shell {
  position: relative;
  z-index: 1;
  padding: 0 clamp(1rem, 4vw, 3rem) 4.5rem;
}

.section-heading {
  max-width: 760px;
  margin-bottom: 1.75rem;
}

.section-kicker {
  margin: 0 0 0.75rem;
  text-transform: uppercase;
  color: var(--primary-color);
  letter-spacing: 0.14em;
  font-size: 0.78rem;
}

.section-title {
  margin: 0;
  font-size: clamp(1.8rem, 3.4vw, 3rem);
  line-height: 1.08;
  font-family: "Archivo Black", sans-serif;
}

.section-description {
  margin: 0.85rem 0 0;
  max-width: 62ch;
  color: #a8b0aa;
  font-size: 1.02rem;
  line-height: 1.7;
}

.museum-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.content-card {
  border: 1px solid rgba(53, 94, 63, 0.9);
  border-radius: 18px;
  padding: 1.25rem;
  background: linear-gradient(
    160deg,
    rgba(18, 31, 21, 0.92),
    rgba(8, 10, 8, 0.98)
  );
  box-shadow: 0 24px 40px rgba(0, 0, 0, 0.16);
}

.scroll-reveal {
  opacity: 0;
  transform: translate3d(0, 32px, 0);
  filter: blur(6px);
  transition:
    opacity 0.75s ease,
    transform 0.75s cubic-bezier(0.16, 1, 0.3, 1),
    filter 0.75s ease;
  transition-delay: var(--reveal-delay, 0ms);
  will-change: opacity, transform, filter;
}

.scroll-reveal.is-visible {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  filter: blur(0);
}

.content-card h3 {
  margin: 0 0 0.7rem;
  font-size: 1.15rem;
  font-family: "Archivo Black", sans-serif;
}

.content-card p {
  margin: 0;
  color: #a8b0aa;
  line-height: 1.7;
}

#timeline {
  position: relative;
  z-index: 1;
}

.home-footer {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2rem;
  padding: 3rem clamp(1rem, 4vw, 3rem) 3.5rem;
  border-top: 1px solid rgba(53, 94, 63, 0.8);
  background: linear-gradient(
    180deg,
    rgba(10, 16, 11, 0.2),
    rgba(6, 8, 6, 0.9)
  );
}

.footer-description {
  margin: 0;
  max-width: 60ch;
  color: #a8b0aa;
  line-height: 1.7;
}

.footer-links-title {
  margin: 0 0 0.85rem;
  font-family: "Archivo Black", sans-serif;
  font-size: 1rem;
}

.footer-link-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.footer-link {
  border: 1px solid rgba(53, 94, 63, 0.85);
  border-radius: 999px;
  background: rgba(18, 31, 21, 0.82);
  color: #e7f6e9;
  padding: 0.65rem 1rem;
  font: inherit;
  cursor: var(--btn-cursor, url("/cursor-32.png") 3 3, pointer);
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;
}

.footer-link:hover {
  transform: translateY(-1px);
  border-color: var(--primary-color);
  background: rgba(29, 49, 33, 0.92);
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

  .museum-grid,
  .home-footer {
    grid-template-columns: 1fr;
  }

  .hero-actions {
    flex-wrap: wrap;
  }
}

@media (max-width: 640px) {
  .section-shell {
    padding-bottom: 3.5rem;
  }

  .content-card {
    padding: 1rem;
  }

  .home-footer {
    padding-top: 2.5rem;
  }

  .footer-link-list {
    gap: 0.55rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .scroll-reveal {
    opacity: 1;
    transform: none;
    filter: none;
    transition: none;
  }
}
</style>
