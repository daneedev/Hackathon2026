<script setup lang="ts">
import ZerosNewsCard from "./components/ZerosNewsCard.vue";
import ZerosNewsModel from "./components/ZerosNewsModel.vue";
import percentageBar from "./components/percentageBar.vue";

import { useRouter } from "vue-router";
const router = useRouter();
</script>
<template>
  <div class="container">
    <header>
      <div class="header-content">
        <a href="#" class="logo">&#127757; RetroNet</a>
        <div class="header-navigations">
          <button class="nav-btn" @click="() => router.push('/')">Domů</button>
          <button class="nav-btn" @click="() => router.push('/web90')">
            90s
          </button>
          <button class="nav-btn" @click="() => router.push('/web2010')">
            10s
          </button>
          <button class="nav-btn" @click="() => router.push('/web2020')">
            20s
          </button>
        </div>
      </div>
    </header>
    <main>
      <section class="news">
        <section class="news-card">
          <ZerosNewsModel
            title="🎵 iPod přináší hudbu přímo do kapsy"
            content="Současné modely iPodu umožňují přehrávání tisíců skladeb v kompaktním a lehkém designu. Díky moderním displejům a intuitivnímu ovládání je přístup k hudbě rychlejší a pohodlnější než u starších přenosných přehrávačů z doby před rokem 2000."
            comments="34"
            modelSrc="/models/iPod.glb"
          />
          <p>✨ Vítejte ve Web 2.0!</p>
          <p>
            Internet se změnil. Uživatelé už nejsou jen čtenáři – jsou tvůrci
            obsahu! Blogy, sociální sítě a sdílení obsahu změnily vše.
          </p>
          <div class="buttons">
            <button class="btn">👍Like</button>
            <button class="btn">🔗Share</button>
          </div>
        </section>
        <ZerosNewsCard
          title="📰 MySpace & Facebook mění sociální sítě"
          content="Internet se změnil. Uživatelé už nejsou jen čtenáři – jsou tvůrci obsahu! Blogy, sociální sítě a sdílení obsahu změnily vše."
          comments="12"
          modelSrc=""
        />
        <ZerosNewsCard
          title="📹 YouTube: Revoluce videa"
          content="Od garáže k miliardám zhlédnutí. YouTube změnil způsob, jakým konzumujeme média. Každou minutu se nahraje 10 hodin videa!"
          comments="11"
          modelSrc=""
        />
        <ZerosNewsModel
          title="📱 iPhone představen!"
          content="Apple právě představil revoluční zařízení. Je to iPod, telefon a internetové zařízení v jednom!"
          comments="7"
          modelSrc="/models/cell-phone.glb"
        />
        <ZerosNewsModel
          title="🖱️ Nová generace počítačových myší posouvá přesnost i pohodlí"
          content="Moderní počítačové myši dnes přinášejí výrazně vyšší přesnost, rychlejší odezvu a lepší ergonomii než modely z let před rokem 2000. Díky pokročilým senzorům, bezdrátovým technologiím a novým materiálům se práce i hraní na počítači stává pohodlnější a přesnější než kdy dříve."
          comments="9"
          modelSrc="/models/computer-mouse.glb"
        />
        <ZerosNewsModel
          title="🖥️ Monitory nové generace přinášejí ostřejší obraz a větší pohodlí"
          content="Moderní počítačové monitory dnes nabízejí výrazně vyšší rozlišení, lepší barvy a rychlejší obnovovací frekvence než modely před rokem 2000. Díky novým typům panelů a tenčím konstrukcím je práce i sledování médií příjemnější a obraz je mnohem ostřejší."
          comments="5"
          modelSrc="/models/TV.glb"
        />
        <ZerosNewsModel
          title="💾 Flash disky mění způsob ukládání dat"
          content="Současné USB flash drive nabízejí mnohem větší kapacitu a rychlejší přenos dat než starší přenosná úložiště z doby před rokem 2000. Díky malým rozměrům a jednoduchému připojení přes USB umožňují snadno přenášet soubory mezi počítači a dalšími zařízeními."
          comments="8"
          modelSrc="/models/flash-drive.glb"
        />
      </section>
      <aside>
        <section class="profile">
          <img src="/cool-emoji.png" />
          <p class="profile-name">xXWebMasterXx</p>
          <p class="status">Online právě teď</p>
          <div>⭐⭐⭐⭐⭐</div>
        </section>
        <section class="tag-section">
          <p class="profile-name">🏷️ Tag Cloud</p>
          <div class="tags">
            <div class="tag">Web 2.0</div>
            <div class="tag">Ajax</div>
            <div class="tag">RSS</div>
            <div class="tag">Blog</div>
            <div class="tag">Podcast</div>
            <div class="tag">Wiki</div>
            <div class="tag">Social</div>
            <div class="tag">Mashup</div>
            <div class="tag">API</div>
            <div class="tag">Beta</div>
          </div>
        </section>
        <section class="poll">
          <p class="poll-title">📊 Anketa</p>
          <p class="poll-desc">Nejlepší prohlížeč:</p>
          <div class="stats">
            <percentageBar title="Firefox🦊" :percentage="45" />
            <percentageBar title="IDE 6🔵" :percentage="30" />
            <percentageBar title="Opera🔴" :percentage="15" />
            <percentageBar title="Safari🧭" :percentage="10" />
          </div>
        </section>
      </aside>
    </main>
  </div>
</template>
<style scoped lang="css">
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Pixelify+Sans:wght@400..700&display=swap");
@import "assetts/reset.css";

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(225, 225, 225);
}
header {
  font-family: "Inter", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  background: linear-gradient(#9d9e9f, #6e6e6f);
}
main {
  font-family: "Inter", sans-serif;
  width: 60%;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-block: 2rem;
}
.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
}
header a {
  text-decoration: none;
  color: white;
}
.logo {
  font-weight: 900;
  font-size: 1.5rem;
}
.header-navigations {
  display: flex;
}
.nav-btn {
  background-color: rgba(255, 255, 255, 0);
  border-left: 2px solid #3f3f3f;
  border-right: 2px solid #3f3f3f;
  padding-block: 1.25rem;
  width: 10rem;
}
.btn {
  display: flex;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  border: none;
  background: linear-gradient(#014cfc, #0198fc);
  color: white;
}
.buttons {
  display: flex;
  gap: 1em;
}
.news-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  background-color: white;
}
.news-card p:first-child {
  font-size: 1.5rem;
  font-weight: bold;
}
.news {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.profile {
  background-color: white;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 1rem;
}
.profile-name {
  font-weight: 900;
}
.status {
  color: #777;
}
aside {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.tag-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  background-color: white;
  padding: 1rem;
}
.tags {
  display: flex;
  max-width: 10rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.tag {
  background-color: rgb(232, 232, 232);
  color: #0198fc;
  border-radius: 1rem;
  padding: 0.25rem 0.5rem;
}
.poll {
  background-color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
}
.poll-desc {
  color: #777;
}
.stats {
  display: flex;
  flex-direction: column;
}
</style>
