import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/movies/movieSlice"

export const store = configureStore( {
    reducer : {
        moviesReducer
    }
} )