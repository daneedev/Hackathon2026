<script setup>
import { RouterLink } from "vue-router";
import { useI18n } from "vue-i18n";
import ExhibitCard from "../components/exhibitCard.vue";
import { onMounted } from "vue";
import { useSoundPlayer } from "../composables/useSoundPlayer";

const { playSound } = useSoundPlayer();

onMounted(() => {
  playSound("/sounds/modem.mp3", 5, 12);
});

function playClickSound() {
  playSound("/sounds/mouse-click.mp3", 0.7, 0.9);
}

const { t } = useI18n();
</script>

<template>
  <section class="underConstruction">
    <p>{{ t("web90s.underConstruction") }}</p>
  </section>

  <div class="pageLayout">
    <aside class="sidebar">
      <h2>{{ t("web90s.sidebar.navigationTitle") }}</h2>
      <nav>
        <RouterLink @click="playClickSound" to="/">{{
          t("web90s.sidebar.home")
        }}</RouterLink>
        <a href="#mouse" @click="playClickSound">{{
          t("web90s.sidebar.mouse")
        }}</a>
        <a href="#monitor" @click="playClickSound">{{
          t("web90s.sidebar.monitor")
        }}</a>
        <a href="#floppy" @click="playClickSound">{{
          t("web90s.sidebar.floppy")
        }}</a>
      </nav>

      <div class="counterBox">
        <p>{{ t("web90s.sidebar.visitors") }}</p>
        <div class="counter">001337</div>
      </div>

      <div class="badge">
        <p>{{ t("web90s.sidebar.badgePrefix") }}</p>
        <strong>{{ t("web90s.sidebar.badgeBrowser") }}</strong>
      </div>
    </aside>

    <main>
      <article class="welcome">
        <p>{{ t("web90s.welcomeTitle") }}</p>
      </article>
      <article class="info">
        <p>
          {{ t("web90s.infoText") }}
        </p>
      </article>
      <article class="exhibition">
        <h1>{{ t("web90s.exhibitionTitle") }}</h1>
        <section>
          <ExhibitCard
            id="mouse"
            :title="t('web90s.exhibits.mouse.title')"
            :description="t('web90s.exhibits.mouse.description')"
            modelSrc="/models/Rat.glb"
            :rotation="Math.PI + 1"
            :scale="0.07"
          />
          <ExhibitCard
            id="monitor"
            :title="t('web90s.exhibits.monitor.title')"
            :description="t('web90s.exhibits.monitor.description')"
            modelSrc="/models/CRT.glb"
            :rotation="Math.PI - 0.5"
            :scale="1"
          />
          <ExhibitCard
            id="floppy"
            :title="t('web90s.exhibits.floppy.title')"
            :description="t('web90s.exhibits.floppy.description')"
            modelSrc="/models/floppy.glb"
            :rotation="Math.PI - 0.5"
            :scale="0.2"
          />
        </section>
      </article>
    </main>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bitcount+Single:wght@100..900&display=swap");

.sidebar a:hover {
  color: rgb(255, 255, 89);
}

.welcome p {
  animation: blinkColor 1s steps(1, end) infinite;
}

@keyframes blinkColor {
  0%,
  49.999% {
    color: black;
  }
  50%,
  100% {
    color: #001dff;
    font-weight: 400; /* change to any color you want */
  }
}

.pageLayout {
  background-image: url(/web90-bg.jpg);
  background-size: 300px;
  background-repeat: repeat;
  cursor: url(/cursor90.jpg), auto;
  font-family: "Bitcount Single", monospace;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1rem;
  padding: 1rem;
  align-items: start;
  color: black;
  overflow-x: hidden;
  cursor:
    url("/cursor90s.png") 3 3,
    auto;
}

.sidebar {
  background: #d9d9d9;
  border: 2px solid black;
  padding: 1rem;
  min-height: 80vh;
}

.sidebar h2 {
  margin: 0 0 0.75rem 0;
  color: #111;
}

.sidebar nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-bottom: 2px solid #777;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

.sidebar a {
  color: #001dff;
  text-decoration: underline;
}

a,
button,
input,
select,
textarea,
[role="button"] {
  cursor:
    url("/cursor90s.png") 3 3,
    pointer;
}

.counterBox {
  border-bottom: 2px solid #777;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

.counter {
  background: #000;
  color: #00ff66;
  font-size: 2rem;
  letter-spacing: 2px;
  text-align: center;
  padding: 0.4rem;
  border: 2px inset #222;
}

.badge {
  font-size: 0.95rem;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.underConstruction {
  background-color: hsl(50 100% 50% / var(--tw-bg-opacity, 1));
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 2rem;
  text-align: center;
  overflow-wrap: anywhere;
}

.welcome {
  background-color: white;
  padding: 0.5rem;
  min-width: 50%;
  max-width: 100%;
  border: 2px solid black;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  font-weight: 600;
  text-align: center;
}

.info {
  background-color: white;
  padding: 0.5rem;
  border: 2px solid black;
  width: 80%;
  max-width: 100%;
}

.exhibition {
  background-color: white;
  border: 2px solid black;
  width: 80%;
  max-width: 100%;

  h1 {
    padding: 0.5rem;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}

@media (max-width: 1000px) {
  .pageLayout {
    grid-template-columns: 1fr;
    padding: 0.75rem;
  }

  .sidebar {
    min-height: auto;
    width: 100%;
    box-sizing: border-box;
  }

  .welcome,
  .info,
  .exhibition {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .underConstruction {
    padding: 0.4rem 0.6rem;
    font-size: 0.82rem;
  }

  .pageLayout {
    padding: 0.5rem;
    gap: 0.6rem;
  }

  .sidebar {
    padding: 0.7rem;
    font-size: 0.92rem;
  }

  .counter {
    font-size: 1.5rem;
    letter-spacing: 1px;
  }

  main {
    gap: 1rem;
  }

  .welcome {
    min-width: 0;
    font-size: 1.2rem;
    line-height: 1.25;
    padding: 0.5rem 0.4rem;
  }
}

@media (max-width: 320px) {
  .underConstruction {
    font-size: 0.72rem;
    padding: 0.35rem;
  }

  .pageLayout {
    padding: 0.35rem;
    gap: 0.4rem;
  }

  .sidebar {
    padding: 0.55rem;
  }

  .sidebar h2 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .sidebar nav {
    gap: 0.35rem;
    padding-bottom: 0.7rem;
    margin-bottom: 0.7rem;
  }

  .counter {
    font-size: 1.2rem;
  }

  .badge {
    font-size: 0.82rem;
  }

  .welcome {
    font-size: 1rem;
    padding: 0.45rem 0.35rem;
  }

  .info,
  .exhibition {
    font-size: 0.9rem;
  }
}
</style>
