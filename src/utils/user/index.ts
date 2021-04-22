import localforage from "localforage";
import { User, UserKeyInfo } from "@/store/types";
import keys from "./constants";
import { httpRequest, StatusCode } from "@/utils/http";

type availableTypes = User | string;

async function save(
  key: keyof typeof keys,
  result: availableTypes
): Promise<boolean> {
  try {
    await localforage.setItem(key, result);
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

async function check(path: string, userKeyInfo: UserKeyInfo): Promise<boolean> {
  const response = await httpRequest.post("/signup/".concat(path), userKeyInfo);
  return response.status != StatusCode.UNPROCESSABLE_ENTITY;
}

function validateEmail(email: string): boolean {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export { save, get, remove, check, validateEmail };
