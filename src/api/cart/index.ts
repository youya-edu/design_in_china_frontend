import { CartItem } from "@/domain";
import { httpRequest } from "@/utils/http";
import { API } from "./constant";

const loadCart = async (): Promise<CartItem[]> => {
  let cartItems: CartItem[] = [];
  try {
    const response = await httpRequest.get(API.CART);
    cartItems = response.data.items;
  } catch (error) {
    console.error(error);
  }
  return cartItems;
};

export { loadCart };
