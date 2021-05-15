import { MutationTree } from "vuex";
import { UserMutations } from "./constants";
import { UsersState } from "../../types";
import { User } from "@/domain";

const mutations: MutationTree<UsersState> = {
  [UserMutations.SET_LOGIN_USER](state: UsersState, user: User) {
    state.currentLoginUser = user;
  },
  [UserMutations.SET_USERS](state: UsersState, users: User[]) {
    state.users = users;
  },
};

export default mutations;
