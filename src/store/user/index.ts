import { Module } from "vuex";
import { UsersState, RootState } from "@/store/types";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

function state(): UsersState {
  return {
    currentLoginUser: null,
    users: [],
  };
}

export const users: Module<UsersState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
