import { ActionTree } from "vuex";
import {
  User,
  UsersState,
  RootState,
  loginInfo,
  UserCollection,
  JwtAuthenticationResponse,
} from "@/store/types";
import httpRequest from "@/utils/http";
import userUtils from "@/utils/user";
import { modules } from "@/store/constants";
import { mutations } from "./constants";
import { mutations as viewMutations } from "@/store/view/constants";
import keys from "@/utils/user/constants";

const actions: ActionTree<UsersState, RootState> = {
  login: async function ({ commit }, loginInfo: loginInfo) {
    const response: JwtAuthenticationResponse = (
      await httpRequest.post("/login", loginInfo)
    ).data;
    const { jwtToken, user } = response;
    await userUtils.save(keys.JWT, jwtToken);
    await userUtils.save(keys.USER, user);
    commit(mutations.SET_LOGIN_USER, user);
    commit(
      modules.VIEWS.concat("/").concat(viewMutations.SHOW_LOGIN_AREA),
      false,
      { root: true }
    );
  },

  logout: async function ({ commit }) {
    await userUtils.remove(keys.JWT);
    await userUtils.remove(keys.USER);
    commit(mutations.SET_LOGIN_USER, null);
  },

  checkUserStatus: async function ({ commit }) {
    commit(mutations.SET_LOGIN_USER, await userUtils.get(keys.USER));
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
};

export default actions;
