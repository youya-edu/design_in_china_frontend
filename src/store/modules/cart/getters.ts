import { GetterTree } from "vuex";
import { CartState, RootState } from "../../types";
import { CartGetters } from "./constants";

const getters: GetterTree<CartState, RootState> = {
  [CartGetters.CART_ITEMS](state: CartState) {
    return state.cartItems;
  },
  [CartGetters.SELECTED_ITEMS_QUANTITY](state: CartState) {
    return state.selectedItemsQuantity;
  },
  [CartGetters.TOTAL_PRICE](state: CartState) {
    return state.totalPrice;
  },
};

export default getters;
