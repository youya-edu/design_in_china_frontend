import { httpRequest } from "@/utils/http";
import {
  User,
  UserKeyInfo,
  UserCollection,
  JwtAuthenticationResponse,
} from "@/domain";
import Api from "./constant";

const login = async (
  userKeyInfo: UserKeyInfo
): Promise<JwtAuthenticationResponse> => {
  const response: JwtAuthenticationResponse = (
    await httpRequest.post(Api.LOGIN, userKeyInfo)
  ).data;
  return response;
};

const signup = async (userKeyInfo: UserKeyInfo): Promise<void> => {
  await httpRequest.post(Api.USERS, userKeyInfo);
};

const fetchUserByUsername = async (username: string): Promise<User | null> => {
  let user: User | null = null;
  try {
    const response = await httpRequest.get(`${Api.USERS}/${username}`);
    user = response.data;
  } catch (error) {
    console.error(error);
  }
  return user;
};

const updateUser = async (toUpdate: User): Promise<void> => {
  await httpRequest.put(Api.USERS, toUpdate);
};

const loadUsers = async (): Promise<UserCollection> => {
  const userCollection: UserCollection = (await httpRequest.get(Api.USERS))
    .data;
  return userCollection;
};

async function checkExistence(
  path: string,
  userKeyInfo: UserKeyInfo
): Promise<boolean> {
  try {
    await httpRequest.post(path, userKeyInfo);
    return false;
  } catch (error) {
    // 若后端返回422错误，则表明已存在
    return true;
  }
}

async function checkEmailExistence(userKeyInfo: UserKeyInfo): Promise<boolean> {
  return await checkExistence(Api.CHECK_EMAIL, userKeyInfo);
}

async function checkUsernameExistence(
  userKeyInfo: UserKeyInfo
): Promise<boolean> {
  return await checkExistence(Api.CHECK_USERNAME, userKeyInfo);
}

export {
  login,
  signup,
  fetchUserByUsername,
  updateUser,
  loadUsers,
  checkEmailExistence,
  checkUsernameExistence,
};
