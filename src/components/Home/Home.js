import React, { useEffect }from 'react';
import MovieListing from "../MovieListing/MovieListing"
// removed fetchMovies function
import { useDispatch } from 'react-redux';

import { fetchAsyncMovies, fetchAsyncSeries } from '../../features/movies/movieSlice';

const Home = () => {

    const dispatch = useDispatch();
    useEffect(() => { 
        dispatch(fetchAsyncMovies())
        dispatch(fetchAsyncSeries())
    },[dispatch])

    console.log("runs home")
    return (
        <div className='banner-img'>
            <MovieListing></MovieListing>
        </div>
    );
};

export default Home;