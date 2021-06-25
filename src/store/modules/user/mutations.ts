import { MutationTree } from "vuex";
import { UserMutations } from "./constants";
import { UsersState } from "../../types";
import { User } from "@/domain";

const mutations: MutationTree<UsersState> = {
  [UserMutations.SET_LOGIN_USER](state: UsersState, user: User) {
    state.currentLoginUser = user;
  },
};

export default mutations;
