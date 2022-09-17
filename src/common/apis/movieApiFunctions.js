import movieApi from "./movieApi"
import { APIKey } from "./MovieApiKey"

export async function fetchMovies(tag="Harry") {
    const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${tag}&type=movie`
    )
    .catch((err) => console.log("Error:", err))
    console.log(response.data.Search)
}


