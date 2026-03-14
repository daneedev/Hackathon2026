<template>
  <main>
    <section class="hero-section">
      <div class="hero-shadow">
                  <router-link :to="{ name: 'home' }" class="back-button"
        >← Zpět na úvod</router-link
        >
        <div class="hero-content">
          <p class="hero-kicker">Moderní web</p>
            <h1>
              Internet
              <TextGradient primaryColor="#49b8f3" secondaryColor="#1B5A9D"
                >dneška</TextGradient
              >
            </h1>
            <p class="hero-subtitle">
              Od mobilních aplikací po AI — dnešní internet je všude kolem nás.
              Minimalistický, rychlý, propojený.
            </p>
        </div>
      </div>
    </section>
    <section class="grid-container">
      <section class="grid-item grid-double">
        <p class="item-emoji">📱</p>
        <h2 class="item-title">Mobile first</h2>
        <p class="item-description">
          Dnešní web je navržen pro mobilní zařízení. Rychlé načítání,
          jednoduché rozhraní a optimalizace pro dotykové ovládání jsou klíčové.
        </p>
        <div class="badges">
          <Badge
            label="React"
            color="#61DAFB"
            backgroundColor="#61DAFB33"
            borderColor="#61DAFB"
          />
          <Badge
            label="Flutter"
            color="#00C5D1"
            backgroundColor="#00C5D133"
            borderColor="#00C5D1"
          />
          <Badge
            label="SwiftUI"
            color="#FA7343"
            backgroundColor="#FA734333"
            borderColor="#FA7343"
          />
          <Badge
            label="Kotlin"
            color="#73C34A"
            backgroundColor="#73C34A33"
            borderColor="#73C34A"
          />
        </div>
      </section>
      <section class="grid-item">
        <p class="item-emoji">🤖</p>
        <h2 class="item-title">AI & Personalizace</h2>
        <p class="item-description">
          Dnešní web využívá umělou inteligenci pro personalizaci obsahu,
          doporučení a zlepšení uživatelského zážitku. Chatboti, doporučovací
          algoritmy a generativní AI jsou běžnou součástí moderního webu.
        </p>
        <div class="item-stat">
          <h1>5.3B</h1>
          <p>uživatelů internetu</p>
        </div>
      </section>
      <section class="grid-item">
        <p class="item-emoji">☁️</p>
        <h2 class="item-title">Cloud & Edge Computing</h2>
        <p class="item-description">
          Dnešní web běží na cloudu a využívá edge computing pro rychlejší
          načítání a lepší výkon. Serverless architektura a CDN jsou klíčové pro
          moderní webové aplikace.
        </p>
      </section>
      <section class="grid-item">
        <p class="item-emoji">🔒</p>
        <h2 class="item-title">Kybernetická bezpečnost</h2>
        <p class="item-description">
          S rostoucí závislostí na internetu je kybernetická bezpečnost
          důležitější než kdy dříve. Ochrana dat, šifrování a bezpečné protokoly
          jsou nezbytné pro důvěru uživatelů a bezpečný online zážitek.
        </p>
      </section>
      <section class="grid-item">
        <p class="item-emoji">🌐</p>
        <h2 class="item-title">Web3 & Decentralizace</h2>
        <p class="item-description">
          Web3 slibuje decentralizovaný internet, kde uživatelé mají větší
          kontrolu nad svými daty a online identitou. Blockchain, kryptoměny a
          decentralizované aplikace jsou klíčovými prvky této nové éry
          internetu.
        </p>
      </section>
      <section class="grid-item grid-triple">
        <h2 class="item-title">Milníky moderního webu</h2>
        <ul>
          <li>
            <span class="blue">
              2011 <font-awesome-icon icon="fa-solid fa-circle"
            /></span>
            Responzivní design
          </li>
          <li>
            <span class="blue">
              2013 <font-awesome-icon icon="fa-solid fa-circle"
            /></span>
            React.js od Facebooku
          </li>
          <li>
            <span class="blue">
              2015 <font-awesome-icon icon="fa-solid fa-circle"
            /></span>
            Představení HTTP/2
          </li>
          <li>
            <span class="blue">
              2016 <font-awesome-icon icon="fa-solid fa-circle"
            /></span>
            Progresivní webové aplikace (PWA)
          </li>
          <li>
            <span class="blue">
              2020 <font-awesome-icon icon="fa-solid fa-circle"
            /></span>
            Pandemie urychluje přechod na cloud a vzdálenou práci
          </li>
          <li>
            <span class="blue">
              2022 <font-awesome-icon icon="fa-solid fa-circle"
            /></span>
            ChatGPT mění pravidla hry
          </li>
          <li>
            <span class="blue">
              2024 <font-awesome-icon icon="fa-solid fa-circle"
            /></span>
            AI agenti a multimodální modely
          </li>
        </ul>
      </section>
    </section>
  </main>
</template>

<script setup lang="ts">
import Badge from "../components/Badge.vue";
import TextGradient from "../components/TextGradient.vue";
</script>

