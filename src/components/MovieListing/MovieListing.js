import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllSeries, getmovieFetchError, getseriesFetchError } from '../../features/movies/movieSlice';
import MovieCard from "../MovieCard/MovieCard"
import Slider from "react-slick";
import {Settings} from "../../common/settings.js"
import toast, {Toaster} from 'react-hot-toast';
import "./MovieListing.scss"

const MovieListing = () => {
    const movies = useSelector(getAllMovies) 
    const series = useSelector(getAllSeries)
    const isMovieError = useSelector(getmovieFetchError)
    const isseriesError = useSelector(getseriesFetchError)
    const moviesCards = movies.length > 0 ? movies.map(movie => (<MovieCard key = {movie.imdbID} data={movie}></MovieCard>)) : []
    const seriesCards = series.length > 0 ? series.map(series => (<MovieCard key = {series.imdbID} data={series}></MovieCard>)) : []
    console.log("outside",isMovieError)

    return (
        <div className='movie-wrapper'>
        {(Object.keys(movies).length === 0) && (Object.keys(series).length === 0) ? (
            <div className='loading'>
                {console.log("fetch errr",isMovieError)}
                <div><i className="fas fa-spinner"></i></div>
            </div>
          ) : (

              
                
                  <>
                  
                  <div className='movie-list'>
                      <h2>Movies</h2>
                      <div className='movie-container'>
                          <Slider {...Settings}>{moviesCards}</Slider>
                      </div>
                      
                  </div>
                  {/* series  */}
                  <div className='movie-list'>
                      <h2>Series</h2>
                      <div className='movie-container'>
                          <Slider {...Settings}>{seriesCards}</Slider>
                      </div>
                  </div>
                  </>
              
              
          )}
          </div>


    );
};

export default MovieListing;

{/*keys ['Title', 'Year', 'imdbID', 'Type', 'Poster']*/}