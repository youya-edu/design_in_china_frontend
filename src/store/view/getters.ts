import { GetterTree } from "vuex";
import { RootState, ViewsState } from "@/store/types";

const getters: GetterTree<ViewsState, RootState> = {
  showAccountLogin(state: ViewsState) {
    return state.showAccountLogin;
  },
  showAccountSignup(state: ViewsState) {
    return state.showAccountSignup;
  },
  showAccountSignupSuccess(state: ViewsState) {
    return state.showAccountSignupSuccess;
  },
};

export default getters;
