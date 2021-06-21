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
    path: "/designers/:username",
    name: RouteName.DESIGNER_PROFILE,
    component: () =>
      import(
        /* webpackChunkName: "DesignerProfile" */ "@/components/pages/PDesignerProfile/PDesignerProfile.vue"
      ),
    alias: ["/:username"],
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
    path: "/compositions/:id",
    name: RouteName.COMPOSITION_DETAIL,
    component: () =>
      import(
        /* webpackChunkName: "CompositionDetail" */ "@/components/pages/PCompositionDetail/PCompositionDetail.vue"
      ),
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
  const isLoginReq = to.name === RouteName.LOGIN;
  if (isLoginReq) {
    const noRedirectParameter = !to.query.redirect;
    //如果有重定向则不做任何修改，直接执行重定向内容
    if (noRedirectParameter) {
      const fromName = from.name as string;
      const shouldGoBackHome =
        !fromName || RedirectBlackList.includes(fromName);
      if (shouldGoBackHome) {
        to.query.redirect = "/";
      } else {
        to.query.redirect = from.fullPath;
      }
    }
    next();
  } else {
    const needAuthendication = to.matched.some(
      (route) => route.meta.requireAuth
    );
    if (needAuthendication) {
      const jwtExpired = await isJwtExpired();
      if (!jwtExpired) {
        next();
      } else {
        store.dispatch(`${ModuleTypes.USER}/${UserActions.LOGOUT}`);
        next({ name: RouteName.LOGIN, query: { redirect: to.fullPath } });
      }
    } else {
      next();
    }
  }
});
export default router;
export * from "./constant";
