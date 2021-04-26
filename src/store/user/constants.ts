import { upperSnakeToCamelStrEnum } from "@/utils";

const mutations = upperSnakeToCamelStrEnum(
  "SET_LOGIN_USER",
  "SET_USERS",
  "SET_USER_PROFILE"
);

const actions = upperSnakeToCamelStrEnum(
  "LOGIN",
  "LOGOUT",
  "CHECK_USER_STATUS",
  "LOAD_USERS",
  "LOAD_USER_PROFILE",
  "SIGNUP",
  "CHECK_EMAIL",
  "CHECK_USERNAME",
  "CHECK_PASSWORD",
  "UPDATE_USER"
);

const getters = upperSnakeToCamelStrEnum(
  "CURRENT_LOGIN_USER",
  "USERS",
  "USER_PROFILE"
);

export { mutations, actions, getters };
