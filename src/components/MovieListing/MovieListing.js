import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllSeries } from '../../features/movies/movieSlice';
import MovieCard from "../MovieCard/MovieCard"
import Slider from "react-slick";
import {Settings} from "../../common/settings.js"
import toast, {Toaster} from 'react-hot-toast';
import "./MovieListing.scss"

const MovieListing = ({searchText}) => {
    const movies = useSelector(getAllMovies) 
    const series = useSelector(getAllSeries)
    const moviesCards = movies.map(movie => {
        if (movie["error"])
            return
        return <MovieCard key = {movie.imdbID} data={movie}></MovieCard>
    })
    
    const seriesCards = series.map(series => {
        if (series["error"])
            return
        return <MovieCard key = {series.imdbID} data={series}></MovieCard>
    })
    
    // console.log("upper",series, movies)
    return (
        <div className='movie-wrapper'>
        {(Object.keys(movies).length === 0) && (Object.keys(series).length === 0) ? (
            <div className='loading'>
                <div><i className="fas fa-spinner"></i></div>
            </div>
          ) : (

                
              
                
                  <>
                  {/*Movies */}
                  {/* {console.log("movies from ", movies)} */}
                  {/* {console.log("series from ", series)} */}
                  {(Object.keys(movies).length === 1) && (movies[0]["error"]==="error") && (series[0]["error"]==="error")?
                    (
                        <h2>We didn't find any matches for {searchText}</h2>
                    ) : 
                    (
                        <div className='movie-list'>
                            <h2>Movies</h2>
                            <div className='movie-container'>
                                <Slider {...Settings}>{moviesCards}</Slider>
                            </div>
                            
                        </div>
                    )
                  }

                  {/*Series */}
                  {/* {console.log("series from ", series)} */}
                  {(Object.keys(series).length === 1) && (series[0]["error"]==="error") ?
                  (
                      
                      
                      <h2>no series of such title found</h2>
                      
                  ) : 
                  (
                    <div className='movie-list'>
                        {/* {console.log(series)} */}
                        <h2>Series</h2>
                        <div className='movie-container'>
                            <Slider {...Settings}>{seriesCards}</Slider>
                        </div>
                    </div>
                  )
                    
                } 
                </>
              
              
          )}
          </div>


    );
};

export default MovieListing;

{/*keys ['Title', 'Year', 'imdbID', 'Type', 'Poster']*/}

