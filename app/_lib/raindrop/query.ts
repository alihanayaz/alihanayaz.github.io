import "server-only";
import { cache } from "react";

const RAINDROP_API_URL = "https://api.raindrop.io/rest/v1";

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_RAINDROP_ACCESS_TOKEN}`,
  },
};

export const getBookmarkCollections = cache(async () => {
  try {
    const response = await fetch(`${RAINDROP_API_URL}/collections`, options);
    const responseData = await response.json();
    const filteredData = await responseData.items.filter(
      (item: any) => item.count > 0
    );
    return filteredData;
  } catch (error) {
    console.error(error);
    return null;
  }
});

export const getBookmarks = cache(async (id: string) => {
  try {
    const response = await fetch(
      `${RAINDROP_API_URL}/raindrops/${id}`,
      options
    );
    const responseData = await response.json();
    return responseData.items;
  } catch (error) {
    console.error(error);
    return null;
  }
});
