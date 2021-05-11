import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { PHome } from "@/components/pages/PHome";
import { getUsers } from "@/store/user";

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
        /* webpackChunkName: "Users" */ "@/components/pages/PUsers/PUsers.vue"
      ),
    props: true,
  },
  {
    path: "/compositions",
    name: "Compositions",
    component: () =>
      import(
        /* webpackChunkName: "Compositions" */ "@/components/pages/PCompositions/PCompositions.vue"
      ),
    props: true,
  },
  {
    path: "/users/:username",
    name: "UserProfile",
    component: () =>
      import(
        /* webpackChunkName: "UserProfile" */ "@/components/pages/PUserProfile/PUserProfile.vue"
      ),
    props: true,
    beforeEnter: (to, from, next) => {
      const exists = getUsers().find(
        (user) => user.username === to.params.username
      );
      if (exists) {
        next();
      } else {
        next({ name: "NotFound" });
      }
    },
  },
  {
    path: "/settings",
    name: "Settings",
    component: () =>
      import(
        /* webpackChunkName: "Settings" */ "@/components/pages/PSettings/PSettings.vue"
      ),
    props: true,
  },
  {
    path: "/404",
    alias: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () =>
      import(
        /* webpackChunkName: "NotFound" */ "@/components/pages/PNotFound/PNotFound.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
