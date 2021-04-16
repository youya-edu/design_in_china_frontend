import { GetterTree } from "vuex";
import { UsersState, RootState } from "@/store/types";

const getters: GetterTree<UsersState, RootState> = {
  currentLoginUser(state: UsersState) {
    return state.currentLoginUser;
  },
};

export default getters;
