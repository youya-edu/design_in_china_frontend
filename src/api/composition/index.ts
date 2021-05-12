import { Composition } from "@/domain";
import { httpRequest } from "@/utils/http";

const fetchCompositions = async (): Promise<Composition[]> => {
  let compositions: Composition[] = [];
  try {
    const response = await httpRequest.get("/compositions");
    compositions = response.data;
  } catch (error) {
    console.error(error);
  }
  return compositions;
};

export { fetchCompositions };
