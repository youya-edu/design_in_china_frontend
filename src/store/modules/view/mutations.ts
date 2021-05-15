import { MutationTree } from "vuex";
import { ViewsState } from "../../types";
import { ViewMutations } from "./constants";

const mutations: MutationTree<ViewsState> = {
  [ViewMutations.SHOW_ACCOUNT_LOGIN](state: ViewsState, show: boolean) {
    state.showAccountLogin = show;
  },
  [ViewMutations.SHOW_ACCOUNT_SIGNUP](state: ViewsState, show: boolean) {
    state.showAccountSignup = show;
  },
  [ViewMutations.SHOW_ACCOUNT_SIGNUP_SUCCESS](
    state: ViewsState,
    show: boolean
  ) {
    state.showAccountSignupSuccess = show;
  },
};

export default mutations;
