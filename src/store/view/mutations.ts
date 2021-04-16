import { MutationTree } from "vuex";
import { ViewsState } from "@/store/types";

const mutations: MutationTree<ViewsState> = {
  showLoginArea(state: ViewsState, show: boolean) {
    state.showLoginArea = show;
  },
};

export default mutations;
