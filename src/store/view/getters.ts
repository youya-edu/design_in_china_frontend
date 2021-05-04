import { GetterTree } from "vuex";
import { RootState, ViewsState } from "@/store/types";
import { ViewGetters } from "./constants";

const getters: GetterTree<ViewsState, RootState> = {
  [ViewGetters.SHOW_ACCOUNT_LOGIN](state: ViewsState) {
    return state.showAccountLogin;
  },
  [ViewGetters.SHOW_ACCOUNT_SIGNUP](state: ViewsState) {
    return state.showAccountSignup;
  },
  [ViewGetters.SHOW_ACCOUNT_SIGNUP_SUCCESS](state: ViewsState) {
    return state.showAccountSignupSuccess;
  },
};

export default getters;
