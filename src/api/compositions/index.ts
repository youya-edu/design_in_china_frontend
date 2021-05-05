import { Composition } from "@/domain";
import { httpRequest } from "@/utils/http";

const fetchCompositions = async (): Promise<Composition[]> => {
  let compositions: Composition[] = [];
  try {
    compositions = await (await httpRequest.get("/compositions")).data;
  } catch (error) {
    console.error(error);
  }
  return compositions;
};

export { fetchCompositions };
