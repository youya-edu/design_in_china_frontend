import { Module } from "vuex";
import { UsersState, RootState } from "@/store/types";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import { User } from "@/domain";

const state: UsersState = {
  currentLoginUser: null,
  users: [],
  userProfile: null,
};

export const users: Module<UsersState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export function getUsers(): User[] {
  return state.users;
}
