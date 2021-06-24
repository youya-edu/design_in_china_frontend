import { Composition, CompositionCollection } from "@/domain";
import { httpRequest } from "@/utils/http";
import { API } from "./constant";

const fetchCompositions = async (
  pageNumber = 1
): Promise<CompositionCollection> => {
  let compositionCollection: CompositionCollection = {
    compostions: [],
    totalSize: 0,
  };
  console.log(pageNumber);
  try {
    const response = await httpRequest.get(API.COMPOSITIONS, {
      params: {
        page: pageNumber,
      },
    });
    compositionCollection = response.data;
  } catch (error) {
    console.error(error);
  }
  return compositionCollection;
};

const fetchCompostionById = async (id: string): Promise<Composition> => {
  let composition;
  try {
    const response = await httpRequest.get(`${API.COMPOSITIONS}/${id}`);
    composition = response.data;
  } catch (error) {
    console.error(error);
  }
  return composition;
};

export { fetchCompositions, fetchCompostionById };
