import movieApi from "./movieApi"
import { APIKey } from "./MovieApiKey"

export async function fetchMovies(tag="Harry") {
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${tag}&type=movie`)
        .catch((err) => err)
    const { data } = await response;
    console.log("from api",data.Search)
    return data.Search
}


