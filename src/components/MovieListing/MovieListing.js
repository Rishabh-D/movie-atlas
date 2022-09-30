import React, {useRef} from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllSeries } from '../../features/movies/movieSlice';
import MovieCard from "../MovieCard/MovieCard"
import Slider from "react-slick";
import {Settings} from "../../common/settings.js"
import "./MovieListing.scss"
import Recommend from '../Recommend/Recommend';

const MovieListing = ({searchText}) => {
    const movies = useSelector(getAllMovies) 
    const series = useSelector(getAllSeries)
    const movieSliderRef = useRef()
    const seriesSliderRef = useRef()
   
    const moviesCards = movies.map(movie => {
        if (movie["error"])
            return
        return <MovieCard id = {movie.imdbID} key = {movie.imdbID} data={movie}></MovieCard>
    })
    
    const seriesCards = series.map(series => {
        if (series["error"])
            return
        return <MovieCard id = {series.imdbID} key = {series.imdbID} data={series}></MovieCard>
    })

    const onWheelSlider = (e, name) => {
        // console.log("inside loadad", e.deltaX)
        const slid = name === "movies" ? movieSliderRef : seriesSliderRef
        // console.log(name)
        if (!slid.current) return;

        if (e.deltaX > 0) {
            slid.current.slickNext();
        } else if (e.deltaX < 0) {
            slid.current.slickPrev();
        }
    };
    
    // console.log("upper",series, movies)
    return (
        <div className='movie-wrapper'>
        {(Object.keys(movies).length === 0) || (Object.keys(series).length === 0) ? (
            <div className='loading'>
                <div><i className="fas fa-spinner"></i></div>
            </div>
          ) : (
                    <>
                        {movies[0]["error"] === "error" && series[0]["error"] === "error" ?
                            <>
                                <h2>We didn't find any matches for '{searchText}'</h2>
                                <hr></hr>
                                <Recommend></Recommend>
                            </>
                            :
                            <>
                                
                                {!movies[0]["error"]? 
                                    <>
                                        {/* {console.log(moviesCards)} */}
                                       <div className='movie-list'>
                                            <h2>Movies</h2>
                                            <div onWheel={e => onWheelSlider(e,"movies")} className='movie-container'>
                                                <Slider ref={movieSliderRef} {...Settings}>{moviesCards}</Slider>
                                                {/* {moviesCards} */}
                                            </div>
                                        </div> 
                                    </>
                                :""
                                }

                                {!series[0]["error"]? 
                                    <>
                                       <div className='movie-list'>
                                            <h2>Series</h2>
                                            <div onWheel={e => onWheelSlider(e, "series")} className='movie-container'>
                                                <Slider ref={seriesSliderRef} {...Settings}>{seriesCards}</Slider>
                                            </div>
                                        </div>
                                    </>
                                :""
                                }       

                                
                            </>    
                        }
                    </>
              )
        }
          </div>
    )
}

export default MovieListing;

{/*keys ['Title', 'Year', 'imdbID', 'Type', 'Poster']*/}

