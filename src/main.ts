import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import i18n from "@/i18n";
import localforage from "localforage";
import "tailwindcss/tailwind.css";

async function run() {
  await preprocess();
  createApp(App).use(store).use(router).use(i18n).mount("#app");
}

async function preprocess() {
  await loadPreviousLocale();
}

async function loadPreviousLocale() {
  const previousLocale = await localforage.getItem("locale");
  i18n.global.locale = (previousLocale as string) || i18n.global.locale;
}

run();
