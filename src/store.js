import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./features/movies/movieSlice";
import moviesReducer from "./features/movies/movieSlice"

export const store = configureStore( {
    reducer : {
        movies : moviesReducer
    }
} )



// movies is same as name property of movieSlice