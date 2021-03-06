import { ActionTree } from "vuex";
import { UsersState, RootState } from "../../types";
import { ModuleTypes } from "../../constants";
import { UserMutations } from "./constants";
import { ViewMutations } from "../view/constants";
import { UserActions } from "./constants";
import { login, signup, updateUser } from "@/api";
import { purifyData } from "@/utils";
import {
  User,
  UserKeyInfo,
  getUser,
  saveUser,
  saveJwt,
  clearUserData,
} from "@/domain";

const actions: ActionTree<UsersState, RootState> = {
  /**
   * 2 cases:
   * 1. successfully login and change state
   * 2. failed to login and throw 401 exception
   */
  [UserActions.LOGIN]: async function ({ commit }, userKeyInfo: UserKeyInfo) {
    const { jwtToken, user } = await login(userKeyInfo);
    await saveJwt(jwtToken);
    await saveUser(user);
    commit(UserMutations.SET_LOGIN_USER, user);
  },

  [UserActions.LOGOUT]: async function ({ commit }) {
    await clearUserData();
    commit(UserMutations.SET_LOGIN_USER, null);
  },

  [UserActions.CHECK_USER_STATUS]: async function ({ commit }) {
    const user = (await getUser()) as User;
    commit(UserMutations.SET_LOGIN_USER, user);
  },

  [UserActions.SIGNUP]: async function ({ commit }, userKeyInfo: UserKeyInfo) {
    try {
      await signup(userKeyInfo);
      commit(
        `${ModuleTypes.VIEW}/${ViewMutations.SHOW_ACCOUNT_SIGNUP_SUCCESS}`,
        true,
        { root: true }
      );
    } catch (err) {
      console.error(err);
    }
  },

  [UserActions.UPDATE_USER]: async function ({ commit }, user: User) {
    try {
      const toUpdate = purifyData(user);
      await updateUser(toUpdate);
      await saveUser(toUpdate);
      commit(UserMutations.SET_LOGIN_USER, toUpdate);
    } catch (err) {
      console.error(err);
    }
  },
};

export default actions;
