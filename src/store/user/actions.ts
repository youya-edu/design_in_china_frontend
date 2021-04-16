import { ActionTree } from "vuex";
import { UsersState, RootState, User, loginInfo } from "@/store/types";
import httpRequest from "@/utils/http";
import userUtils from "@/utils/userUtils";

const actions: ActionTree<UsersState, RootState> = {
  login: async function ({ commit }, loginInfo: loginInfo) {
    const response = await httpRequest.post("/login", loginInfo);
    const user: User = response.data;
    commit("setLoginUser", user);
  },

  logout: async function ({ commit }) {
    await httpRequest.post("/logout", {});
    commit("setLoginUser", null);
  },

  checkUserStatus: async function ({ commit }) {
    commit("setLoginUser", await userUtils.getUser());
  },
};

export default actions;
