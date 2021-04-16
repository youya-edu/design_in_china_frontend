import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true,
  },
  {
    path: "/users",
    name: "User",
    component: () => import(/* webpackChunkName: "user" */ "../views/User.vue"),
    props: true,
  },
  {
    path: "/compositions",
    name: "Composition",
    component: () =>
      import(/* webpackChunkName: "composition" */ "../views/Composition.vue"),
    props: true,
  },
  {
    path: "/users/:userId",
    name: "UserDetail",
    component: () =>
      import(/* webpackChunkName: "user-detail" */ "../views/UserDetail.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
