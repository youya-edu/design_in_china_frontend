import { MutationTree } from "vuex";
import { UsersState } from "@/store/types";
import { User } from "@/domain/user";
import { UserMutations } from "./constants";

const mutations: MutationTree<UsersState> = {
  [UserMutations.SET_LOGIN_USER](state: UsersState, user: User) {
    state.currentLoginUser = user;
  },
  [UserMutations.SET_USERS](state: UsersState, users: User[]) {
    state.users = users;
  },
};

export default mutations;
