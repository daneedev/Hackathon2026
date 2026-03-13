import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import Web90s from "./web90s.vue";
import Web0s from "./web0s.vue";
import Web20s from "./views/web20s.vue";
import web10s from "./web10s.vue";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        el: to.hash,
        top: 16,
        behavior: "smooth",
      };
    }

    return { top: 0, left: 0 };
  },
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
    {
      path: "/web2020",
      name: "web2020",
      component: Web20s,
    },
    {
      path: "/web2010",
      name: "web2010",
      component: web10s,
    },
  ],
});

export default router;
