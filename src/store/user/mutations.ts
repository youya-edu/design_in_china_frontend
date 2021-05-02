import { MutationTree } from "vuex";
import { UsersState } from "@/store/types";
import { User } from "@/domain/user";

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
