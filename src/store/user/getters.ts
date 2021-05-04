import { GetterTree } from "vuex";
import { UsersState, RootState } from "@/store/types";
import { UserGetters } from "./constants";

const getters: GetterTree<UsersState, RootState> = {
  [UserGetters.CURRENT_LOGIN_USER](state: UsersState) {
    return state.currentLoginUser;
  },
  [UserGetters.USERS](state: UsersState) {
    return state.users;
  },
  [UserGetters.USER_PROFILE](state: UsersState) {
    return state.userProfile;
  },
};

export default getters;
