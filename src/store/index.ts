import { createStore, StoreOptions } from "vuex";
import { RootState } from "./types";
import { users } from "./modules/user";
import { views } from "./modules/view";

const store: StoreOptions<RootState> = {
  state() {
    return {
      version: "1.0.0",
    };
  },
  modules: {
    users,
    views,
  },
};

export default createStore<RootState>(store);

export * from "./modules/user";
export * from "./modules/view";
export * from "./constants";
export * from "./types";
