import { User } from "@/domain/user";

export interface RootState {
  version: string;
}

export interface UsersState {
  currentLoginUser: User | null;
  users: User[];
}

export interface ViewsState {
  showAccountLogin: boolean;
  showAccountSignup: boolean;
  showAccountSignupSuccess: boolean;
}
