import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { PHome } from "@/components/pages/home";

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
        /* webpackChunkName: "users" */ "@/components/pages/users/users.vue"
      ),
    props: true,
  },
  {
    path: "/compositions",
    name: "Compositions",
    component: () =>
      import(
        /* webpackChunkName: "compositions" */ "@/components/pages/compisitions/compositions.vue"
      ),
    props: true,
  },
  {
    path: "/users/:userId",
    name: "UserDetail",
    component: () =>
      import(
        /* webpackChunkName: "user-detail" */ "@/components/pages/user-detail/user-detail.vue"
      ),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
