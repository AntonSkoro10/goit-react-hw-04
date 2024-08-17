import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export async function fetchImages(query, page) {
  const response = await axios.get('/search/photos', {
    params: {
      query,
      page,
      per_page: 12,
      client_id: "5WuXKwal-H-QLgFnOzc1HciolmvfhFjDUHMUQgmFyYw"
    },
  });
  return response.data;
}
