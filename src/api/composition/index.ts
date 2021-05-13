import { Composition } from "@/domain";
import { httpRequest } from "@/utils/http";
import Api from "./constant";

const fetchCompositions = async (): Promise<Composition[]> => {
  let compositions: Composition[] = [];
  try {
    const response = await httpRequest.get(Api.COMPOSITIONS);
    compositions = response.data;
  } catch (error) {
    console.error(error);
  }
  return compositions;
};

export { fetchCompositions };
