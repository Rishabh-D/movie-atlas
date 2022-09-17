import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies : []
}

const movieSlice = createSlice({
    name:"movies",
    initialState:initialState,
    reducers:{
        addMovies: (state, {payload}) => {
            state.movies = payload;
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

