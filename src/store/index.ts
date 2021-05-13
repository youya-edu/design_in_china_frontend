import { createStore, StoreOptions } from "vuex";
import { RootState } from "./types";
import { users } from "./user";
import { views } from "./view";

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
