import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { PHome } from "@/components";
import { isJwtExpired } from "@/utils/lib";
import store, { ModuleTypes, UserActions } from "@/store";

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
    alias: ["/:username"],
    props: true,
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

router.beforeEach(async (to, from, next) => {
  const jwtExpired = await isJwtExpired();
  if (jwtExpired) {
    store.dispatch(`${ModuleTypes.USER}/${UserActions.LOGOUT}`);
  }
  next();
});
export default router;
