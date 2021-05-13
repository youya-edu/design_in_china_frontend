import jwtDecode, { JwtPayload } from "jwt-decode";
import { getJwt } from "@/domain";

export async function isJwtExpired(): Promise<boolean> {
  const token = await getJwt();
  if (token === null) {
    return true;
  }
  const { exp } = jwtDecode<JwtPayload>(token);
  return exp === undefined || new Date() > new Date(exp * 1000);
}
