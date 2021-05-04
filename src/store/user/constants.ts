export const enum UserMutations {
  SET_LOGIN_USER = "setLoginUser",
  SET_USERS = "setUsers",
  SET_USER_PROFILE = "setUserProfile",
}

export const enum UserActions {
  LOGIN = "login",
  LOGOUT = "logout",
  CHECK_USER_STATUS = "checkUserStatus",
  LOAD_USERS = "loadUsers",
  LOAD_USER_PROFILE = "loadUserProfile",
  SIGNUP = "signup",
  UPDATE_USER = "updateUser",
}

export const enum UserGetters {
  CURRENT_LOGIN_USER = "currentLoginUser",
  USERS = "users",
  USER_PROFILE = "userProfile",
}
