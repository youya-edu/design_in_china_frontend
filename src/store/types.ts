export interface RootState {
  version: string;
}

export interface User {
  username: string;
  email: string;
  avatar: string;
  description: string;
}

export interface UserCollection {
  users: User[];
  size: number;
}

export interface UserKeyInfo {
  email: string;
  username?: string;
  password: string;
}

export interface JwtAuthenticationResponse {
  jwtToken: string;
  user: User;
}

export interface UsersState {
  currentLoginUser: User | null;
  users: User[];
  userDetail: User | null;
}

export interface ViewsState {
  showAccountLogin: boolean;
  showAccountSignup: boolean;
  showAccountSignupSuccess: boolean;
}
