import { Module } from "vuex";
import { RootState, ViewsState } from "@/store/types";
import getters from "./getters";
import mutations from "./mutations";

const state: ViewsState = {
  showLoginArea: false,
};

export const views: Module<ViewsState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
};
