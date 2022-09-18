import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi"
import { APIKey } from "../../common/apis/MovieApiKey"


// create the thunk after importing createAsyncThunk 
// and call it inside dispatch in `Home`

export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies',
    async () => {
        // write the async fetch function here
        // return the data as Promise
        const tag = "Harry"
        const response = await movieApi.get(`?apiKey=${APIKey}&s=${tag}&type=movie`)
        const { data } = await response;
        return data.Search // data.Search contains the array of movie data

    }
)



const initialState = {
    movies : []
}

// handle the actions in reducers (extraReducers)

const movieSlice = createSlice({
    name:"movies",
    initialState:initialState,
    reducers:{
        addMovies: (state, {payload}) => {
            state.movies = payload;
        }
    },
    //extra reducers for thunk
    extraReducers:  {
        [fetchAsyncMovies.pending]: () => {
            console.log("pending")
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log("Fetched successfully")
            return {...state, movies: payload}
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("rejected")
        }

    }
})

export const {addMovies} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;


{/*
    {payload in addmovies function comes from action.payload}
    movieSlice.actions basically returns reducers like addMovies for us to export and use
    
    getAllMovies = (state) => state.movies.movies
    here first movies is name of the slice and 2nd movies is key of the initialState object

*/}

