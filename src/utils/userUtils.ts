import localforage from "localforage";
import { User } from "@/store/types";

export async function saveUser(result: User): Promise<boolean> {
  try {
    await localforage.setItem("user", result);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function getUser(): Promise<User | null> {
  try {
    const result: User | null = await localforage.getItem("user");
    return result;
  } catch (err) {
    console.error(err);
  }
  return null;
}

export async function removeUser(): Promise<boolean> {
  try {
    await localforage.removeItem("user");
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export default { saveUser, getUser, removeUser };
