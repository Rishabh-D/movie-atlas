import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../features/movies/movieSlice';
import MovieCard from "../MovieCard/MovieCard"
import "./MovieListing.scss"

const MovieListing = () => {
    const movies = useSelector(getAllMovies) 

    const cards = movies.map(movie => (<MovieCard key = {movie.imdbID} data={movie}></MovieCard>))
    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'>
                    {cards}
                </div>
            </div>
        </div>
    );
};

export default MovieListing;

{/*keys ['Title', 'Year', 'imdbID', 'Type', 'Poster']*/}