import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllSeries } from '../../features/movies/movieSlice';
import MovieCard from "../MovieCard/MovieCard"

import "./MovieListing.scss"

const MovieListing = () => {
    const movies = useSelector(getAllMovies) 
    const series = useSelector(getAllSeries)

    const moviesCards = movies.map(movie => (<MovieCard key = {movie.imdbID} data={movie}></MovieCard>))
    const seriesCards = series.map(series => (<MovieCard key = {series.imdbID} data={series}></MovieCard>))
    
    return (
        <div className='movie-wrapper'>
            {/* movie  */}
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'>
                    {moviesCards}
                </div>
            </div>
            {/* series  */}
            <div className='movie-list'>
                <h2>Series</h2>
                <div className='movie-container'>
                    {seriesCards}
                </div>
            </div>
        </div>
    );
};

export default MovieListing;

{/*keys ['Title', 'Year', 'imdbID', 'Type', 'Poster']*/}