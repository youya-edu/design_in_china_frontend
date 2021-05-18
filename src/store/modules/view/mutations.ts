import { MutationTree } from "vuex";
import { ViewsState } from "../../types";
import { ViewMutations } from "./constants";

const mutations: MutationTree<ViewsState> = {
  [ViewMutations.SHOW_ACCOUNT_SIGNUP_SUCCESS](
    state: ViewsState,
    show: boolean
  ) {
    state.showAccountSignupSuccess = show;
  },
};

export default mutations;
