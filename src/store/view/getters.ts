import { GetterTree } from "vuex";
import { RootState, ViewsState } from "@/store/types";
import { viewGetters } from "./constants";

const getters: GetterTree<ViewsState, RootState> = {
  [viewGetters.SHOW_ACCOUNT_LOGIN](state: ViewsState) {
    return state.showAccountLogin;
  },
  [viewGetters.SHOW_ACCOUNT_SIGNUP](state: ViewsState) {
    return state.showAccountSignup;
  },
  [viewGetters.SHOW_ACCOUNT_SIGNUP_SUCCESS](state: ViewsState) {
    return state.showAccountSignupSuccess;
  },
};

export default getters;
