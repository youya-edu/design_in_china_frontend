import { GetterTree } from "vuex";
import { UsersState, RootState } from "../../types";
import { UserGetters } from "./constants";

const getters: GetterTree<UsersState, RootState> = {
  [UserGetters.CURRENT_LOGIN_USER](state: UsersState) {
    return state.currentLoginUser;
  },
};

export default getters;
