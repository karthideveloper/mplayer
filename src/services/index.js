import { Axios } from "./axios";

export const searchYouTube = async (q) => {
  q = encodeURIComponent(q);
  const response = await fetch(
    "https://youtube-search-results.p.rapidapi.com/youtube-search/?q=" + q,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
        "x-rapidapi-key": "bba1c7ea6dmsh4c0f40810851647p14d4bajsn1e148090925f",
      },
    }
  );
  const body = await response.json();
  console.log(body);
  const header1 = {
    "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
    "x-rapidapi-key": "bba1c7ea6dmsh4c0f40810851647p14d4bajsn1e148090925f",
  };
  const a=await Axios.setHeader(header1).callApi(
    "GET",
    "https://youtube-search-results.p.rapidapi.com/youtube-search/?q=",
    q
  );
  console.log("axioscall",a)

  return body.items.filter((item) => item.type === "video");
};
