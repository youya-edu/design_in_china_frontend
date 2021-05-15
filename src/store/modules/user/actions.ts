import { ActionTree } from "vuex";
import { UsersState, RootState } from "../../types";
import { ModuleTypes } from "../../constants";
import { UserMutations } from "./constants";
import { ViewMutations } from "../view/constants";
import { UserActions } from "./constants";
import { login, signup, updateUser, loadUsers } from "@/api";
import { purifyData } from "@/utils";
import {
  User,
  UserKeyInfo,
  UserCollection,
  getUser,
  saveUser,
  saveJwt,
  clearUserData,
} from "@/domain";

const actions: ActionTree<UsersState, RootState> = {
  [UserActions.LOGIN]: async function ({ commit }, userKeyInfo: UserKeyInfo) {
    try {
      const { jwtToken, user } = await login(userKeyInfo);
      await saveJwt(jwtToken);
      await saveUser(user);
      commit(UserMutations.SET_LOGIN_USER, user);
      commit(
        `${ModuleTypes.VIEWS}/${ViewMutations.SHOW_ACCOUNT_LOGIN}`,
        false,
        {
          root: true,
        }
      );
    } catch (err) {
      console.error(err);
    }
  },

  [UserActions.LOGOUT]: async function ({ commit }) {
    await clearUserData();
    commit(UserMutations.SET_LOGIN_USER, null);
  },

  [UserActions.CHECK_USER_STATUS]: async function ({ commit }) {
    const user = (await getUser()) as User;
    commit(UserMutations.SET_LOGIN_USER, user);
  },

  [UserActions.LOAD_USERS]: async function ({ commit }) {
    const response: UserCollection = await loadUsers();
    const { users } = response;
    commit(UserMutations.SET_USERS, users);
  },

  [UserActions.SIGNUP]: async function ({ commit }, userKeyInfo: UserKeyInfo) {
    try {
      await signup(userKeyInfo);
      commit(
        `${ModuleTypes.VIEWS}/${ViewMutations.SHOW_ACCOUNT_SIGNUP_SUCCESS}`,
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
