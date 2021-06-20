export const enum UserMutations {
  SET_LOGIN_USER = "setLoginUser",
  SET_DESIGNERS = "setDesigners",
}

export const enum UserActions {
  LOGIN = "login",
  LOGOUT = "logout",
  CHECK_USER_STATUS = "checkUserStatus",
  LOAD_DESIGNERS = "loadDesigners",
  SIGNUP = "signup",
  UPDATE_USER = "updateUser",
}

export const enum UserGetters {
  CURRENT_LOGIN_USER = "currentLoginUser",
  DESIGNERS = "designers",
}
