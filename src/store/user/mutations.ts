import { MutationTree } from "vuex";
import { UsersState, User } from "@/store/types";
import userUtils from "@/utils/userUtils";

const mutations: MutationTree<UsersState> = {
  setLoginUser(state: UsersState, user: User) {
    if (user === null) {
      userUtils.removeUser();
      state.currentLoginUser = null;
    } else {
      userUtils.saveUser(user);
      state.currentLoginUser = user;
    }
  },
};

export default mutations;
