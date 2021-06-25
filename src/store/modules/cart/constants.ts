export const enum CartMutations {
  SET_CART_ITEMS = "setCartItems",
  SET_CART_PAGE = "setCartPage",
  REMOVE_ITEM = "removeItem",
  CHANGE_QUANTITY = "changeQuantity",
}

export const enum CartActions {
  LOAD_CART = "loadCart",
}

export const enum CartGetters {
  CART_ITEMS = "cartItems",
  TOTAL_SIZE = "totalSize",
  SELECTED_ITEMS_QUANTITY = "selectedItemsQuantity",
  TOTAL_PRICE = "totalPrice",
}
