import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './features/movies/movieSlice'

export const store = configureStore({
  reducer: {
    movies: moviesReducer
  }
})

// movies is same as name property of movieSlice
