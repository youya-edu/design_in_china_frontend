import { GetterTree } from "vuex";
import { RootState, ViewsState } from "@/store/types";

const getters: GetterTree<ViewsState, RootState> = {
  showLoginArea(state: ViewsState) {
    return state.showLoginArea;
  },
};

export default getters;
