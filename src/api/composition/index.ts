import { Composition } from "@/domain";
import { httpRequest } from "@/utils/http";
import { API } from "./constant";

const fetchCompositions = async (): Promise<Composition[]> => {
  let compositions: Composition[] = [];
  try {
    const response = await httpRequest.get(API.COMPOSITIONS);
    compositions = response.data;
  } catch (error) {
    console.error(error);
  }
  return compositions;
};

export { fetchCompositions };
