import localforage from "localforage";
import { User } from "@/store/types";
import keys from "./constants";

type availableTypes = User | string;

export async function save(
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

export async function get(
  key: keyof typeof keys
): Promise<availableTypes | null> {
  try {
    const result: availableTypes | null = await localforage.getItem(key);
    return result;
  } catch (err) {
    console.error(err);
  }
  return null;
}

export async function remove(key: keyof typeof keys): Promise<boolean> {
  try {
    await localforage.removeItem(key);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export default {
  save,
  get,
  remove,
};
