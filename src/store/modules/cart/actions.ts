import { ActionTree } from "vuex";
import { CartState, RootState } from "../../types";
import { CartMutations, CartActions } from "./constants";
import { loadCart } from "@/api";

const actions: ActionTree<CartState, RootState> = {
  [CartActions.LOAD_CART]: async function ({ commit }) {
    const items = await loadCart();
    commit(CartMutations.SET_CART_ITEMS, items);
  },
};

export default actions;
