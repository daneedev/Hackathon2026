import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import Web90s from "./web90s.vue";
import Web0s from "./web0s.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/web90",
      name: "web90",
      component: Web90s,
    },
    {
      path: "/web2000",
      name: "web2000",
      component: Web0s,
    },
  ],
});

export default router;
