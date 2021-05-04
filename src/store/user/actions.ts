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
import { modules } from "@/store/constants";
import { userMutations } from "./constants";
import { viewMutations } from "@/store/view/constants";
import { purifyData } from "@/utils";
import { userActions } from "./constants";

const actions: ActionTree<UsersState, RootState> = {
  [userActions.LOGIN]: async function ({ commit }, userKeyInfo: UserKeyInfo) {
    const response: JwtAuthenticationResponse = (
      await httpRequest.post("/login", userKeyInfo)
    ).data;
    const { jwtToken, user } = response;
    await saveJwt(jwtToken);
    await saveUser(user);
    commit(userMutations.SET_LOGIN_USER, user);
    commit(`${modules.VIEWS}/${viewMutations.SHOW_ACCOUNT_LOGIN}`, false, {
      root: true,
    });
  },

  [userActions.LOGOUT]: async function ({ commit }) {
    await removeJwt();
    await removeUser();
    commit(userMutations.SET_LOGIN_USER, null);
  },

  [userActions.CHECK_USER_STATUS]: async function ({ commit }) {
    const user = (await getUser()) as User;
    if (!user) {
      return;
    }
    if (!user.avatar) {
      user.avatar = "steve-jobs.jpeg";
    }
    commit(userMutations.SET_LOGIN_USER, user);
  },

  [userActions.LOAD_USERS]: async function ({ commit }) {
    const response: UserCollection = (await httpRequest.get("/users")).data;
    const { users } = response;
    commit(userMutations.SET_USERS, users);
  },

  [userActions.LOAD_USER_PROFILE]: async function ({ commit }, userId: number) {
    const userProfile: User = (await httpRequest.get(`/users/${userId}`)).data;
    commit(userMutations.SET_USER_PROFILE, userProfile);
  },

  [userActions.SIGNUP]: async function ({ commit }, userKeyInfo: UserKeyInfo) {
    try {
      await httpRequest.post("/users", userKeyInfo);
      commit(
        `${modules.VIEWS}/${viewMutations.SHOW_ACCOUNT_SIGNUP_SUCCESS}`,
        true,
        { root: true }
      );
    } catch (err) {
      console.error(err);
    }
  },

  [userActions.UPDATE_USER]: async function ({ commit }, user: User) {
    try {
      const toUpdate = purifyData(user);
      await httpRequest.put("/users", toUpdate);
      await saveUser(toUpdate);
      commit(userMutations.SET_LOGIN_USER, toUpdate);
    } catch (err) {
      console.error(err);
    }
  },
};

export default actions;
