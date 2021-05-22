import { MutationTree } from "vuex";
import { CartMutations } from "./constants";
import { CartState } from "../../types";
import { CartItem } from "@/domain";

const mutations: MutationTree<CartState> = {
  // eslint-disable-next-line
  [CartMutations.CHANGE_QUANTITY](state: CartState, payload: any) {
    const { newQuantity, item } = payload;
    const diff = newQuantity - item.quantity;
    state.selectedItemsQuantity += diff;
    state.totalPrice += diff * item.price;
    item.quantity = newQuantity;
  },
  [CartMutations.SET_CART_ITEMS](state: CartState, items: CartItem[]) {
    state.cartItems = items;
  },
  [CartMutations.SET_TOTAL_PRICE](state: CartState, items: CartItem[]) {
    state.totalPrice = items.reduce((sum, item) => sum + item.price, 0);
  },
  [CartMutations.SET_SELECTED_ITEMS_QUANTITY](
    state: CartState,
    items: CartItem[]
  ) {
    state.selectedItemsQuantity = items.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
  },
};

export default mutations;
