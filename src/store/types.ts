import { User, CartItem } from "@/domain";

export interface RootState {
  version: string;
}

export interface UsersState {
  currentLoginUser: User | null;
}

export interface ViewsState {
  showAccountLogin: boolean;
  showAccountSignup: boolean;
  showAccountSignupSuccess: boolean;
}

export interface CartState {
  cartItems: CartItem[];
}
