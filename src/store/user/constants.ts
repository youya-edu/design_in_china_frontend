import { upperSnakeToCamelStrEnum } from "@/utils";

const mutations = upperSnakeToCamelStrEnum(
  "SET_LOGIN_USER",
  "SET_USERS",
  "SET_USER_DETAIL"
);

const actions = upperSnakeToCamelStrEnum(
  "LOGIN",
  "LOGOUT",
  "CHECK_USER_STATUS",
  "LOAD_USERS",
  "LOAD_USER_DETAIL"
);

const getters = upperSnakeToCamelStrEnum(
  "CURRENT_LOGIN_USER",
  "USERS",
  "USER_DETAIL"
);

export { mutations, actions, getters };
