import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createI18n } from "vue-i18n";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import router from "./router";

library.add(fas, far, fab);
import "./assetts/reset.css";
import cs from "./locales/cs.json";
import en from "./locales/en.json";

const i18n = createI18n({
  locale: "cs",
  fallbackLocale: "en",
  messages: {
    cs: cs,
    en: en,
  },
});

createApp(App)
  .use(router)
  .use(i18n)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
