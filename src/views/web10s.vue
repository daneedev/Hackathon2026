<script setup>
import { nextTick, onMounted } from "vue";
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useI18n } from "vue-i18n";
import exhibitCard10s from "../components/exhibitCard10s.vue";
import { useSoundPlayer } from "../composables/useSoundPlayer";

const { t } = useI18n();
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

onMounted(async () => {
  await nextTick();
  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  });
});

const goToFirstExhibit = () => {
  document.getElementById("first-exhibit")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const { playSound } = useSoundPlayer();

function playClickSound() {
  playSound("/sounds/mouse-click.mp3", 0.7, 0.9);
}

function handleHeroCta() {
  playClickSound();
  goToFirstExhibit();
}
</script>

<template>
  <nav>
    <header>
      <button
        class="hamburger"
        type="button"
        :aria-expanded="isMenuOpen"
        :aria-label="t('web10s.nav.toggleMenu')"
        @click="toggleMenu"
      >
        ☰
      </button>
      <section :class="{ open: isMenuOpen }">
        <RouterLink to="/" @click="closeMenu">{{
          t("web10s.nav.home")
        }}</RouterLink>
        <RouterLink to="/web90" @click="closeMenu">{{
          t("web10s.nav.web90")
        }}</RouterLink>
        <RouterLink to="/web2000" @click="closeMenu">{{
          t("web10s.nav.web2000")
        }}</RouterLink>
        <RouterLink to="/web2020" @click="closeMenu">{{
          t("web10s.nav.present")
        }}</RouterLink>
      </section>
    </header>
  </nav>
  <main>
    <article>
      <section class="heroSection">
        <h1>{{ t("web10s.hero.title") }}</h1>
        <p>{{ t("web10s.hero.subtitle") }}</p>
        <button type="button" class="hero-cta" @click="handleHeroCta">
          {{ t("web10s.hero.cta") }}
        </button>
      </section>
      <section class="exhibitsSection">
        <h1 id="first-exhibit">{{ t("web10s.exhibitionTitle") }}</h1>
        <article class="exhibitsList">
          <exhibitCard10s
            :title="t('web10s.exhibits.smartphones.title')"
            :description="t('web10s.exhibits.smartphones.description')"
            modelSrc="/Phone2.glb"
            :rotation="Math.PI"
            :scale="1"
          />
          <exhibitCard10s
            :title="t('web10s.exhibits.socialMedia.title')"
            :description="t('web10s.exhibits.socialMedia.description')"
            imageSrc="/socials.png"
          />
          <exhibitCard10s
            :title="t('web10s.exhibits.cloud.title')"
            :description="t('web10s.exhibits.cloud.description')"
            modelSrc="/server.glb"
            :rotation="Math.PI + 1"
            :scale="0.16"
          />
        </article>
      </section>
      <section class="milestonesSection">
        <h2>{{ t("web10s.milestones.title") }}</h2>
        <p class="milestonesIntro">{{ t("web10s.milestones.intro") }}</p>
        <article class="milestonesGrid">
          <div class="milestoneCard">
            <span class="milestoneYear">{{
              t("web10s.milestones.items.2010.year")
            }}</span>
            <h3>{{ t("web10s.milestones.items.2010.title") }}</h3>
            <p>{{ t("web10s.milestones.items.2010.description") }}</p>
          </div>
          <div class="milestoneCard">
            <span class="milestoneYear">{{
              t("web10s.milestones.items.2012.year")
            }}</span>
            <h3>{{ t("web10s.milestones.items.2012.title") }}</h3>
            <p>{{ t("web10s.milestones.items.2012.description") }}</p>
          </div>
          <div class="milestoneCard">
            <span class="milestoneYear">{{
              t("web10s.milestones.items.2016.year")
            }}</span>
            <h3>{{ t("web10s.milestones.items.2016.title") }}</h3>
            <p>{{ t("web10s.milestones.items.2016.description") }}</p>
          </div>
          <div class="milestoneCard">
            <span class="milestoneYear">{{
              t("web10s.milestones.items.2019.year")
            }}</span>
            <h3>{{ t("web10s.milestones.items.2019.title") }}</h3>
            <p>{{ t("web10s.milestones.items.2019.description") }}</p>
          </div>
        </article>
      </section>
    </article>
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");
:root {
  --page-bg: #f5f6f7;
  --primary-color: #3498db;
  --text-color: #7f8c8d;
  --primary-dark: #2980b9;
  --header-text: #ffffff;
}
.exhibitsList {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
#first-exhibit {
  text-align: center;
  margin: 2rem;
}
a {
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.02em;
}
main {
  background-color: var(--page-bg);
  font-family: "Open Sans", sans-serif;
  cursor: default;
}
nav {
  background-color: #2c3e50;
  color: #ffffff;
  font-family: "Open Sans", sans-serif;
  cursor: default;
}
nav header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 4rem;
  padding-right: 4rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
}
nav header section {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 35rem;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 0.35rem;
}
nav header section a {
  text-align: center;
  padding: 0.2rem 0.25rem;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.02em;
}
nav header section::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: calc((100% - 1.5rem) / 4);
  height: 2px;
  background-color: #ffffff;
  transform: translateX(0);
  transition: transform 280ms ease;
}
nav header section:has(a:nth-child(1):hover)::after,
nav header section:has(a:nth-child(1):focus-visible)::after {
  transform: translateX(0);
}
nav header section:has(a:nth-child(2):hover)::after,
nav header section:has(a:nth-child(2):focus-visible)::after {
  transform: translateX(calc(100% + 0.5rem));
}
nav header section:has(a:nth-child(3):hover)::after,
nav header section:has(a:nth-child(3):focus-visible)::after {
  transform: translateX(calc((100% + 0.5rem) * 2));
}
nav header section:has(a:nth-child(4):hover)::after,
nav header section:has(a:nth-child(4):focus-visible)::after {
  transform: translateX(calc((100% + 0.5rem) * 3));
}
.hamburger {
  display: none;
  background: transparent;
  color: #ffffff;
  border: 1px solid #4e6987;
  border-radius: 4px;
  padding: 0.2rem 0.55rem;
  font-size: 1.2rem;
  line-height: 1;
  cursor: pointer;
}
.heroSection {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  width: 100%;
  padding: 0.2rem 0.25rem;
}
.heroSection::before {
  content: "";
  position: absolute;
  inset: -12px;
  background-image: url("/hero-bg.jpg");
  background-size: cover;
  background-position: center;
  filter: blur(5px);
  transform: scale(1.05);
  z-index: 0;
}
.heroSection::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(245, 246, 247, 0.38);
  z-index: 1;
}
.heroSection h1,
.heroSection p,
.hero-cta {
  position: relative;
  z-index: 2;
}
.heroSection h1 {
  font-size: 2.5rem;
}
.heroSection p {
  font-size: 1.25rem;
  max-width: 600px;
}
.hero-cta {
  background-color: #2c3e50;
  color: #ffffff;
  border: 1px solid #3f5872;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font: inherit;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

.hero-cta:hover,
.hero-cta:focus-visible {
  background-color: #354b63;
  border-color: #4e6987;
}

.milestonesSection {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.milestonesSection h2 {
  text-align: center;
  margin-bottom: 0.75rem;
  color: #2c3e50;
}

.milestonesIntro {
  text-align: center;
  color: #4f657a;
  margin: 0 auto 1.5rem;
  max-width: 740px;
}

.milestonesGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.milestoneCard {
  background-color: #2c3e50;
  border: 1px solid #d4dce3;
  border-radius: 4px;
  padding: 1rem;
}

.milestoneYear {
  display: inline-block;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.4rem;
}

.milestoneCard h3 {
  margin: 0 0 0.45rem;
  color: #ffffff;
}

.milestoneCard p {
  margin: 0;
  color: #dcdcdc;
  line-height: 1.45;
}

@media (max-width: 750px) {
  nav header {
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 0.75rem 1rem;
  }
  nav header section {
    display: none;
    width: 100%;
    grid-template-columns: 1fr;
    gap: 0.35rem;
    margin-top: 0.65rem;
    padding-bottom: 0;
  }
  nav header section::after {
    display: none;
  }
  nav header section.open {
    display: grid;
  }
  nav header section a {
    text-align: left;
    padding: 0.45rem 0.2rem;
  }
  .hamburger {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .milestonesGrid {
    grid-template-columns: 1fr;
  }
}
</style>
