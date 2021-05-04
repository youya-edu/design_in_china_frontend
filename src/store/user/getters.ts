import { GetterTree } from "vuex";
import { UsersState, RootState } from "@/store/types";
import { userGetters } from "./constants";

const getters: GetterTree<UsersState, RootState> = {
  [userGetters.CURRENT_LOGIN_USER](state: UsersState) {
    return state.currentLoginUser;
  },
  [userGetters.USERS](state: UsersState) {
    return state.users;
  },
  [userGetters.USER_PROFILE](state: UsersState) {
    return state.userProfile;
  },
};

export default getters;
