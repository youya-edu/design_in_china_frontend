import { GetterTree } from "vuex";
import { UsersState, RootState } from "@/store/types";

const getters: GetterTree<UsersState, RootState> = {
  currentLoginUser(state: UsersState) {
    return state.currentLoginUser;
  },
  users(state: UsersState) {
    return state.users;
  },
  userDetail(state: UsersState) {
    return state.userDetail;
  },
};

export default getters;
