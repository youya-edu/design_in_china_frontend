import { Composition } from "@/domain";
import axios from "axios";
import { YOUR_SECRET } from "@/../.secret";

const fetchCompositions = async (): Promise<Composition[]> => {
  const url = "https://api.unsplash.com/search/photos?query=summer&per_page=30";

  let compositions: Composition[] = [];
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Client-ID ${YOUR_SECRET}`,
        "Accept-Version": "v1",
      },
    });
    // eslint-disable-next-line
    const imgs: any[] = response.data.results;
    compositions = imgs.map((img, idx) => {
      return {
        id: idx,
        name: img.id,
        image: img.urls.small,
        description: img.alt_description,
      };
    });
  } catch (error) {
    console.error(error);
  }
  return compositions;
};

export { fetchCompositions };
