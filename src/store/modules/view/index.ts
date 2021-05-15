import { Module } from "vuex";
import { RootState, ViewsState } from "../../types";
import getters from "./getters";
import mutations from "./mutations";

function state(): ViewsState {
  return {
    showAccountLogin: false,
    showAccountSignup: false,
    showAccountSignupSuccess: false,
  };
}

export const view: Module<ViewsState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
};

export * from "./constants";
