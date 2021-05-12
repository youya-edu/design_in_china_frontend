import { User } from "@/domain";
import { httpRequest } from "@/utils/http";

const fetchUserByUsername = async (username: string): Promise<User | null> => {
  let user: User | null = null;
  try {
    const response = await httpRequest.get(`/users/${username}`);
    user = response.data;
  } catch (error) {
    console.error(error);
  }
  return user;
};

export { fetchUserByUsername };
