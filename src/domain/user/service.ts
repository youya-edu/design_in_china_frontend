import localforage from "localforage";
import { User, UserKeyInfo } from "./types";
import keys from "./constants";
import { httpRequest } from "@/utils/http";
import { toLowerCaseStrEnum } from "@/utils";

type availableTypes = User | string;

async function save(
  key: keyof typeof keys,
  data: availableTypes
): Promise<boolean> {
  try {
    await localforage.setItem(key, data);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

async function get(key: keyof typeof keys): Promise<availableTypes | null> {
  try {
    const result: availableTypes | null = await localforage.getItem(key);
    return result;
  } catch (err) {
    console.error(err);
  }
  return null;
}

async function remove(key: keyof typeof keys): Promise<boolean> {
  try {
    await localforage.removeItem(key);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

async function saveUser(data: User): Promise<boolean> {
  return await save(keys.USER, data);
}

async function getUser(): Promise<User> {
  return (await get(keys.USER)) as User;
}

async function removeUser(): Promise<boolean> {
  return await remove(keys.USER);
}

async function saveJwt(data: string): Promise<boolean> {
  return await save(keys.JWT, data);
}

async function getJwt(): Promise<string> {
  return (await get(keys.JWT)) as string;
}

async function removeJwt(): Promise<boolean> {
  return await remove(keys.JWT);
}

const CheckExistenceType = toLowerCaseStrEnum("CHECK_EMAIL", "CHECK_USERNAME");

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
