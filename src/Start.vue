<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import "./assets/main.css";
import { useSoundPlayer } from "./composables/useSoundPlayer";
import DialupLoading from "./components/DialupLoading.vue";

const emit = defineEmits<{
  (event: "enter"): void;
}>();

const loading = ref(false);
const { t } = useI18n();
const { playSound } = useSoundPlayer();

const eras = computed(() => [
  {
    year: "90s",
    label: t("start.eras.nineties.label"),
    description: t("start.eras.nineties.description"),
  },
  {
    year: "2000s",
    label: t("start.eras.twoThousands.label"),
    description: t("start.eras.twoThousands.description"),
  },
  {
    year: "2010s",
    label: t("start.eras.twoTens.label"),
    description: t("start.eras.twoTens.description"),
  },
  {
    year: "2020s",
    label: t("start.eras.twoTwenties.label"),
    description: t("start.eras.twoTwenties.description"),
  },
]);

function enterWebsite() {
  loading.value = true;
  playSound("/sounds/whoosh.mp3", 4.6, 4.8);
}

function handleComplete() {
  emit("enter");
}
</script>

<template>
  <div>
    <DialupLoading v-if="loading" @complete="handleComplete" />

    <main v-else class="start-screen">
      <div class="screen-noise" aria-hidden="true"></div>

      <section class="start-shell">
        <div class="start-copy">
          <p class="start-kicker">{{ t("start.kicker") }}</p>
          <h1>{{ t("start.title") }}</h1>
          <p class="start-lede">{{ t("start.description") }}</p>

          <div class="start-tags" aria-label="museum themes">
            <span>{{ t("start.tags.timeline") }}</span>
            <span>{{ t("start.tags.models") }}</span>
            <span>{{ t("start.tags.atmosphere") }}</span>
          </div>

          <div class="start-section">
            <p class="start-command">{{ t("start.commandLabel") }}</p>
            <div class="run-cta">
              <img src="/right-green-arrow.png" :alt="t('start.arrowAlt')" />
              <button
                type="button"
                class="run-button"
                :disabled="loading"
                @click="enterWebsite"
              >
                {{ t("start.runButton") }}
              </button>
            </div>
            <p class="start-note">{{ t("start.note") }}</p>
          </div>
        </div>

        <aside class="preview-panel" :aria-label="t('start.previewLabel')">
          <p class="preview-label">{{ t("start.previewLabel") }}</p>
          <div class="era-list">
            <article v-for="era in eras" :key="era.year" class="era-card">
              <span class="era-year">{{ era.year }}</span>
              <div>
                <h2>{{ era.label }}</h2>
                <p>{{ era.description }}</p>
              </div>
            </article>
          </div>
        </aside>
      </section>

      <div class="status-line" aria-hidden="true">
        <span>{{ t("start.footerStatus") }}</span>
        <span>56 KBPS</span>
        <span>CRT READY</span>
      </div>
    </main>
  </div>
</template>

<style scoped lang="css">
@import url("https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap");

.start-screen {
  font-family: "Pixelify Sans", sans-serif;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
  overflow: hidden;
  background:
    radial-gradient(circle at top, rgba(63, 163, 77, 0.16), transparent 35%),
    linear-gradient(180deg, rgba(5, 12, 8, 0.55), rgba(0, 0, 0, 0.86)),
    url(/crt-monitor.png);
  background-size: auto, auto, cover;
  background-position: center, center, center;
}

.start-screen::before,
.start-screen::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.start-screen::before {
  background:
    linear-gradient(rgba(255, 255, 255, 0.05), transparent 45%),
    repeating-linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.04),
      rgba(255, 255, 255, 0.04) 1px,
      transparent 1px,
      transparent 4px
    );
  mix-blend-mode: screen;
  opacity: 0.2;
}

.start-screen::after {
  box-shadow: inset 0 0 120px rgba(0, 0, 0, 0.9);
}

.screen-noise {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.08) 0.7px, transparent 0.7px);
  background-size: 10px 10px;
  opacity: 0.08;
  pointer-events: none;
}

