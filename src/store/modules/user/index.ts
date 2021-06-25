import { Module } from "vuex";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import { UsersState, RootState } from "../../types";

function state(): UsersState {
  return {
    currentLoginUser: null,
  };
}

export const user: Module<UsersState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export * from "./constants";
