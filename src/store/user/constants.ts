const userMutations = Object.freeze({
  SET_LOGIN_USER: "setLoginUser",
  SET_USERS: "setUsers",
  SET_USER_PROFILE: "setUserProfile",
});

const userActions = Object.freeze({
  LOGIN: "login",
  LOGOUT: "logout",
  CHECK_USER_STATUS: "checkUserStatus",
  LOAD_USERS: "loadUsers",
  LOAD_USER_PROFILE: "loadUserProfile",
  SIGNUP: "signup",
  UPDATE_USER: "updateUser",
});

const userGetters = Object.freeze({
  CURRENT_LOGIN_USER: "currentLoginUser",
  USERS: "users",
  USER_PROFILE: "userProfile",
});

export { userMutations, userActions, userGetters };
