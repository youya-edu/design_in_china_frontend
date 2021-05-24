import { MutationTree } from "vuex";
import { CartMutations } from "./constants";
import { CartState } from "../../types";
import { CartItem } from "@/domain";

const mutations: MutationTree<CartState> = {
  [CartMutations.CHANGE_QUANTITY](state: CartState, item: CartItem) {
    const idx = state.cartItems.findIndex((el) => el.id === item.id);
    state.cartItems[idx] = item;
  },
  [CartMutations.SET_CART_ITEMS](state: CartState, items: CartItem[]) {
    state.cartItems = items;
  },
};

export default mutations;