.start-shell {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(18rem, 0.8fr);
  gap: 1.5rem;
  width: min(100%, 70rem);
  padding: 1.5rem;
  border: 1px solid rgba(63, 163, 77, 0.5);
  background: linear-gradient(180deg, rgba(4, 12, 7, 0.88), rgba(0, 0, 0, 0.92));
  box-shadow:
    0 0 0 1px rgba(63, 163, 77, 0.14),
    0 24px 50px rgba(0, 0, 0, 0.45),
    0 0 50px rgba(63, 163, 77, 0.12);
  backdrop-filter: blur(10px);
}

.start-copy {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #effff1;
}

.start-kicker,
.preview-label,
.start-command,
.status-line {
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.start-kicker {
  margin: 0;
  color: rgba(202, 255, 214, 0.74);
  font-size: 0.78rem;
}

.start-copy h1 {
  margin: 0;
  max-width: 12ch;
  font-size: clamp(2.5rem, 5vw, 4.8rem);
  line-height: 0.95;
  color: #f4fff4;
  text-shadow: 0 0 20px rgba(63, 163, 77, 0.28);
}

.start-lede {
  max-width: 34rem;
  margin: 0;
  color: rgba(224, 241, 226, 0.82);
  font-size: 1rem;
  line-height: 1.7;
}

.start-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.start-tags span {
  border: 1px solid rgba(63, 163, 77, 0.38);
  background: rgba(17, 34, 19, 0.68);
  color: #dffbe3;
  padding: 0.45rem 0.7rem;
  font-size: 0.76rem;
}

.start-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.85rem;
  width: min(100%, 26rem);
  padding: 1rem;
  border: 1px solid rgba(63, 163, 77, 0.42);
  background: linear-gradient(180deg, rgba(9, 20, 11, 0.92), rgba(0, 0, 0, 0.95));
  color: var(--primary-color);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04);
}

.start-command {
  margin: 0;
  color: rgba(196, 247, 206, 0.62);
  font-size: 0.72rem;
}

.run-button {
  font: inherit;
  border: 1px solid transparent;
  background: transparent;
  cursor: pointer;
  color: #dffff0;
  text-decoration: none;
  padding: 0.2rem 0.3rem;
  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease;
}

.run-cta {
  display: flex;
  align-items: center;
  gap: 0.5em;
}

.run-cta img {
  width: 1.5em;
  height: 1.5em;
  filter: drop-shadow(0 0 8px rgba(63, 163, 77, 0.45));
}

.start-note {
  margin: 0;
  color: rgba(214, 232, 217, 0.68);
  font-size: 0.78rem;
  line-height: 1.55;
}

.run-button:hover,
.run-button:focus-visible {
  border-color: rgba(63, 163, 77, 0.5);
  background: rgba(63, 163, 77, 0.12);
  outline: none;
}

.run-button:disabled {
  cursor: progress;
  opacity: 0.7;
}

.preview-panel {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid rgba(63, 163, 77, 0.28);
  background: rgba(12, 23, 13, 0.76);
  color: #effff1;
}

.preview-label {
  margin: 0;
  color: rgba(197, 249, 208, 0.72);
  font-size: 0.72rem;
}

.era-list {
  display: grid;
  gap: 0.8rem;
}

.era-card {
  display: grid;
  grid-template-columns: 4.75rem 1fr;
  gap: 0.85rem;
  align-items: start;
  padding: 0.85rem;
  border: 1px solid rgba(63, 163, 77, 0.2);
  background: linear-gradient(180deg, rgba(18, 34, 20, 0.7), rgba(6, 14, 8, 0.78));
}

.era-year {
  color: var(--primary-color);
  font-size: 0.95rem;
}

.era-card h2,
.era-card p {
  margin: 0;
}

.era-card h2 {
  margin-bottom: 0.35rem;
  font-size: 1rem;
  color: #f3fff3;
}

.era-card p {
  color: rgba(219, 236, 222, 0.7);
  font-size: 0.8rem;
  line-height: 1.55;
}

.status-line {
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  color: rgba(205, 243, 211, 0.6);
  font-size: 0.7rem;
}

@media (max-width: 900px) {
  .start-shell {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .start-screen {
    padding: 1rem;
  }

  .start-shell {
    padding: 1rem;
  }

  .start-copy h1 {
    max-width: none;
  }

  .era-card {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .run-button {
    transition: none;
  }
}
</style>