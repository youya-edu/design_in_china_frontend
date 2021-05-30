export enum RouteName {
  HOME = "Home",
  LOGIN = "Login",
  SIGNUP = "Signup",
  DESIGNERS = "Designers",
  USER_PROFILE = "UserProfile",
  COMPOSITIONS = "Compositions",
  SETTINGS = "Settings",
  CART = "Cart",
  NOT_FOUND = "NotFound",
}

export const RedirectBlackList: string[] = [
  RouteName.SIGNUP,
  RouteName.LOGIN,
  RouteName.NOT_FOUND,
];
