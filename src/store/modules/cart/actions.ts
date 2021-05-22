import { ActionTree } from "vuex";
import { CartState, RootState } from "../../types";
import { CartMutations, CartActions } from "./constants";
import { loadCart } from "@/api";

const actions: ActionTree<CartState, RootState> = {
  [CartActions.LOAD_CART]: async function ({ commit }) {
    const items = await loadCart();
    commit(CartMutations.SET_CART_ITEMS, items);
    commit(CartMutations.SET_SELECTED_ITEMS_QUANTITY, items);
    commit(CartMutations.SET_TOTAL_PRICE, items);
    console.log(items);
  },
};

export default actions;
