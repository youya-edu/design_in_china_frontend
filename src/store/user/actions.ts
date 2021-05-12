import { ActionTree } from "vuex";
import { UsersState, RootState } from "@/store/types";
import {
  User,
  UserKeyInfo,
  UserCollection,
  JwtAuthenticationResponse,
} from "@/domain/user";
import { httpRequest } from "@/utils/http";
import {
  getUser,
  saveUser,
  removeUser,
  saveJwt,
  removeJwt,
} from "@/domain/user";
import { ModuleTypes } from "@/store/constants";
import { UserMutations } from "./constants";
import { ViewMutations } from "@/store/view/constants";
import { purifyData } from "@/utils";
import { UserActions } from "./constants";

const actions: ActionTree<UsersState, RootState> = {
  [UserActions.LOGIN]: async function ({ commit }, userKeyInfo: UserKeyInfo) {
    const response: JwtAuthenticationResponse = (
      await httpRequest.post("/login", userKeyInfo)
    ).data;
    const { jwtToken, user } = response;
    await saveJwt(jwtToken);
    await saveUser(user);
    commit(UserMutations.SET_LOGIN_USER, user);
    commit(`${ModuleTypes.VIEWS}/${ViewMutations.SHOW_ACCOUNT_LOGIN}`, false, {
      root: true,
    });
  },

  [UserActions.LOGOUT]: async function ({ commit }) {
    await removeJwt();
    await removeUser();
    commit(UserMutations.SET_LOGIN_USER, null);
  },

  [UserActions.CHECK_USER_STATUS]: async function ({ commit }) {
    const user = (await getUser()) as User;
    if (!user) {
      return;
    }
    if (!user.avatar) {
      user.avatar = "steve-jobs.jpeg";
    }
    commit(UserMutations.SET_LOGIN_USER, user);
  },

  [UserActions.LOAD_USERS]: async function ({ commit }) {
    const response: UserCollection = (await httpRequest.get("/users")).data;
    const { users } = response;
    commit(UserMutations.SET_USERS, users);
  },

  [UserActions.SIGNUP]: async function ({ commit }, userKeyInfo: UserKeyInfo) {
    try {
      await httpRequest.post("/users", userKeyInfo);
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
      await httpRequest.put("/users", toUpdate);
      await saveUser(toUpdate);
      commit(UserMutations.SET_LOGIN_USER, toUpdate);
    } catch (err) {
      console.error(err);
    }
  },
};

export default actions;
