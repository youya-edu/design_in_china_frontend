import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { PHome } from "@/components/pages/PHome";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: PHome,
    props: true,
  },
  {
    path: "/users",
    name: "Users",
    component: () =>
      import(
        /* webpackChunkName: "users" */ "@/components/pages/PUsers/PUsers.vue"
      ),
    props: true,
  },
  {
    path: "/compositions",
    name: "Compositions",
    component: () =>
      import(
        /* webpackChunkName: "compositions" */ "@/components/pages/PCompositions/PCompositions.vue"
      ),
    props: true,
  },
  {
    path: "/users/:username",
    name: "UserProfile",
    component: () =>
      import(
        /* webpackChunkName: "user-detail" */ "@/components/pages/PUserProfile/PUserProfile.vue"
      ),
    props: true,
  },
  {
    path: "/settings",
    name: "Settings",
    component: () =>
      import(
        /* webpackChunkName: "settings" */ "@/components/pages/PSettings/PSettings.vue"
      ),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
