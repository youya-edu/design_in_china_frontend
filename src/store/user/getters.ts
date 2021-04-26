import { GetterTree } from "vuex";
import { UsersState, RootState } from "@/store/types";

const getters: GetterTree<UsersState, RootState> = {
  currentLoginUser(state: UsersState) {
    return state.currentLoginUser;
  },
  users(state: UsersState) {
    return state.users;
  },
  userProfile(state: UsersState) {
    return state.userProfile;
  },
};

export default getters;
