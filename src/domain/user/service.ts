import localforage from "localforage";
import { User, UserKeyInfo } from "./types";
import { IndexedDbKeys } from "./constants";
import { httpRequest } from "@/utils/http";

type availableTypes = User | string;

async function save(key: string, data: availableTypes): Promise<boolean> {
  try {
    await localforage.setItem(key, data);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

async function get(key: IndexedDbKeys): Promise<availableTypes | null> {
  try {
    const result: availableTypes | null = await localforage.getItem(key);
    return result;
  } catch (err) {
    console.error(err);
  }
  return null;
}

async function remove(key: IndexedDbKeys): Promise<boolean> {
  try {
    await localforage.removeItem(key);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

async function saveUser(data: User): Promise<boolean> {
  return await save(IndexedDbKeys.USER, data);
}

async function getUser(): Promise<User> {
  return (await get(IndexedDbKeys.USER)) as User;
}

async function removeUser(): Promise<boolean> {
  return await remove(IndexedDbKeys.USER);
}

async function saveJwt(data: string): Promise<boolean> {
  return await save(IndexedDbKeys.JWT, data);
}

async function getJwt(): Promise<string> {
  return (await get(IndexedDbKeys.JWT)) as string;
}

async function removeJwt(): Promise<boolean> {
  return await remove(IndexedDbKeys.JWT);
}

const enum CheckExistenceType {
  CHECK_EMAIL = "check_email",
  CHECK_USERNAME = "check_username",
}

async function checkExistence(
  path: string,
  userKeyInfo: UserKeyInfo
): Promise<boolean> {
  try {
    await httpRequest.post(`/signup/${path}`, userKeyInfo);
    return false;
  } catch (error) {
    // 若后端返回422错误，则表明已存在
    return true;
  }
}

async function checkEmailExistence(userKeyInfo: UserKeyInfo): Promise<boolean> {
  return await checkExistence(CheckExistenceType.CHECK_EMAIL, userKeyInfo);
}

async function checkUsernameExistence(
  userKeyInfo: UserKeyInfo
): Promise<boolean> {
  return await checkExistence(CheckExistenceType.CHECK_USERNAME, userKeyInfo);
}

function validateEmail(email: string): boolean {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function loadAvatar(path: string): string {
  return path && require(`@/assets/avatar/${path}`);
}

export {
  saveUser,
  getUser,
  removeUser,
  saveJwt,
  getJwt,
  removeJwt,
  checkEmailExistence,
  checkUsernameExistence,
  validateEmail,
  loadAvatar,
};
