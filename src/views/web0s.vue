<script setup lang="ts">
import ZerosNewsCard from "../components/ZerosNewsCard.vue";
import ZerosNewsModel from "../components/ZerosNewsModel.vue";
import percentageBar from "../components/percentageBar.vue";
import { useI18n } from "vue-i18n";
import { useSoundPlayer } from "../composables/useSoundPlayer";

const { t, tm } = useI18n();
const getTags = () => tm("web0s.sidebar.tags") as string[];

const { playSound } = useSoundPlayer();
function playClickSound() {
  playSound("/sounds/mouse-click.mp3", 0.7, 0.9);
}
</script>
<template>
  <div class="container">
    <header>
      <div class="header-content">
        <a href="#" class="logo">{{ t("web0s.header.logo") }}</a>
        <div class="header-navigations">
          <RouterLink class="nav-btn" to="/" @click="playClickSound">
            {{ t("web0s.header.home") }}
          </RouterLink>
          <RouterLink class="nav-btn" to="/web90" @click="playClickSound">
            {{ t("web0s.header.nav90s") }}
          </RouterLink>
          <RouterLink class="nav-btn" to="/web2010" @click="playClickSound">
            {{ t("web0s.header.nav10s") }}
          </RouterLink>
          <RouterLink class="nav-btn" to="/web2020" @click="playClickSound">
            {{ t("web0s.header.nav20s") }}
          </RouterLink>
        </div>
      </div>
    </header>
    <main>
      <section class="news">
        <section class="news-card">
          <ZerosNewsModel
            :title="t('web0s.news.ipod.title')"
            :content="t('web0s.news.ipod.content')"
            :comments="t('web0s.news.ipod.comments')"
            modelSrc="/models/iPod.glb"
            :rotation="Math.PI + 2"
            :scale="7"
            :learnMore="t('web0s.news.ipod.learnMore')"
            :commentsTitle="t('web0s.news.ipod.commentsTitle')"
          />
          <h1>{{ t("web0s.hero.title") }}</h1>
          <p>
            {{ t("web0s.hero.description") }}
          </p>
          <div class="buttons">
            <button class="btn" @click="playClickSound">
              {{ t("web0s.hero.likeButton") }}
            </button>
            <button class="btn" @click="playClickSound">
              {{ t("web0s.hero.shareButton") }}
            </button>
          </div>
        </section>
        <ZerosNewsCard
          :title="t('web0s.news.myspaceFacebook.title')"
          :content="t('web0s.news.myspaceFacebook.content')"
          :comments="t('web0s.news.myspaceFacebook.comments')"
          modelSrc=""
          :learnMore="t('web0s.news.myspaceFacebook.learnMore')"
          :commentsTitle="t('web0s.news.myspaceFacebook.commentsTitle')"
        />
        <ZerosNewsCard
          :title="t('web0s.news.youtube.title')"
          :content="t('web0s.news.youtube.content')"
          :comments="t('web0s.news.youtube.comments')"
          modelSrc=""
          :learnMore="t('web0s.news.flashDrive.learnMore')"
          :commentsTitle="t('web0s.news.flashDrive.commentsTitle')"
        />
        <ZerosNewsModel
          :title="t('web0s.news.iphone.title')"
          :content="t('web0s.news.iphone.content')"
          :comments="t('web0s.news.iphone.comments')"
          modelSrc="/models/cell-phone.glb"
          :rotation="2.2"
          :scale="1"
          :learnMore="t('web0s.news.iphone.learnMore')"
          :commentsTitle="t('web0s.news.iphone.commentsTitle')"
        />
        <ZerosNewsModel
          :title="t('web0s.news.mouse.title')"
          :content="t('web0s.news.mouse.content')"
          :comments="t('web0s.news.mouse.comments')"
          modelSrc="/models/computer-mouse.glb"
          :rotation="Math.PI + 9"
          :scale="0.3"
          :learnMore="t('web0s.news.mouse.learnMore')"
          :commentsTitle="t('web0s.news.mouse.commentsTitle')"
        />
        <ZerosNewsModel
          :title="t('web0s.news.monitor.title')"
          :content="t('web0s.news.monitor.content')"
          :comments="t('web0s.news.monitor.comments')"
          modelSrc="/models/TV.glb"
          :rotation="Math.PI + 2"
          :scale="1"
          :learnMore="t('web0s.news.monitor.learnMore')"
          :commentsTitle="t('web0s.news.monitor.commentsTitle')"
        />
        <ZerosNewsModel
          :title="t('web0s.news.flashDrive.title')"
          :content="t('web0s.news.flashDrive.content')"
          :comments="t('web0s.news.flashDrive.comments')"
          modelSrc="/models/flash-drive.glb"
          :rotation="Math.PI + 4"
          :scale="0.5"
          :learnMore="t('web0s.news.flashDrive.learnMore')"
          :commentsTitle="t('web0s.news.flashDrive.commentsTitle')"
        />
      </section>
      <aside>
        <section class="profile">
          <img src="/cool-emoji.png" />
          <p class="profile-name">{{ t("web0s.sidebar.profileName") }}</p>
          <p class="status">{{ t("web0s.sidebar.status") }}</p>
          <div>⭐⭐⭐⭐⭐</div>
        </section>
        <section class="tag-section">
          <p class="profile-name">{{ t("web0s.sidebar.tagCloudTitle") }}</p>
          <div class="tags">
            <div v-for="tag in getTags()" :key="tag" class="tag">{{ tag }}</div>
          </div>
        </section>
        <section class="poll">
          <p class="poll-title">{{ t("web0s.sidebar.pollTitle") }}</p>
          <p class="poll-desc">{{ t("web0s.sidebar.pollDescription") }}</p>
          <div class="stats">
            <percentageBar
              :title="t('web0s.sidebar.pollOptions.firefox')"
              :percentage="45"
            />
            <percentageBar
              :title="t('web0s.sidebar.pollOptions.ie6')"
              :percentage="30"
            />
            <percentageBar
              :title="t('web0s.sidebar.pollOptions.opera')"
              :percentage="15"
            />
            <percentageBar
              :title="t('web0s.sidebar.pollOptions.safari')"
              :percentage="10"
            />
          </div>
        </section>
      </aside>
    </main>
  </div>
