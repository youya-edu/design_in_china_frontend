export enum RouteName {
  HOME = "Home",
  LOGIN = "Login",
  SIGNUP = "Signup",
  DESIGNERS = "Designers",
  DESIGNER_PROFILE = "DesignerProfile",
  COMPOSITIONS = "Compositions",
  COMPOSITION_DETAIL = "CompositionDetail",
  SETTINGS = "Settings",
  CART = "Cart",
  WISHLIST = "Wishlist",
  NOT_FOUND = "NotFound",
}

export const RedirectBlackList: string[] = [
  RouteName.SIGNUP,
  RouteName.LOGIN,
  RouteName.NOT_FOUND,
];
