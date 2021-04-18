import { MutationTree } from "vuex";
import { UsersState, User } from "@/store/types";

const mutations: MutationTree<UsersState> = {
  setLoginUser(state: UsersState, user: User) {
    state.currentLoginUser = user;
  },
  setUsers(state: UsersState, users: User[]) {
    state.users = users;
  },
  setUserDetail(state: UsersState, userDetail: User) {
    state.userDetail = userDetail;
  },
};

export default mutations;
