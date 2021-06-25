import { GetterTree } from "vuex";
import { CartState, RootState } from "../../types";
import { CartGetters } from "./constants";

const getters: GetterTree<CartState, RootState> = {
  [CartGetters.CART_ITEMS](state: CartState) {
    return state.cartItems.slice(
      (state.cartPage - 1) * 20,
      state.cartPage * 20
    );
  },
  [CartGetters.TOTAL_SIZE](state: CartState) {
    return state.cartItems.length;
  },
  [CartGetters.SELECTED_ITEMS_QUANTITY](state: CartState) {
    return state.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  },
  [CartGetters.TOTAL_PRICE](state: CartState) {
    return state.cartItems
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2);
  },
};

export default getters;
