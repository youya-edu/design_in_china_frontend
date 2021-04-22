import { MutationTree } from "vuex";
import { ViewsState } from "@/store/types";

const mutations: MutationTree<ViewsState> = {
  showAccountLogin(state: ViewsState, show: boolean) {
    state.showAccountLogin = show;
  },
  showAccountSignup(state: ViewsState, show: boolean) {
    state.showAccountSignup = show;
  },
  showAccountSignupSuccess(state: ViewsState, show: boolean) {
    state.showAccountSignupSuccess = show;
  },
};

export default mutations;
