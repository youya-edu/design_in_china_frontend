import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { PHome } from "@/components";
import { isJwtExpired } from "@/utils/lib";
import store, { ModuleTypes, UserActions } from "@/store";
import { RouteName, RedirectBlackList } from "./constant";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: RouteName.HOME,
    component: PHome,
    props: true,
  },
  {
    path: "/login",
    name: RouteName.LOGIN,
    component: () =>
      import(
        /* webpackChunkName: "Login" */ "@/components/pages/PLogin/PLogin.vue"
      ),
    props: true,
  },
  {
    path: "/signup",
    name: RouteName.SIGNUP,
    component: () =>
      import(
        /* webpackChunkName: "Signup" */ "@/components/pages/PSignup/PSignup.vue"
      ),
    props: true,
  },
  {
    path: "/designers",
    name: RouteName.DESIGNERS,
    component: () =>
      import(
        /* webpackChunkName: "Designers" */ "@/components/pages/PDesigners/PDesigners.vue"
      ),
    props: true,
  },
  {
    path: "/compositions",
    name: RouteName.COMPOSITIONS,
    component: () =>
      import(
        /* webpackChunkName: "Compositions" */ "@/components/pages/PCompositions/PCompositions.vue"
      ),
    props: true,
  },
  {
    path: "/users/:username",
    name: RouteName.USER_PROFILE,
    component: () =>
      import(
        /* webpackChunkName: "UserProfile" */ "@/components/pages/PUserProfile/PUserProfile.vue"
      ),
    alias: ["/:username"],
    props: true,
  },
  {
    path: "/settings",
    name: RouteName.SETTINGS,
    component: () =>
      import(
        /* webpackChunkName: "Settings" */ "@/components/pages/PSettings/PSettings.vue"
      ),
    props: true,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/cart",
    name: RouteName.CART,
    component: () =>
      import(
        /* webpackChunkName: "Cart" */ "@/components/pages/PCart/PCart.vue"
      ),
    props: true,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/404",
    alias: "/:pathMatch(.*)*",
    name: RouteName.NOT_FOUND,
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
  if (to.name === RouteName.LOGIN) {
    if (to.query.redirect) {
      next();
    } else {
      const fromName = from.name as string;
      if (!fromName || RedirectBlackList.includes(fromName)) {
        to.query.redirect = "/";
      } else {
        to.query.redirect = from.fullPath;
      }
      next();
    }
  } else if (to.matched.some((route) => route.meta.requireAuth)) {
    const jwtExpired = await isJwtExpired();
    if (jwtExpired) {
      store.dispatch(`${ModuleTypes.USER}/${UserActions.LOGOUT}`);
      next({ name: RouteName.LOGIN, query: { redirect: to.fullPath } });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
export * from "./constant";
