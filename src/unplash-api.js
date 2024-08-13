import axios from "axios"
axios.default.baseURL = "https://api.unsplash.com/"
export default async function fetchImages(query, currentPage) {
    const result = await axios.get('/search/photos', {
        params: {
            query: query,
            page: currentPage,
            pare_page: 10,
            client_id: "a374a6d26de75ce50e3e2013",
            orientation: "landspace",
        }
    })
    return result.date
}