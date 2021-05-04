import { MutationTree } from "vuex";
import { UsersState } from "@/store/types";
import { User } from "@/domain/user";
import { userMutations } from "./constants";

const mutations: MutationTree<UsersState> = {
  [userMutations.SET_LOGIN_USER](state: UsersState, user: User) {
    state.currentLoginUser = user;
  },
  [userMutations.SET_USERS](state: UsersState, users: User[]) {
    state.users = users;
  },
  [userMutations.SET_USER_PROFILE](state: UsersState, userProfile: User) {
    state.userProfile = userProfile;
  },
};

export default mutations;
