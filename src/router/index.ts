import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { PHome } from "@/components/pages/PHome";
import { isJwtExpired } from "@/utils/lib";
import { clearUserData } from "@/domain";
import store from "@/store";
import { ModuleTypes } from "@/store/constants";
import { UserActions } from "@/store/user/constants";

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
    clearUserData();
  }
  // need change state
  store.dispatch(`${ModuleTypes.USERS}/${UserActions.CHECK_USER_STATUS}`);
  next();
});
export default router;