<style scoped>
main {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: var(--text-color);
  font-family: "Archivo", sans-serif;
  background-color: hsl(222 47% 11%);
  cursor:
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Ccircle cx='10' cy='10' r='8' fill='none' stroke='%2338BDF8' stroke-width='1.5'/%3E%3Ccircle cx='10' cy='10' r='2' fill='%2338BDF8'/%3E%3C/svg%3E"),
    auto;
}

.back-button {
  align-self: flex-start;
  margin: 1.5rem 2rem 0;
  padding: 0.55rem 0.9rem;
  border: 1px solid rgba(73, 184, 243, 0.5);
  border-radius: 999px;
  color: #9fdfff;
  text-decoration: none;
  background-color: rgba(73, 184, 243, 0.12);
  transition: transform 150ms ease;
  cursor: pointer;
}

.back-button:hover,
.back-button:focus-visible {
  background-color: rgba(73, 184, 243, 0.2);
  transform: translateY(-1px);
}

.hero-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 12px;  
  background-image: url(/modern-page-BG.jpg);
  background-size: cover;
  box-sizing: border-box;
}
.hero-shadow{
  background-color: rgba(0, 0, 0, 0.445);
  width: 100%;
  height: 100%;
  padding: 2rem;
  border-radius: 12px;
}
.hero-content{
  padding-block: 10rem;
}
.hero-section h1 {
  font-size: 3rem;
  font-family: "Archivo Black", sans-serif;
  line-height: 1.05;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #a5a5a5;
  max-width: 56ch;
}

.hero-kicker {
  text-transform: uppercase;
  color: #49b8f3;
  letter-spacing: 0.14em;
  font-size: 0.8rem;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 0 2rem;
  margin: 1rem 0;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem;
}

.grid-double {
  grid-column: span 2;
}
.grid-triple {
  grid-column: span 3;
}
.item-emoji {
  font-size: 2rem;
  margin: 1rem;
}
.item-title {
  font-size: 1.5rem;
  margin: 0 1rem;
}
.item-description {
  font-size: 1rem;
  margin: 0 1rem 1rem;
  color: #a5a5a5;
}
.badges {
  display: flex;
  gap: 1rem;
  margin: 0 1rem 1rem;
}
.item-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
}
.item-stat h1 {
  font-size: 2rem;
  font-weight: 700;
  color: #49b8f3;
}
.item-stat p {
  font-size: 0.9rem;
  color: #a5a5a5;
}

.grid-item ul {
  list-style: none;
  padding: 0 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.grid-item li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #a5a5a5;
}
.blue {
  color: #49b8f3;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

@media (max-width: 1024px) {
  .hero-content {
    padding-block: 7rem;
  }

  .grid-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }

  .grid-double,
  .grid-triple {
    grid-column: span 2;
  }
}

@media (max-width: 700px) {
  .hero-shadow {
    padding: 1.25rem;
  }

  .back-button {
    margin: 0.5rem 0.5rem 0;
    padding: 0.45rem 0.75rem;
    font-size: 0.85rem;
  }

  .hero-content {
    padding-block: 4rem;
  }

  .hero-section h1 {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
    line-height: 1.5;
  }

  .grid-container {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }

  .grid-double,
  .grid-triple {
    grid-column: span 1;
  }

  .item-title {
    font-size: 1.25rem;
  }

  .item-emoji {
    font-size: 1.7rem;
  }

  .badges {
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .grid-item li {
    align-items: flex-start;
  }
}

@media (max-width: 320px) {
  .hero-shadow {
    padding: 0.85rem;
    border-radius: 8px;
  }

  .hero-content {
    padding-block: 2.2rem;
  }

  .hero-kicker {
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    margin-top: 1rem;
    margin-bottom: 0.55rem;
  }

  .hero-section h1 {
    font-size: 1.6rem;
    line-height: 1.15;
    word-break: break-word;
  }

  .hero-subtitle {
    font-size: 0.9rem;
  }

  .grid-container {
    padding: 0 0.55rem;
    gap: 0.75rem;
  }

  .grid-item {
    padding: 0.75rem;
    border-radius: 10px;
  }

  .item-emoji {
    margin: 0.5rem;
  }

  .item-title {
    margin: 0 0.5rem;
    font-size: 1.1rem;
    line-height: 1.25;
  }

  .item-description {
    margin: 0 0.5rem 0.75rem;
    font-size: 0.9rem;
    line-height: 1.45;
  }

  .badges {
    margin: 0 0.5rem 0.5rem;
  }

  .item-stat {
    margin: 0.5rem;
  }

  .item-stat h1 {
    font-size: 1.6rem;
  }

  .item-stat p {
    text-align: center;
  }

  .grid-item ul {
    padding: 0 0.5rem 0.5rem;
    gap: 0.55rem;
  }

  .grid-item li {
    font-size: 0.86rem;
    line-height: 1.35;
    flex-wrap: wrap;
  }

  .blue {
    gap: 0.35rem;
    font-size: 0.84rem;
  }

  .back-button {
    margin: 0;
    padding: 0.35rem 0.6rem;
    font-size: 0.78rem;
  }
}
</style>
