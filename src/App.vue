<template>
  <div class="app-shell">
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
</template>

<script setup lang="ts">
import { computed } from "vue";
import { RouterView, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import Button from "./components/Button.vue";

const { t, locale } = useI18n();
const route = useRoute();

const langSwitcherLabel = computed(() =>
  locale.value === "cs"
    ? t("homepage.langSwitcher.toEn")
    : t("homepage.langSwitcher.toCs"),
);

function toggleLocale() {
  locale.value = locale.value === "cs" ? "en" : "cs";
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
</style>
