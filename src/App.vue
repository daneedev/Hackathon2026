<template>
  <Transition name="boot-screen" mode="out-in" appear>
    <Start v-if="!hasEnteredWebsite" @enter="handleEnterWebsite" />

    <div v-else class="app-shell">
      <section class="lang-switcher">
        <Button
          icon="fa-solid fa-globe"
          :label="langSwitcherLabel"
          :variant="langButtonVariant"
          :on-click="toggleLocale"
        />
      </section>
      <RouterView />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { RouterView, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import Button from "./components/Button.vue";
import Start from "./Start.vue";

const { t, locale } = useI18n();
const route = useRoute();
const hasEnteredWebsite = ref(false);

const langSwitcherLabel = computed(() =>
  locale.value === "cs"
    ? t("homepage.langSwitcher.toEn")
    : t("homepage.langSwitcher.toCs"),
);

function toggleLocale() {
  locale.value = locale.value === "cs" ? "en" : "cs";
}

function handleEnterWebsite() {
  hasEnteredWebsite.value = true;
}

const routeToVariant = {
  "/": "home",
  "/web90": "retro90s",
  "/web2000": "web2000s",
  "/web2010": "web2010s",
  "/web2020": "web2020s",
} as const;

const langButtonVariant = computed(
  () => routeToVariant[route.path as keyof typeof routeToVariant] ?? "home",
);
</script>

<style scoped>
.lang-switcher {
  position: fixed;
  top: 0.75rem;
  right: 0.75rem;
  z-index: 1000;
}

.boot-screen-enter-active,
.boot-screen-leave-active {
  transition:
    opacity 480ms ease,
    transform 480ms ease,
    filter 480ms ease;
}

.boot-screen-enter-from,
.boot-screen-leave-to {
  opacity: 0;
  transform: scale(1.01);
  filter: blur(6px);
}

.boot-screen-enter-to,
.boot-screen-leave-from {
  opacity: 1;
  transform: scale(1);
  filter: blur(0);
}
</style>
