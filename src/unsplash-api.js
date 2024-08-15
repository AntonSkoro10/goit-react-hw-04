import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export default async function fetchImages(query, currentPage) {
  try {
    const result = await axios.get('/search/photos', {
      params: {
        query: query,
        page: currentPage,
        per_page: 10,
        client_id: "5WuXKwal-H-QLgFnOzc1HciolmvfhFjDUHMUQgmFyYw",
        orientation: "landscape", 
      }
    });
    console.log("API result:", result.data); 
    return result.data;
  } catch (error) {
    console.error("API error:", error);
    return { results: [] }; 
  }
}
