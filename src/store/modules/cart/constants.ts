export const enum CartMutations {
  SET_CART_ITEMS = "setCartItems",
  REMOVE_ITEM = "removeItem",
  CHANGE_QUANTITY = "changeQuantity",
}

export const enum CartActions {
  LOAD_CART = "loadCart",
}

export const enum CartGetters {
  CART_ITEMS = "cartItems",
  SELECTED_ITEMS_QUANTITY = "selectedItemsQuantity",
  TOTAL_PRICE = "totalPrice",
}
