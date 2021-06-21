import { CompositionCollection } from "@/domain";
import { httpRequest } from "@/utils/http";
import { API } from "./constant";

const fetchCompositions = async (): Promise<CompositionCollection> => {
  let compositionCollection: CompositionCollection = {
    compostions: [],
    totalSize: 0,
  };
  try {
    const response = await httpRequest.get(API.COMPOSITIONS);
    compositionCollection = response.data;
  } catch (error) {
    console.error(error);
  }
  return compositionCollection;
};

export { fetchCompositions };
