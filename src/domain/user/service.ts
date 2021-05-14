import localforage from "localforage";
import { User } from "./types";
import { IndexedDbKeys } from "./constants";

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

function validateEmail(email: string): boolean {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

async function clearUserData(): Promise<void> {
  await removeJwt();
  await removeUser();
}

export { saveUser, getUser, saveJwt, getJwt, validateEmail, clearUserData };
