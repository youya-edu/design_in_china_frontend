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
import { get, save, remove } from "@/utils/user";
import { modules } from "@/store/constants";
import { mutations } from "./constants";
import { mutations as viewMutations } from "@/store/view/constants";
import keys from "@/utils/user/constants";

const actions: ActionTree<UsersState, RootState> = {
  login: async function ({ commit }, userKeyInfo: UserKeyInfo) {
    const response: JwtAuthenticationResponse = (
      await httpRequest.post("/login", userKeyInfo)
    ).data;
    const { jwtToken, user } = response;
    await save(keys.JWT, jwtToken);
    await save(keys.USER, user);
    commit(mutations.SET_LOGIN_USER, user);
    commit(
      modules.VIEWS.concat("/").concat(viewMutations.SHOW_ACCOUNT_LOGIN),
      false,
      { root: true }
    );
  },

  logout: async function ({ commit }) {
    await remove(keys.JWT);
    await remove(keys.USER);
    commit(mutations.SET_LOGIN_USER, null);
  },

  checkUserStatus: async function ({ commit }) {
    commit(mutations.SET_LOGIN_USER, await get(keys.USER));
  },

  loadUsers: async function ({ commit }) {
    const response: UserCollection = (await httpRequest.get("/users")).data;
    const { users } = response;
    commit(mutations.SET_USERS, users);
  },

  loadUserDetail: async function ({ commit }, userId: number) {
    const userDetail: User = (await httpRequest.get("/users/" + userId)).data;
    commit(mutations.SET_USER_DETAIL, userDetail);
  },

  signup: async function ({ commit }, userKeyInfo: UserKeyInfo) {
    try {
      await httpRequest.post("/users", userKeyInfo);
      commit(
        modules.VIEWS.concat("/").concat(
          viewMutations.SHOW_ACCOUNT_SIGNUP_SUCCESS
        ),
        true,
        { root: true }
      );
    } catch (err) {
      console.error(err);
    }
  },
};

export default actions;
