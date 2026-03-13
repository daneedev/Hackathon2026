<script setup lang="ts">
import ZerosNewsCard from './components/ZerosNewsCard.vue';
</script>
<template>
    <div class="container">
      <header>
        <div class="header-content">
          <a href="#" class="logo">&#127757; RetroNet</a>
          <div class="header-navigations">
            <button class="nav-btn" href="#">Home</button>
            <button class="nav-btn" href="#">Blog</button>
            <button class="nav-btn" href="#">About</button>
            <button class="nav-btn" href="#">Contact</button>
          </div>
        </div>
      </header>
      <main>
        <section class="news">
          <section class="news-card">
            <p>✨ Vítejte ve Web 2.0!</p>
            <p>Internet se změnil. Uživatelé už nejsou jen čtenáři – jsou tvůrci obsahu! Blogy, sociální sítě a sdílení obsahu změnily vše.</p>
            <div class="buttons">
              <button class="btn">👍Like</button>
              <button class="btn">🔗Share</button>
            </div>
          </section>
            <ZerosNewsCard title="📰 MySpace & Facebook mění sociální sítě" content="Internet se změnil. Uživatelé už nejsou jen čtenáři – jsou tvůrci obsahu! Blogy, sociální sítě a sdílení obsahu změnily vše." comments="12" img="/iphone-1.png"/>
            <ZerosNewsCard title="📹 YouTube: Revoluce videa" content="Od garáže k miliardám zhlédnutí. YouTube změnil způsob, jakým konzumujeme média. Každou minutu se nahraje 10 hodin videa!" comments="11"/>
            <ZerosNewsCard title="📱 iPhone představen!" content="Apple právě představil revoluční zařízení. Je to iPod, telefon a internetové zařízení v jednom!" comments="7"/>
            <div class="sketchfab-embed-wrapper"> <iframe title="iPhone 5" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/1NSI65tlF11NJvcySaAV8AGbfkw/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/iphone-5-1NSI65tlF11NJvcySaAV8AGbfkw?utm_medium=embed&utm_campaign=share-popup&utm_content=1NSI65tlF11NJvcySaAV8AGbfkw" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> iPhone 5 </a> by <a href="https://sketchfab.com/virtualstudio?utm_medium=embed&utm_campaign=share-popup&utm_content=1NSI65tlF11NJvcySaAV8AGbfkw" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Virtual Studio </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=1NSI65tlF11NJvcySaAV8AGbfkw" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>
        </section>
        <aside>
          <section class="profile">
            <p class="profile-name">xXWebMasterXx</p>
            <p class="status">Online právě teď</p>
            <div>⭐⭐⭐⭐⭐</div>
          </section>
        </aside>
      </main>
    </div>
</template>
<style scoped lang="css">
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Pixelify+Sans:wght@400..700&display=swap');
@import "assetts/reset.css";

.container
{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
header {
  font-family: "Inter", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 5em;
  background-color: rgb(0, 191, 255);
}
main{
  font-family: "Inter", sans-serif;
  width: 60%;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}
.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
}
header a{
  text-decoration: none;
  color: white;
}
.logo{
  font-weight: 900;
  font-size: 1.5rem;
}
.header-navigations {
  display: flex;
  gap: 2em;
}
.nav-btn
{
  background-color: white;
  border: 1px solid #777;
  padding: 0.5em 1em;
  border-radius: 3rem;
}
.btn
{
  display: flex;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  border: none;
  background: linear-gradient(#014cfc, #0198fc);
  color: white;
}
.buttons{
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
.news{
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.profile
{
  background-color: white;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
}
.profile-name
{
  font-weight: 900;

}
.status
{
  color: #777;
}
</style>