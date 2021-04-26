import { MutationTree } from "vuex";
import { UsersState, User } from "@/store/types";

const mutations: MutationTree<UsersState> = {
  setLoginUser(state: UsersState, user: User) {
    state.currentLoginUser = user;
  },
  setUsers(state: UsersState, users: User[]) {
    state.users = users;
  },
  setUserProfile(state: UsersState, userProfile: User) {
    state.userProfile = userProfile;
  },
};

export default mutations;
