import { RAPID_API_KEY, RAPID_API_URL, RAPID_HOST } from "../utils/endPointUrl";
import { AXIOS_METHOD } from "../utils/helperText";
import { Axios } from "./axios";

export const searchYouTube = async (q) => {
  q = encodeURIComponent(q);
  const headers = {
    "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
    "x-rapidapi-key": "bba1c7ea6dmsh4c0f40810851647p14d4bajsn1e148090925f",
  };
  const response = await Axios.setHeader(headers).callApi(
    AXIOS_METHOD.GET,
    RAPID_API_URL,
    q
  );
  console.log("axioscall", response.data.items);
  return response.data.items.filter((item) => item.type === "video");
};
