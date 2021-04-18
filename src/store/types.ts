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

export interface loginInfo {
  email: string;
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
  showLoginArea: boolean;
}
