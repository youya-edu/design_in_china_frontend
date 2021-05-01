import { User } from "@/domain/user";

export interface RootState {
  version: string;
}

export interface UsersState {
  currentLoginUser: User | null;
  users: User[];
  userProfile: User | null;
}

export interface ViewsState {
  showAccountLogin: boolean;
  showAccountSignup: boolean;
  showAccountSignupSuccess: boolean;
}
