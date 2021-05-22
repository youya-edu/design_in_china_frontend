import { createStore, StoreOptions } from "vuex";
import { RootState } from "./types";
import { user } from "./modules/user";
import { view } from "./modules/view";
import { cart } from "./modules/cart";

const store: StoreOptions<RootState> = {
  state() {
    return {
      version: "1.0.0",
    };
  },
  modules: {
    user,
    cart,
    view,
  },
};

export default createStore<RootState>(store);

export * from "./modules/user";
export * from "./modules/cart";
export * from "./modules/view";
export * from "./constants";
export * from "./types";
