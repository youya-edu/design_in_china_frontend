export interface RootState {
  version: string;
}

export interface User {
  username: string;
  email: string;
  avatar: string;
  description: string;
}

export interface loginInfo {
  email: string;
  password: string;
}

export interface UsersState {
  users: User[];
  currentLoginUser: User | null;
}

export interface ViewsState {
  showLoginArea: boolean;
}
