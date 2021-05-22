import { Module } from "vuex";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import { CartState, RootState } from "../../types";

function state(): CartState {
  return {
    cartItems: [],
    selectedItemsQuantity: 0,
    totalPrice: 0,
  };
}

export const cart: Module<CartState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export * from "./constants";
