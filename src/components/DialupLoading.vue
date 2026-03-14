<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"

const emit = defineEmits(["complete"])

const step = ref(0)
const audioEl = ref<HTMLAudioElement | null>(null)

const messages = [
  "Připojování k síti...",
  "Vytáčení čísla...",
  "Handshaking...",
  "Ověřování uživatele...",
  "Připojeno rychlostí 56 kbps!",
  "Načítání muzea..."
]

let timers: number[] = []
let completeTimer: number | undefined
let hasCompleted = false

const finish = () => {
  if (hasCompleted) return
  hasCompleted = true
  emit("complete")
}

onMounted(() => {
  const audio = audioEl.value
  if (audio) {
    audio.volume = 0.3
    audio.currentTime = 5
    void audio.play().catch(() => {})
  }

  timers = messages.map((_, i) =>
    window.setTimeout(() => {
      step.value = i + 1
    }, (i + 1) * 600)
  )

  completeTimer = window.setTimeout(() => {
    finish()
  }, 4200)
})

onUnmounted(() => {
  timers.forEach(window.clearTimeout)
  if (completeTimer) {
    window.clearTimeout(completeTimer)
  }
  const audio = audioEl.value
  if (audio) {
    audio.pause()
    audio.currentTime = 0
  }
})
</script>

<template>
<audio ref="audioEl" src="/sounds/modem.mp3#t=5,9.2"></audio>
  <div class="dialup-overlay">
    <div class="dialup-window dialup-open">

      <div class="title-bar">
        <span>📡 Internet Connection</span>
        <span class="close-btn">✕</span>
      </div>

      <div class="content">

        <div class="messages">
          <span class="icon">🖥️</span>

          <div class="text">
            <div
              v-for="(msg, i) in messages.slice(0, step)"
              :key="i"
              :class="{ blink: i === step - 1 }"
            >
              {{ msg }}
            </div>
          </div>

        </div>

        <div class="progress">
          <div class="bar"></div>
        </div>

        <p class="wait">Prosím čekejte...</p>

      </div>
    </div>
  </div>
</template>

<style scoped>

.dialup-overlay{
  position: fixed;
  inset: 0;
  background: #000;
  display:flex;
  align-items:center;
  justify-content:center;
  z-index:9999;
  font-family: "Courier New", monospace;
}

.dialup-window{
  width:400px;
  background:#c0c0c0;
  border-top:2px solid #ffffff;
  border-left:2px solid #ffffff;
  border-right:2px solid #404040;
  border-bottom:2px solid #404040;
}

.title-bar{
  background:#000080;
  color:white;
  padding:4px 6px;
  font-size:14px;
  display:flex;
  justify-content:space-between;
  align-items:center;
}

.close-btn{
  background:#c0c0c0;
  color:black;
  padding:0 5px;
  border-top:2px solid #ffffff;
  border-left:2px solid #ffffff;
  border-right:2px solid #404040;
  border-bottom:2px solid #404040;
  font-size:12px;
}

.content{
  padding:16px;
}

.messages{
  display:flex;
  gap:12px;
  margin-bottom:14px;
}

.icon{
  font-size:28px;
}

.text{
  font-size:14px;
}

.progress{
  height:18px;
  border-top:2px solid #404040;
  border-left:2px solid #404040;
  border-right:2px solid #ffffff;
  border-bottom:2px solid #ffffff;
  background:white;
  overflow:hidden;
}

.bar{
  height:100%;
  width:40%;
  background:#000080;
  animation: progressMove 1.5s infinite linear;
}

.wait{
  font-size:12px;
  margin-top:8px;
  text-align:center;
}

.blink{
  animation: blink 0.8s infinite;
}

.dialup-open{
  animation: openAnim 0.6s cubic-bezier(0.2,0,0.2,1);
}

@keyframes progressMove{
  0%{ transform: translateX(-100%);}
  100%{ transform: translateX(300%);}
}

@keyframes blink{
  50%{opacity:0;}
}

@keyframes openAnim{
  from{
    transform:scaleY(0.01) scaleX(0.5);
    filter:brightness(10);
  }
  to{
    transform:scaleY(1) scaleX(1);
    filter:brightness(1);
  }
}

</style>
