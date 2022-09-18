// this became redundant after we used thunk

import movieApi from "./movieApi"
import { APIKey } from "./MovieApiKey"

export async function fetchMovies(tag="Harry") {
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${tag}&type=movie`)
        .catch((err) => err)
    const { data } = await response;
    return data.Search
}


