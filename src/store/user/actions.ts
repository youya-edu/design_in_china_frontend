import { ActionTree } from "vuex";
import {
  User,
  UsersState,
  RootState,
  UserKeyInfo,
  UserCollection,
  JwtAuthenticationResponse,
} from "@/store/types";
import { httpRequest } from "@/utils/http";
import {
  getUser,
  saveUser,
  removeUser,
  saveJwt,
  removeJwt,
} from "@/utils/user";
import { modules } from "@/store/constants";
import { mutations } from "./constants";
import { mutations as viewMutations } from "@/store/view/constants";
import { purifyData } from "@/utils";

const actions: ActionTree<UsersState, RootState> = {
  login: async function ({ commit }, userKeyInfo: UserKeyInfo) {
    const response: JwtAuthenticationResponse = (
      await httpRequest.post("/login", userKeyInfo)
    ).data;
    const { jwtToken, user } = response;
    await saveJwt(jwtToken);
    await saveUser(user);
    commit(mutations.SET_LOGIN_USER, user);
    commit(`${modules.VIEWS}/${viewMutations.SHOW_ACCOUNT_LOGIN}`, false, {
      root: true,
    });
  },

  logout: async function ({ commit }) {
    await removeJwt();
    await removeUser();
    commit(mutations.SET_LOGIN_USER, null);
  },

  checkUserStatus: async function ({ commit }) {
    const user = (await getUser()) as User;
    if (!user) {
      return;
    }
    if (!user.avatar) {
      user.avatar = "steve-jobs.jpeg";
    }
    commit(mutations.SET_LOGIN_USER, user);
  },

  loadUsers: async function ({ commit }) {
    const response: UserCollection = (await httpRequest.get("/users")).data;
    const { users } = response;
    commit(mutations.SET_USERS, users);
  },

  loadUserProfile: async function ({ commit }, userId: number) {
    const userProfile: User = (await httpRequest.get(`/users/${userId}`)).data;
    commit(mutations.SET_USER_PROFILE, userProfile);
  },

  signup: async function ({ commit }, userKeyInfo: UserKeyInfo) {
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

  updateUser: async function ({ commit }, user: User) {
    try {
      const toUpdate = purifyData(user);
      await httpRequest.put("/users", toUpdate);
      await saveUser(toUpdate);
      commit(mutations.SET_LOGIN_USER, toUpdate);
    } catch (err) {
      console.error(err);
    }
  },
};

export default actions;
