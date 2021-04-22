import { upperSnakeToCamelStrEnum } from "@/utils";

const getters = upperSnakeToCamelStrEnum(
  "SHOW_ACCOUNT_LOGIN",
  "SHOW_ACCOUNT_SIGNUP",
  "SHOW_ACCOUNT_SIGNUP_SUCCESS"
);

const mutations = upperSnakeToCamelStrEnum(
  "SHOW_ACCOUNT_LOGIN",
  "SHOW_ACCOUNT_SIGNUP",
  "SHOW_ACCOUNT_SIGNUP_SUCCESS"
);

export { getters, mutations };
