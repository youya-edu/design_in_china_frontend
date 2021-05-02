export interface User {
  id: number;
  username: string;
  email: string;
  avatar: string;
  description: string;
  nickname: string;
}

export interface UserCollection {
  users: User[];
  size: number;
}

export interface UserKeyInfo {
  email: string;
  username: string;
  password: string;
}

export interface JwtAuthenticationResponse {
  jwtToken: string;
  user: User;
}