</template>
<style scoped lang="css">
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Pixelify+Sans:wght@400..700&display=swap");
@import "../assetts/reset.css";

a,
button,
input,
select,
textarea,
[role="button"] {
  cursor:
    url("/cursor2000r.png") 3 3,
    pointer;
}

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(225, 225, 225);
  cursor: url("/cursor2000r.png") 3 3, auto;
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
  display: flex;
  justify-content: center;
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
.news-card h1 {
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
@media (min-width: 320px) and (max-width: 680px) {
  header {
    width: 100%;
    justify-content: flex-start;
  }
  .header-content {
    width: 100%;
  }
  .logo {
    font-size: 1.25rem;
    display: flex;
  }
  .header-navigations {
    display: flex;
    justify-content: flex-end;
  }
  .header-content button {
    font-size: 0.75rem;
  }
  main {
    width: 100%;
  }
  .news-card p:first-child {
    font-size: 1.25rem;
  }
  .news-card {
    font-size: 0.75rem;
  }
  .nav-btn {
    width: 3rem;
  }
  aside p,
  div {
    font-size: 0.5rem;
  }
  .tags .tag p {
    font-size: 0.5rem;
  }
}
@media (min-width: 681px) and (max-width: 1100px) {
  header {
    width: 100%;
    justify-content: flex-start;
  }
  .header-content {
    width: 100%;
  }
  .header-navigations {
    display: flex;
    justify-content: flex-end;
  }
  main {
    width: 100%;
  }
  .nav-btn {
    width: 5rem;
  }
}
</style>
