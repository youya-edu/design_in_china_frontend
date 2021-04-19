import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { pCommonHome } from "@/components/pages/common/home";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: pCommonHome,
    props: true,
  },
  {
    path: "/users",
    name: "Users",
    component: () =>
      import(
        /* webpackChunkName: "users" */ "@/components/pages/user/users/users.vue"
      ),
    props: true,
  },
  {
    path: "/compositions",
    name: "Compositions",
    component: () =>
      import(
        /* webpackChunkName: "compositions" */ "@/components/pages/composition/compisitions/compositions.vue"
      ),
    props: true,
  },
  {
    path: "/users/:userId",
    name: "UserDetail",
    component: () =>
      import(
        /* webpackChunkName: "user-detail" */ "@/components/pages/user/detail/detail.vue"
      ),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
